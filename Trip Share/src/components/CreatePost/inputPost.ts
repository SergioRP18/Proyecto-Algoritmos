import styles from './inputPost.css';
import '../../components/indexPadre';
import { addObserver, appState, dispatch } from '../../store';
import { addPost, getPostsByUser, getFile } from '../../utils/Firebase';

class Post extends HTMLElement {
    private dialog!: HTMLDialogElement;

    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
        addObserver(this);
    }

    async connectedCallback(){
        window.addEventListener('beforeunload', this.closeOnNavigation);
        this.render();
    }

    async submitPublish() {
        // Aquí iría la lógica para manejar el envío del post
    }

    disconnectedCallback() {
        window.removeEventListener('beforeunload', this.closeOnNavigation);
    }
   
    close(dialog: HTMLDialogElement){
        dialog.close();
        this.remove();
    }

    closeOnNavigation() {
        this.close(this.dialog);
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = '';
   
            const dialog = this.ownerDocument.createElement('dialog') as HTMLDialogElement;
            dialog.id = 'create-dialog';
            dialog.style.maxHeight = "80vh"; // Limita el alto máximo del diálogo
            dialog.style.overflowY = "auto"; // Habilita el scroll vertical si es necesario
   
            const photoComponent = this.ownerDocument.createElement('header-photo-create');
            dialog.appendChild(photoComponent);
   
            const inputsDiv = this.ownerDocument.createElement('div');
            inputsDiv.className = 'inputs-create';
   
            const descriptionHeader = this.ownerDocument.createElement('h1');
            descriptionHeader.innerText = 'Write your review';
            inputsDiv.appendChild(descriptionHeader);
   
            const description = this.ownerDocument.createElement('input');
            description.type = 'text';
            description.id = 'post-description';
            description.required = true;
            inputsDiv.appendChild(description);
   
            const descriptionHashtags = this.ownerDocument.createElement('h1');
            descriptionHashtags.innerText = 'Your Hashtags';
            inputsDiv.appendChild(descriptionHashtags);
   
            const hashtags = this.ownerDocument.createElement('input');
            hashtags.type = 'text';
            hashtags.id = 'post-hashtags';
            hashtags.required = true;
            inputsDiv.appendChild(hashtags);
   
            const descriptionLocation = this.ownerDocument.createElement('h1');
            descriptionLocation.innerText = 'Your Location';
            inputsDiv.appendChild(descriptionLocation);
   
            const location = this.ownerDocument.createElement('input');
            location.type = 'text';
            location.id = 'post-location';
            location.required = true;
            inputsDiv.appendChild(location);

            // Botón de "Post"
            const saveButton = this.ownerDocument.createElement('button');
            saveButton.type = 'submit';
            saveButton.id = 'publish-btn';
            saveButton.innerText = 'Post';
            saveButton.className = 'submit-publish';
            saveButton.addEventListener('click', (event) => {
                event.preventDefault();
                this.submitPublish();
            });
            inputsDiv.appendChild(saveButton);
   
            dialog.appendChild(inputsDiv);
            this.shadowRoot.appendChild(dialog);

            const cssPost = this.ownerDocument.createElement("style");
            cssPost.innerHTML = styles;
            this.shadowRoot.appendChild(cssPost);
        }
    }
}

customElements.define("section-post", Post);
export default Post;
