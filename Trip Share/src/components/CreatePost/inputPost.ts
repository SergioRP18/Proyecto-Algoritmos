import '../../components/indexPadre';

class Post extends HTMLElement {
    private dialog!: HTMLDialogElement;

    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback(){
        this.render();

        window.addEventListener('beforeunload', this.closeOnNavigation);
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
    
            const dialog = document.createElement('dialog') as HTMLDialogElement;
            dialog.id = 'create-dialog';
    
            const photoComponent = document.createElement('header-photo-create');
            dialog.appendChild(photoComponent);
    
            const inputsDiv = document.createElement('div');
            inputsDiv.className = 'inputs-create';
    
            const descriptionHeader = document.createElement('h1');
            descriptionHeader.innerText = 'Write your review';
            dialog.appendChild(descriptionHeader);
    
            const description = document.createElement('input');
            description.type = 'text';
            description.id = 'post-description';
            description.required = true;
            inputsDiv.appendChild(description);
    
            const descriptionHashtags = document.createElement('h1');
            descriptionHashtags.innerText = 'Your Hashtags';
            dialog.appendChild(descriptionHashtags);
    
            const hashtags = document.createElement('input');
            hashtags.type = 'text';
            hashtags.id = 'post-hashtags';
            hashtags.required = true;
            inputsDiv.appendChild(hashtags);
    
            const descriptionLocation = document.createElement('h1');
            descriptionLocation.innerText = 'Your Location';
            dialog.appendChild(descriptionLocation);
    
            const location = document.createElement('input');
            location.type = 'text';
            location.id = 'post-location';
            location.required = true;
            inputsDiv.appendChild(location);
    
            dialog.appendChild(inputsDiv);
    
            this.shadowRoot.appendChild(dialog);
    
            console.log('Contenido del shadowRoot:', this.shadowRoot.innerHTML);
        }
    }
    
}

customElements.define("section-post", Post);
export default Post;
