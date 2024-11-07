
export enum AttributeProfile {
    'username' = 'username',
    'name' = 'name',
    'photo' = 'photo',
    'uid' = 'uid',
    'description' = 'description'
}

class UserProfile extends HTMLElement {
    username? : string;
    name? : string;
    photo? : string;
    uid? : number;
    description? : string;

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    static get observedAttributes() {
        return Object.keys(AttributeProfile);
    }

    attributeChangedCallback(propName: AttributeProfile, oldValue: string | undefined, newValue: string | undefined){
        switch(propName){
                case AttributeProfile.uid:
                    this.uid = newValue ? Number(newValue) : undefined;
                    break;
                default:
                    this[propName] = newValue;
                    break;
        }
        this.render();
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

            const bodyDiv = this.ownerDocument.createElement('div');
            header.appendChild(bodyDiv);

            const countsUser = this.ownerDocument.createElement('div');
            bodyDiv.appendChild(countsUser);

            const publications = this.ownerDocument.createElement('p');
            publications.innerText = 'Publications';
            countsUser.appendChild(publications);

            const numberOfPublications = this.ownerDocument.createElement('span');
            numberOfPublications.id = 'number-publications';
            numberOfPublications.innerText = '0';
            countsUser.appendChild(numberOfPublications);

            const followers = this.ownerDocument.createElement('p');
            followers.innerText = 'Followers';
            followers.appendChild(followers);

            const numberOfFollowers = this.ownerDocument.createElement('span');
            numberOfFollowers.id = 'number-followers';
            numberOfFollowers.innerText = '0';
            countsUser.appendChild(numberOfFollowers);

            const followed = this.ownerDocument.createElement('p');
            followed.innerText = 'Followed';
            countsUser.appendChild(followed);

            const numberOfFollowed = this.ownerDocument.createElement('span');
            numberOfFollowed.id = 'number-followed';
            numberOfFollowed.innerText = '0';
            countsUser.appendChild(numberOfFollowed);

            const footerDiv = this.ownerDocument.createElement('div');
            header.appendChild(footerDiv);

            const description = this.ownerDocument.createElement('p');
            description.innerText = this.description || 'default_description';
            footerDiv.appendChild(description);

            this.shadowRoot.appendChild(header);
        }
    }
};
customElements.define("section-user-profile", UserProfile);
export default UserProfile;