import styles from './userBar.css'

export enum AttributeUser {
    'username' = 'username',
    'name' = 'name',
    'photo' = 'photo',
    'uid' = 'uid',
};

class UserBar extends HTMLElement {
    username? : string;
    name? : string;
    photo? : string;
    uid? : number;

    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }
    static get observedAttributes(){
        return Object.keys(AttributeUser);
    }
    attributeChangedCallback(propName: AttributeUser, oldValue: string | undefined, newValue: string | undefined){
        switch(propName){
                case AttributeUser.uid:
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
            const aside = this.ownerDocument.createElement('aside');

            const nav = this.ownerDocument.createElement('nav');

            const userBar = this.ownerDocument.createElement('div');
            userBar.classList.add('user-bar-dashboard'); 

            const img = this.ownerDocument.createElement('img');
            img.src = this.photo || 'default-photo.jpg';
            img.alt = 'Profile picture';

            const textContainer = this.ownerDocument.createElement('div');
            textContainer.classList.add('text-container');

            const h6 = this.ownerDocument.createElement('h6');
            h6.innerText = this.username || 'Username';

            const p = this.ownerDocument.createElement('p');
            p.innerText = this.name || 'Real Name';

            textContainer.appendChild(h6);
            textContainer.appendChild(p);

            userBar.appendChild(img);
            userBar.appendChild(textContainer);
            
            nav.appendChild(userBar);
            aside.appendChild(nav);

            this.shadowRoot.appendChild(aside);
        };
    
        const cssUserBar = this.ownerDocument.createElement("style");
        cssUserBar.innerHTML = styles;
        this.shadowRoot?.appendChild(cssUserBar);
    }    
};
customElements.define("user-bar", UserBar);
export default UserBar;
