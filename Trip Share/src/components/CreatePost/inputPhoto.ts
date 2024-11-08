import { appState } from "../../store";
import { uploadFileCloudinary } from "../../utils/storageImage";
import styles from './inputPhoto.css';

class Photo extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            const header = this.ownerDocument.createElement("div");
            header.className = 'content';

            const tittle = this.ownerDocument.createElement("h1");
            tittle.innerText = 'Create New Post';
            header.appendChild(tittle);

            const imgDiv = this.ownerDocument.createElement("div");
            imgDiv.className = 'image icon';
            const imgIcon = this.ownerDocument.createElement("img");

            // Enlace directo al ícono de imagen
            imgIcon.src = 'https://example.com/icon-upload.png'; // Cambia esta URL al enlace de tu ícono de carga
            imgIcon.alt = 'icon of upload image or photo';
            imgDiv.appendChild(imgIcon);
            header.appendChild(imgDiv);

            const uploadPhoto = this.ownerDocument.createElement("input");
            uploadPhoto.type = 'file';
            uploadPhoto.id = 'upload-photo';
            uploadPhoto.accept = 'image/*';
            uploadPhoto.addEventListener('change', () => {
                const file = uploadPhoto.files?.[0];
                if(file) uploadFileCloudinary(file, appState.user);
            });

            header.appendChild(uploadPhoto);

            // Agregar estilo CSS importado
            const cssPhoto = this.ownerDocument.createElement("style");
            cssPhoto.innerHTML = styles;
            this.shadowRoot?.appendChild(cssPhoto);

            this.shadowRoot.appendChild(header);
        }
    }
}

customElements.define("header-photo-create", Photo);
export default Photo;
