import styles from './inputPost.css';
import '../../components/indexPadre';
import { addObserver, appState, dispatch } from '../../store';
import { addPost, getPostsByUser, getFile } from '../../utils/Firebase';

class Post extends HTMLElement {
    private dialog!: HTMLDialogElement;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        addObserver(this);
    }

    async connectedCallback() {
        window.addEventListener('beforeunload', this.closeOnNavigation);
        this.render();
    }

    async submitPublish() {
        const descriptionInput = this.shadowRoot?.querySelector('#post-description') as HTMLInputElement;
        const hashtagsInput = this.shadowRoot?.querySelector('#post-hashtags') as HTMLInputElement;
        const locationInput = this.shadowRoot?.querySelector('#post-location') as HTMLInputElement;

        if (descriptionInput?.value && hashtagsInput?.value && locationInput?.value) {
            const newPost = {
                description: descriptionInput.value,
                hashtags: hashtagsInput.value,
                location: locationInput.value,
            };

            try {
                await addPost(newPost);
                descriptionInput.value = '';
                hashtagsInput.value = '';
                locationInput.value = '';
                console.log("Post publicado exitosamente");
            } catch (error) {
                console.error("Error publicando el post:", error);
            }
        } else {
            console.warn("Por favor, completa todos los campos antes de publicar");
        }
    }

    disconnectedCallback() {
        window.removeEventListener('beforeunload', this.closeOnNavigation);
    }

    close(dialog: HTMLDialogElement) {
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
            dialog.style.maxHeight = "80vh";
            dialog.style.overflowY = "auto";

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
