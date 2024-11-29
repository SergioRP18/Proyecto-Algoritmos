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
            imgIcon.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNSIgaGVpZ2h0PSIzNSIgdmlld0JveD0iMCAwIDIwIDIwIj48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMTkuMDkgMmEuOS45IDAgMCAxIC45MS44ODlWMTcuMTFhLjkuOSAwIDAgMS0uOTEuODg5SC45MUEuOS45IDAgMCAxIDAgMTcuMTFWMi44OUEuOS45IDAgMCAxIC45MSAyek01LjQxNiA4LjQxN2wtNC4wNiA0LjA0MnY0LjIxN0gxOC42NHYtMS40MzNsLTMuMi0zLjEybC0yLjc3NyAyLjMzM3EtLjI0OS4xNzUtLjQ4LjE1NWEuOC44IDAgMCAxLS40MzktLjE4OXptMTMuMjItNS4wODZIMS4zNjJ2Ny4yM0w0Ljk2OCA2Ljk3YS43Mi43MiAwIDAgMSAuNDQtLjE1NnEuMjMyIDAgLjQxLjE0bDYuNDMxIDYuMDg4bDIuODA1LTIuMzVhLjcuNyAwIDAgMSAuNDIxLS4xNDZhLjcuNyAwIDAgMSAuNDE4LjE0NWwyLjc0MiAyLjY2NXpNMTUuMjczIDUuMjNjLjc1MyAwIDEuMzYzLjU5NyAxLjM2MyAxLjMzM3MtLjYxIDEuMzMzLTEuMzYzIDEuMzMzYy0uNzU0IDAtMS4zNjQtLjU5Ny0xLjM2NC0xLjMzM3MuNjEtMS4zMzMgMS4zNjQtMS4zMzMiLz48L3N2Zz4='; // Cambia esta URL al enlace de tu ícono de carga
            imgIcon.alt = 'icon of upload image or photo';
            imgDiv.appendChild(imgIcon);
            header.appendChild(imgDiv);

            const uploadPhoto = this.ownerDocument.createElement("input");
            uploadPhoto.type = 'file';
            uploadPhoto.id = 'upload-photo';
            uploadPhoto.accept = 'image/*';
            uploadPhoto.addEventListener('change', () => {
                const file = uploadPhoto.files?.[0];
                if(file) uploadFileCloudinary(file, this.id);
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
