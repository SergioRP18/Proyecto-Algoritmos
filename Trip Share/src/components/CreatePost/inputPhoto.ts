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
            imgIcon.src = '';
            imgIcon.alt = 'icon of upload image or photo';
            imgDiv.appendChild(imgIcon);
            header.appendChild(imgDiv);

            const uploadPhoto = this.ownerDocument.createElement("input");
            uploadPhoto.type = 'file';
            uploadPhoto.id = 'upload-photo';
            uploadPhoto.accept = 'image/*';

            const uploadButtonLabel = this.ownerDocument.createElement("label");
            uploadButtonLabel.setAttribute("for", "upload-photo");
            uploadButtonLabel.innerText = "Select from device";
            uploadButtonLabel.className = "upload-button"; 

            this.ownerDocument.body.appendChild(uploadPhoto);
            this.ownerDocument.body.appendChild(uploadButtonLabel);

            header.appendChild(uploadPhoto);
            header.appendChild(uploadButtonLabel);

            this.shadowRoot.appendChild(header);
            this.shadowRoot.appendChild(uploadPhoto);
            this.shadowRoot.appendChild(uploadButtonLabel);
        }
    }
}
customElements.define("header-photo-create", Photo);
export default Photo;