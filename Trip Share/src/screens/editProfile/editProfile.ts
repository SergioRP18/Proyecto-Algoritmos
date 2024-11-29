import styles from './editProfile.css';
import { v4 as uuidv4 } from 'uuid';
import '../../components/indexPadre';
import { updateProfileEdit } from '../../utils/Firebase';
import { appState, dispatch } from '../../store';
import { Screens } from '../../types/navigation';
import { navigate } from '../../store/actions';
let updateInfo: {photo: string | null, desciption: string | null, actualPassword: string | null, password: string | null} = {photo: null, desciption: null, actualPassword: null, password: null}

class AppEditProfile extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    onChange (e: any){
        updateInfo = {
            ...updateInfo,
            [e.target.id]: e.target.value
        }
    }

    async submitPublish(e: Event, photoComponent: HTMLElement) {
        e.preventDefault();

        updateInfo.photo = photoComponent.id == 'undefined' ? null : photoComponent.id;

        const ac = await updateProfileEdit(appState.user, updateInfo.photo, updateInfo.desciption, updateInfo.actualPassword, updateInfo.password);

        // const description = description.value;
        // const hashtags = hashtags.value;
        // const location = location.value;
        // const post = { description, hashtags, location };
        // const action = await addPost(post);
        // dispatch(action);
        // this.close(dialog);

    }

    async connectedCallback() {
        this.render();
    }

    render() {
        const nav = this.ownerDocument.createElement('nav-bar');
        this.shadowRoot?.appendChild(nav);

        const form = this.ownerDocument.createElement('form');
        form.classList.add('form-container');

        // Photo Section
        const photoSection = this.ownerDocument.createElement('div');
        photoSection.classList.add('photo-section');
        const photoComponent = this.ownerDocument.createElement('edit-input-photo');
        photoComponent.id = `photo${uuidv4()}`;
        photoSection.appendChild(photoComponent);

        // Description Section
        const descriptionContainer = this.ownerDocument.createElement('div');
        descriptionContainer.classList.add('description-container');
        const descriptionInput = this.ownerDocument.createElement('textarea');
        descriptionInput.placeholder = 'Description';
        descriptionInput.maxLength = 150;
        const charCounter = this.ownerDocument.createElement('span');
        charCounter.textContent = '0/150';
        charCounter.classList.add('char-counter');
        descriptionContainer.appendChild(descriptionInput);
        descriptionContainer.appendChild(charCounter);
        descriptionInput.onchange = (ev) => {this.onChange(ev);};

        // Password Section
        const passwordSection = this.ownerDocument.createElement('div');
        passwordSection.classList.add('password-section');
        const currentPasswordInput = this.ownerDocument.createElement('input');
        currentPasswordInput.type = 'password';
        currentPasswordInput.placeholder = 'Current Password';
        currentPasswordInput.onchange = (ev) => {this.onChange(ev);};

        const newPasswordInput = this.ownerDocument.createElement('input');
        newPasswordInput.type = 'password';
        newPasswordInput.placeholder = 'New Password';
        newPasswordInput.onchange = (ev) => {this.onChange(ev);};

        const passwordButton = this.ownerDocument.createElement('button');
        passwordButton.textContent = 'Send';
        passwordButton.classList.add('send-password-btn');
        passwordSection.appendChild(currentPasswordInput);
        passwordSection.appendChild(newPasswordInput);
        passwordSection.appendChild(passwordButton);

        // Save Button
        const saveButton = this.ownerDocument.createElement('button');
        saveButton.textContent = 'Save';
        saveButton.type ='submit';
        saveButton.classList.add('save-btn');
        saveButton.addEventListener('click', (event) => {
            event.preventDefault();
            this.submitPublish(event, photoComponent);
            dispatch(navigate(Screens.PROFILE))
        });

        // Append all sections
        form.appendChild(photoSection);
        form.appendChild(descriptionContainer);
        form.appendChild(passwordSection);
        form.appendChild(saveButton);

        this.shadowRoot?.appendChild(form);

        const style = document.createElement('style');
        style.textContent = styles;
        this.shadowRoot?.appendChild(style);
    }
}

customElements.define("app-edit-profile", AppEditProfile);