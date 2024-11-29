import { onAuthStateChanged } from "firebase/auth";
import { appState } from "../../../../../free/Proyecto-Algoritmos-develop/Trip Share/src/store";
import { getFirebaseInstance, getUser } from "../../../../../free/Proyecto-Algoritmos-develop/Trip Share/src/utils/Firebase";
import { uploadFileCloudinary } from "../../../../../free/Proyecto-Algoritmos-develop/Trip Share/src/utils/storageImage";
import styles from "../../screens/editProfile/editProfile.css";

export enum AttributeUser {
    'username' = 'username',
    'name' = 'name',
    'photo' = 'photo',
    'uid' = 'uid',
}

class EditInputPhoto extends HTMLElement {
    username?: string;
    name?: string;
    photo?: string;
    uid?: number;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.loadUserProfile();
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

    render() {
        if (this.shadowRoot) {
            // Contenedor principal
            const header = this.ownerDocument.createElement("div");
            header.className = 'content';

            // Foto circular
            const imgDiv = this.ownerDocument.createElement("div");
            imgDiv.className = 'photo-container';
            const imgIcon = this.ownerDocument.createElement("img");
            imgIcon.src = this.photo || ''; // Aquí se debe poner la URL de la foto
            imgIcon.alt = 'User photo';
            imgIcon.className = 'user-photo';
            imgDiv.appendChild(imgIcon);

            // Nombre y usuario
            const userInfoDiv = this.ownerDocument.createElement("div");
            userInfoDiv.className = 'user-info';
            const userName = this.ownerDocument.createElement("p");
            userName.innerText = this.name || ''; // Reemplazar con el nombre real
            userInfoDiv.appendChild(userName);
            const userAlias = this.ownerDocument.createElement("p");
            userAlias.innerText = `@${this.username}`; // Reemplazar con el alias real
            userInfoDiv.appendChild(userAlias);

            // Botón "Change Photo"
            const changeButton = this.ownerDocument.createElement("button");
            changeButton.innerText = 'Change Photo';
            changeButton.className = 'change-photo-btn';
            changeButton.addEventListener('click', () => {
                uploadPhotoInput.click(); // Activar el input file al hacer click en el botón
            });

            // Input para cargar la nueva foto
            const uploadPhotoInput = this.ownerDocument.createElement("input");
            uploadPhotoInput.type = 'file';
            uploadPhotoInput.id = 'upload-photo';
            uploadPhotoInput.accept = 'image/*';
            uploadPhotoInput.style.display = 'none';
            uploadPhotoInput.addEventListener('change', () => {
                const file = uploadPhotoInput.files?.[0];
                if (file && uploadPhotoInput.files?.length) {
                    uploadFileCloudinary(file, this.id);
                } else {
                    this.id = 'undefined';
                }
            });

            // Agregar los elementos al contenedor
            header.appendChild(imgDiv);
            header.appendChild(userInfoDiv);
            header.appendChild(changeButton);
            header.appendChild(uploadPhotoInput);

            this.shadowRoot.appendChild(header);
        }

        const style = document.createElement('style');
        style.textContent = styles;
        this.shadowRoot?.appendChild(style);
    }
}

customElements.define("edit-input-photo", EditInputPhoto);

export default EditInputPhoto;