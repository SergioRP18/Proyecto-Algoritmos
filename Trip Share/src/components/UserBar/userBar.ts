import styles from './userBar.css';
import { getUser, getFirebaseInstance } from '../../utils/Firebase';
import { onAuthStateChanged } from "firebase/auth";

export enum AttributeUser {
    'username' = 'username',
    'name' = 'name',
    'photo' = 'photo',
    'uid' = 'uid',
}

class UserBar extends HTMLElement {
    username?: string;
    name?: string;
    photo?: string;
    uid?: number;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return Object.keys(AttributeUser);
    }

    attributeChangedCallback(propName: AttributeUser, oldValue: string | undefined, newValue: string | undefined) {
        if (newValue !== oldValue) {
            if (propName === AttributeUser.uid) {
                this.uid = newValue ? Number(newValue) : undefined;
            } else {
                this[propName] = newValue;
            }
            this.render();  // Render sólo en cambios de atributo
        }
    }

    connectedCallback() {
        this.loadUserProfile();  // Cargar perfil de usuario sólo una vez al conectar el componente
    }

    private async loadUserProfile() {
        try {
            const { auth } = await getFirebaseInstance();
            onAuthStateChanged(auth, async (user) => {
                if (user) {
                    const userId = user.uid;
                    await this.renderNavProfile(userId);
                } else {
                    console.log("No authenticated user.");
                }
            });
        } catch (error) {
            console.error('Error during loadUserProfile:', error);
        }
    }

    private async renderNavProfile(userId: string) {
        try {
            const data = await getUser(userId);
            console.log(data);

            if (data) {
                this.photo = data.photo || 'default-photo.jpg';
                this.name = data.name || 'No Name';
                this.username = data.username || 'No Username';
                this.uid = data.id;

                this.render();
            }
        } catch (error) {
            console.error('Error fetching user profile:', error);
        }
    }

    private render() {
        if (!this.shadowRoot) return;

        this.shadowRoot.innerHTML = '';  // Limpiar el shadow root antes de renderizar

        const userBar = document.createElement('div');
        const userImage = this.createImage();
        const textContainer = this.createTextContainer();

        userBar.appendChild(userImage);
        userBar.appendChild(textContainer);

        this.shadowRoot.appendChild(userBar);

        const cssUserAside = this.ownerDocument.createElement("style");
        cssUserAside.innerHTML = styles;
        this.shadowRoot.appendChild(cssUserAside);
    }

    private createImage() {
        const img = document.createElement('img');
        img.src = this.photo || 'default-photo.jpg';
        img.alt = 'Foto de usuario';
        img.className = 'profile-img';
        return img;
    }

    private createTextContainer() {
        const textContainer = document.createElement('div');
        textContainer.classList.add('text-container');

        const userName = document.createElement('h6');
        userName.innerText = this.username || 'Username';

        const userFullName = document.createElement('p');
        userFullName.innerText = this.name || 'Real Name';

        textContainer.appendChild(userName);
        textContainer.appendChild(userFullName);

        return textContainer;
    }
}

customElements.define("user-bar", UserBar);
export default UserBar;