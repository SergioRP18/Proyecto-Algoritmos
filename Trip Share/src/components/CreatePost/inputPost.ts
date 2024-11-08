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
        this.render();

        window.addEventListener('beforeunload', this.closeOnNavigation);

        if(appState.postsByUser.length === 0){
            const action = await getPostsByUser();
            dispatch(action);
        } else {
            this.render();
        }
    }

    async submitPublish() {
        
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
    
            const photoComponent = this.ownerDocument.createElement('header-photo-create');
            dialog.appendChild(photoComponent);
    
            const inputsDiv = this.ownerDocument.createElement('div');
            inputsDiv.className = 'inputs-create';
    
            const descriptionHeader = this.ownerDocument.createElement('h1');
            descriptionHeader.innerText = 'Write your review';
            dialog.appendChild(descriptionHeader);
    
            const description = this.ownerDocument.createElement('input');
            description.type = 'text';
            description.id = 'post-description';
            description.required = true;
            inputsDiv.appendChild(description);
    
            const descriptionHashtags = this.ownerDocument.createElement('h1');
            descriptionHashtags.innerText = 'Your Hashtags';
            dialog.appendChild(descriptionHashtags);
    
            const hashtags = this.ownerDocument.createElement('input');
            hashtags.type = 'text';
            hashtags.id = 'post-hashtags';
            hashtags.required = true;
            inputsDiv.appendChild(hashtags);
    
            const descriptionLocation = this.ownerDocument.createElement('h1');
            descriptionLocation.innerText = 'Your Location';
            dialog.appendChild(descriptionLocation);
    
            const location = this.ownerDocument.createElement('input');
            location.type = 'text';
            location.id = 'post-location';
            location.required = true;
            inputsDiv.appendChild(location);

            const save = this.ownerDocument.createElement('button');
            save.type = 'submit';
            save.id = 'publish-btn';
            save.innerText = 'Publish';
            save.className = 'submit-publish';
            save.addEventListener('click', (event) => {
                event.preventDefault();
                this.submitPublish();
            })
            inputsDiv.appendChild(save);
    
            dialog.appendChild(inputsDiv);
    
            this.shadowRoot.appendChild(dialog);
    
            console.log('Contenido del shadowRoot:', this.shadowRoot.innerHTML);
        }
    }
    
}

customElements.define("section-post", Post);
export default Post;
