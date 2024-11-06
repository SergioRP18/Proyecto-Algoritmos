
export enum AttributeProfile {
    'username' = 'username',
    'name' = 'name',
    'photo' = 'photo',
    'uid' = 'uid',
}

class UserProfile extends HTMLElement {
    username? : string;
    name? : string;
    photo? : string;
    uid? : number;

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            const header = this.ownerDocument.createElement('section');

            const headerDiv = this.ownerDocument.createElement('div');
            header.appendChild(headerDiv);

            const photoUser = this.ownerDocument.createElement('img');
            photoUser.src = this.photo || 'default-photo.jpg';
            photoUser.alt = 'Profile picture';
            header.appendChild(photoUser);

            const username = this.ownerDocument.createElement('h1');
            username.innerText = this.name || 'default_name';
            headerDiv.appendChild(username);

            const editProfile = this.ownerDocument.createElement('button');
            editProfile.type = 'button';
            editProfile.id = 'edit-button-profile'
            editProfile.innerText = 'Edit profile';
            headerDiv.appendChild(editProfile);

            



        }
    }
};
customElements.define("section-user-profile", UserProfile);
export default UserProfile;