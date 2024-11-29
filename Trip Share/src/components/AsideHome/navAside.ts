import styles from './navAside.css';
import '../../components/indexPadre';
import { getUser, getFirebaseInstance } from '../../utils/Firebase';
import { onAuthStateChanged } from "firebase/auth";
import {getFileCloudinary} from "../../utils/storageImage";

export enum Attribute {
    'photo' = 'photo',
    'uid' = 'uid',
    'username' = 'username',
    'name' = 'name',
}

class NavAside extends HTMLElement {
    photo?: string;
    name?: string;
    username?: string;
    uid?: number;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return Object.keys(Attribute);
    }

    attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined) {
        if (newValue !== oldValue) {
            if (propName === Attribute.uid) {
                this.uid = newValue ? Number(newValue) : undefined;
            } else {
                this[propName] = newValue;
            }
            this.render();
        }
    }

    connectedCallback() {
        if (!this.shadowRoot) {
            this.attachShadow({ mode: 'open' });
        }

        this.photo = this.getAttribute(Attribute.photo) || 'default-photo.jpg';
        this.name = this.getAttribute(Attribute.name) || 'No Name';
        this.username = this.getAttribute(Attribute.username) || 'No Username';
        this.uid = this.getAttribute(Attribute.uid) ? Number(this.getAttribute(Attribute.uid)) : undefined;

        this.render();
    }

    async render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = '';
    
            const aside = document.createElement('aside');
    
            try {
                const { auth } = await getFirebaseInstance();
                onAuthStateChanged(auth, async (user) => {
                    if (user) {
                        const userId = user.uid;
                        await this.renderNavProfile(userId);
    
                        // Crear el contenido principal de la barra lateral derecha
                        const userBar = this.createUserBar();
                        aside.appendChild(userBar);
                    } else {
                        console.log("No authenticated user.");
                    }
    
                    // Añadir el footer al aside
                    const footer = this.createFooter();
                    aside.appendChild(footer);
    
                    if (this.shadowRoot) {
                        this.shadowRoot.appendChild(aside);
                        this.addStyles();
                    }
                });
            } catch (error) {
                console.error('Error during render:', error);
            }
        }
    }
    

    async renderNavProfile(userId: string) {
        try {
            const data = await getUser(userId);
            console.log('data user', data);
             // Asegúrate de que `getUser` esté bien implementado
            if (data) {
                this.photo = data.photo || 'default-photo.jpg';
                this.name = data.name || 'No Name';
                this.username = data.username || 'No Username';
                this.uid = data.id;

                 // Renderiza nuevamente con los datos actualizados
            }
            return
        } catch (error) {
            console.error('Error fetching user profile:', error);
        }
    }

    createUserBar() {
        // Contenedor del user-bar en disposición horizontal
        const userBar = document.createElement('div');
        userBar.classList.add('user-bar-dashboard');

        // Imagen de perfil
        const profileImg = document.createElement('img');
        profileImg.src = getFileCloudinary(this.photo || 'path_to_default_image') ;
        profileImg.alt = 'Profile Picture';

        // Contenedor de la información del usuario
        const userInfo = document.createElement('div');
        userInfo.className = 'user-info';

        const usernameText = document.createElement('span');
        usernameText.className = 'username';
        usernameText.textContent = this.username || 'No Username';

        const nameText = document.createElement('span');
        nameText.className = 'name';
        nameText.textContent = this.name || 'No Name';

        userInfo.appendChild(usernameText);
        userInfo.appendChild(nameText);

        // Añadir imagen y detalles del usuario al contenedor user-bar
        userBar.appendChild(profileImg);
        userBar.appendChild(userInfo);

        return userBar;
    }

    private createFooter() {
        const footer = document.createElement('div');
        footer.classList.add('footer');

        const footerText1 = document.createElement('p');
        footerText1.innerText = 'Information - Help - News - API - Privacy - Conditions - Language - Trip Verified';
        
        const footerText2 = document.createElement('p');
        footerText2.innerText = '2024 TRIP SHARED FROM DMI';

        footer.appendChild(footerText1);
        footer.appendChild(footerText2);

        return footer;
    }

    private addStyles() {
        const cssNavAside = this.ownerDocument.createElement("style");
        cssNavAside.innerHTML = styles;
        this.shadowRoot?.appendChild(cssNavAside);
    }
}

customElements.define('app-nav-profile', NavAside);
export default NavAside;