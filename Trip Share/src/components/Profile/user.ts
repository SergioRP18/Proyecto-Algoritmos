import { getFirebaseInstance, getUser } from "../../utils/Firebase";
import { onAuthStateChanged } from "firebase/auth";

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
        console.log(`Attribute changed: ${propName}, Old: ${oldValue}, New: ${newValue}`);
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
            console.log(data);

            if (data) {
                this.setAttribute(AttributeProfile.photo, data.photo || 'default-photo.jpg');
                this.setAttribute(AttributeProfile.name, data.name || 'No Name');
                this.setAttribute(AttributeProfile.username, data.username || 'No Username');
                this.setAttribute(AttributeProfile.uid, data.id.toString());
                this.setAttribute(AttributeProfile.description, data.description || 'No description');

                this.isUserLoaded = true; // Marcar que los datos del usuario fueron cargados
                this.render(); // Actualizar la vista después de cargar los datos
            }
        } catch (error) {
            console.error('Error fetching user profile:', error);
        }
    }

    // Método de renderizado principal
    async render() {
        try {
            const { auth } = await getFirebaseInstance();
            onAuthStateChanged(auth, async (user) => {
                if (user) {
                    // Si el usuario está autenticado, cargamos sus datos
                    const userId = user.uid;
                    await this.renderUser(userId);
                } else {
                    console.log("No authenticated user.");
                    this.isUserLoaded = false;

                    this.render(); 
                }
            });
        } catch (error) {
            console.error('Error during render:', error);
        }

        if (this.shadowRoot) {
            const header = document.createElement('section');
            const headerDiv = document.createElement('div');
            header.appendChild(headerDiv);

            // Foto del usuario
            const photoUser = document.createElement('img');
            photoUser.src = this.photo || 'default-photo.jpg';
            photoUser.alt = 'Profile picture';
            header.appendChild(photoUser);

            // Nombre del usuario
            const username = document.createElement('h1');
            username.innerText = this.username || 'default_name';
            headerDiv.appendChild(username);

            // Botón de editar perfil
            const editProfile = document.createElement('button');
            editProfile.type = 'button';
            editProfile.id = 'edit-button-profile';
            editProfile.innerText = 'Edit profile';
            headerDiv.appendChild(editProfile);

            // Sección de estadísticas
            const bodyDiv = document.createElement('div');
            header.appendChild(bodyDiv);

            const countsUser = document.createElement('div');
            bodyDiv.appendChild(countsUser);

            const publications = document.createElement('p');
            publications.innerText = 'Publications';
            countsUser.appendChild(publications);

            const numberOfPublications = document.createElement('span');
            numberOfPublications.id = 'number-publications';
            numberOfPublications.innerText = '0';
            countsUser.appendChild(numberOfPublications);

            const followers = document.createElement('p');
            followers.innerText = 'Followers';
            countsUser.appendChild(followers);

            const numberOfFollowers = document.createElement('span');
            numberOfFollowers.id = 'number-followers';
            numberOfFollowers.innerText = '0';
            countsUser.appendChild(numberOfFollowers);

            const followed = document.createElement('p');
            followed.innerText = 'Followed';
            countsUser.appendChild(followed);

            const numberOfFollowed = document.createElement('span');
            numberOfFollowed.id = 'number-followed';
            numberOfFollowed.innerText = '0';
            countsUser.appendChild(numberOfFollowed);

            // Sección de descripción
            const footerDiv = document.createElement('div');
            header.appendChild(footerDiv);

            const description = document.createElement('p');
            description.innerText = this.description || 'default_description';
            footerDiv.appendChild(description);

            // Agregar al Shadow DOM
            this.shadowRoot.appendChild(header);
        }
    }

    connectedCallback() {
        console.log("UserProfile connectedCallback");
        this.render(); // Llamar a render() cuando se conecta el componente
    }
}

customElements.define("section-user-profile", UserProfile);
export default UserProfile;
