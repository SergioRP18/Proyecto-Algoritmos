import styles from './inputPost.css';
import { v4 as uuidv4 } from 'uuid';
import '../../components/indexPadre';
import { addObserver, appState, dispatch } from '../../store';
import {addPost, getPostsByUser, getFile, uploadPost} from '../../utils/Firebase';

let postInfo: {user: string, postDescription: string, postHashtags: string, postLocation: string, photo: string} = { user: appState.us.name, postDescription: '', postHashtags: '', postLocation: '', photo: ''}

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

    onChange (e: any){
        postInfo = {
            ...postInfo,
            [e.target.id]: e.target.value
        }
    }

    async submitPublish(e: Event, photoComponent: HTMLElement) {
        e.preventDefault();

        console.log(postInfo)
        postInfo.photo = photoComponent.id == 'undefined' ? 'path_to_default_image' : photoComponent.id;

        postInfo.user = appState.user
        const ac = await uploadPost(postInfo);
        dispatch(ac);
        // const description = description.value;
        // const hashtags = hashtags.value;
        // const location = location.value;
        // const post = { description, hashtags, location };
        // const action = await addPost(post);
        // dispatch(action);
        // this.close(dialog);

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

            const form = this.ownerDocument.createElement('form');
            form.className = 'create';

            const dialog = this.ownerDocument.createElement('dialog') as HTMLDialogElement;
            dialog.id = 'create-dialog';
            dialog.style.maxHeight = "80vh";
            dialog.style.overflowY = "auto";

            const photoComponent = this.ownerDocument.createElement('header-photo-create');
            photoComponent.id = `postit${uuidv4()}`
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
            description.onchange = (ev) => {this.onChange(ev)};
            inputsDiv.appendChild(description);

            const descriptionHashtags = this.ownerDocument.createElement('h1');
            descriptionHashtags.innerText = 'Your Hashtags';
            inputsDiv.appendChild(descriptionHashtags);

            const hashtags = this.ownerDocument.createElement('input');
            hashtags.type = 'text';
            hashtags.id = 'post-hashtags';
            hashtags.required = true;
            inputsDiv.appendChild(hashtags);
            hashtags.onchange = (ev) => {this.onChange(ev)};


            const descriptionLocation = this.ownerDocument.createElement('h1');
            descriptionLocation.innerText = 'Your Location';
            inputsDiv.appendChild(descriptionLocation);

            const location = this.ownerDocument.createElement('input');
            location.type = 'text';
            location.id = 'post-location';
            location.required = true;
            inputsDiv.appendChild(location);
            location.onchange = (ev) => {this.onChange(ev)};

            const saveButton = this.ownerDocument.createElement('button');
            saveButton.type = 'submit';
            saveButton.id = 'publish-btn';
            saveButton.innerText = 'Post';
            saveButton.className = 'submit-publish';

            inputsDiv.appendChild(saveButton);

            form.appendChild(inputsDiv);

            form.addEventListener('submit', (event) => {
                event.preventDefault();

                this.submitPublish(event, photoComponent)
                this.close(dialog)
            });

            dialog.appendChild(form);
            this.shadowRoot.appendChild(dialog);

            const cssPost = this.ownerDocument.createElement("style");
            cssPost.innerHTML = styles;
            this.shadowRoot.appendChild(cssPost);
        }
    }
}

customElements.define("section-post", Post);
export default Post;
