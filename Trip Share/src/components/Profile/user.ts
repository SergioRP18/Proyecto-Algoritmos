export enum AttributeProfile {
    'username' = 'username',
    'name' = 'name',
    'photo' = 'photo',
    'uid' = 'uid',
    'description' = 'description'
}

class UserProfile extends HTMLElement {
    username?: string;
    name?: string;
    photo?: string;
    uid?: number;
    description?: string;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return Object.keys(AttributeProfile);
    }

    attributeChangedCallback(
        propName: AttributeProfile, 
        oldValue: string | undefined, 
        newValue: string | undefined
    ) {
        console.log(`Attribute changed: ${propName}, Old: ${oldValue}, New: ${newValue}`);
        switch (propName) {
            case AttributeProfile.uid:
                this.uid = newValue ? Number(newValue) : undefined;
                break;
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }

    connectedCallback() {
        console.log("UserProfile connectedCallback");

        // Valores por defecto
        if (!this.username) this.username = 'john_doe';
        if (!this.name) this.name = 'John Doe';
        if (!this.photo) this.photo = 'user-photo.jpg';
        if (!this.description) this.description = 'Traveler and photographer';
        if (!this.uid) this.uid = 12345;

        this.render();
    }

    render() {
        console.log("Rendering UserProfile");

        if (this.shadowRoot) {
            const header = document.createElement('section');
            const headerDiv = document.createElement('div');
            header.appendChild(headerDiv);

            const photoUser = document.createElement('img');
            photoUser.src = this.photo || 'default-photo.jpg';
            photoUser.alt = 'Profile picture';
            header.appendChild(photoUser);

            const username = document.createElement('h1');
            username.innerText = this.name || 'default_name';
            headerDiv.appendChild(username);

            const editProfile = document.createElement('button');
            editProfile.type = 'button';
            editProfile.id = 'edit-button-profile';
            editProfile.innerText = 'Edit profile';
            headerDiv.appendChild(editProfile);

            const bodyDiv = document.createElement('div');
            header.appendChild(bodyDiv);

            const countsUser = document.createElement('div');
            bodyDiv.appendChild(countsUser);

            const publications = document.createElement('p');
            publications.innerText = 'Publications';
            countsUser.appendChild(publications);

            const numberOfPublications = document.createElement('span');
            numberOfPublications.id = 'number-publications';
            numberOfPublications.innerText = '0';
            countsUser.appendChild(numberOfPublications);

            const followers = document.createElement('p');
            followers.innerText = 'Followers';
            countsUser.appendChild(followers);

            const numberOfFollowers = document.createElement('span');
            numberOfFollowers.id = 'number-followers';
            numberOfFollowers.innerText = '0';
            countsUser.appendChild(numberOfFollowers);

            const followed = document.createElement('p');
            followed.innerText = 'Followed';
            countsUser.appendChild(followed);

            const numberOfFollowed = document.createElement('span');
            numberOfFollowed.id = 'number-followed';
            numberOfFollowed.innerText = '0';
            countsUser.appendChild(numberOfFollowed);

            const footerDiv = document.createElement('div');
            header.appendChild(footerDiv);

            const description = document.createElement('p');
            description.innerText = this.description || 'default_description';
            footerDiv.appendChild(description);

            this.shadowRoot.appendChild(header);
        }
    }
}

customElements.define("section-user-profile", UserProfile);
export default UserProfile;
