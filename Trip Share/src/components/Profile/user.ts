import styles from './user.css';
import { getFirebaseInstance, getUser } from "../../utils/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { dispatch } from '../../store';
import { navigate } from '../../store/actions';
import { Screens } from '../../types/navigation';

export enum AttributeProfile {
    'username' = 'username',
    'name' = 'name',
    'photo' = 'photo',
    'uid' = 'uid',
    'description' = 'description'
}

class UserProfile extends HTMLElement {
    username?: string;
    name?: string;
    photo?: string;
    uid?: number;
    description?: string;

    private isUserLoaded = false;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return Object.keys(AttributeProfile);
    }

    attributeChangedCallback(propName: AttributeProfile, oldValue: string | undefined, newValue: string | undefined) {
        switch (propName) {
            case AttributeProfile.uid:
                this.uid = newValue ? Number(newValue) : undefined;
                break;
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }

    async renderUser(userId: string) {
        if (this.isUserLoaded) return;

        try {
            const data = await getUser(userId);

            if (data) {
                this.setAttribute(AttributeProfile.photo, data.photo || 'default-photo.jpg');
                this.setAttribute(AttributeProfile.name, data.name || 'No Name');
                this.setAttribute(AttributeProfile.username, data.username || 'No Username');
                this.setAttribute(AttributeProfile.uid, data.id.toString());
                this.setAttribute(AttributeProfile.description, data.description || 'No description');

                this.isUserLoaded = true;
                this.render();
            }
        } catch (error) {
            console.error('Error fetching user profile:', error);
        }
    }

    async render() {
        try {
            const { auth } = await getFirebaseInstance();
            onAuthStateChanged(auth, async (user) => {
                if (user) {
                    const userId = user.uid;
                    await this.renderUser(userId);
                } else {
                    this.isUserLoaded = false;
                    this.render();
                }
            });
        } catch (error) {
            console.error('Error during render:', error);
        }

        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = '';
            
            const container = document.createElement('section');
            container.className = 'user-profile-container';
        
            // Contenedor para la foto de perfil
            const profilePhotoContainer = document.createElement('div');
            profilePhotoContainer.className = 'profile-photo-container';
        
            // Foto del usuario
            const photoUser = document.createElement('img');
            photoUser.src = this.photo || 'default-photo.jpg';
            photoUser.alt = 'Profile picture';
            photoUser.className = 'profile-photo';
        
            profilePhotoContainer.appendChild(photoUser);
        
            // Contenedor para la información de usuario
            const userInfoContainer = document.createElement('div');
            userInfoContainer.className = 'user-info-container';
        
            // Contenedor para nombre de usuario y botón
            const userHeader = document.createElement('div');
            userHeader.className = 'user-header';
        
            // Nombre de usuario
            const username = document.createElement('h1');
            username.innerText = this.name || 'default_name';
            username.className = 'username';
        
            // Botón de editar perfil al lado del nombre de usuario
            const editProfile = document.createElement('button');
            editProfile.type = 'button';
            editProfile.id = 'edit-button-profile';
            editProfile.innerText = 'Edit profile';
            
            editProfile.addEventListener('click', () => {
                dispatch(navigate(Screens.EDIT_PROFILE)); // Cambia `Screens.EDIT_PROFILE` según la constante para tu pantalla de edición
            });
        
            userHeader.appendChild(username);
            userHeader.appendChild(editProfile);
        
            // Contenedor de estadísticas
            const statsContainer = document.createElement('div');
            statsContainer.className = 'stats-container';
        
            const publications = document.createElement('div');
            publications.innerHTML = `<p>Publications</p><span>0</span>`;
            statsContainer.appendChild(publications);
        
            const followers = document.createElement('div');
            followers.innerHTML = `<p>Followers</p><span>0</span>`;
            statsContainer.appendChild(followers);
        
            const followed = document.createElement('div');
            followed.innerHTML = `<p>Followed</p><span>0</span>`;
            statsContainer.appendChild(followed);
        
            // Descripción del perfil
            const description = document.createElement('p');
            description.className = 'description';
            description.innerText = this.description || 'default_description';
        
            userInfoContainer.appendChild(userHeader);
            userInfoContainer.appendChild(statsContainer);
            userInfoContainer.appendChild(description);
        
            // Agregar los contenedores al contenedor principal
            container.appendChild(profilePhotoContainer);
            container.appendChild(userInfoContainer);
        
            this.shadowRoot.appendChild(container);
        
            const css = this.ownerDocument.createElement("style");
            css.innerHTML = styles;
            this.shadowRoot.appendChild(css);
        }        
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define("section-user-profile", UserProfile);
export default UserProfile;
