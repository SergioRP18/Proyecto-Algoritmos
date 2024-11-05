import '../../components/indexPadre';

class Post extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.render()
    }

    openDialog(){
        const dialog = this.shadowRoot?.querySelector('#create-dialog') as HTMLDialogElement;
        dialog?.showModal()
    }

    closeDialog(){
        const dialog = this.shadowRoot?.querySelector('#create-dialog') as HTMLDialogElement;
        dialog?.close();
    }

    render(){
        if(this.shadowRoot){
            const dialog = this.ownerDocument.createElement('dialog');
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
            location.id = 'post-hashtags';
            location.required = true;
            inputsDiv.appendChild(location);

            dialog.appendChild(inputsDiv);

            this.shadowRoot.appendChild(dialog);
        }
    }
};
customElements.define("section-post", Post);
export default Post;