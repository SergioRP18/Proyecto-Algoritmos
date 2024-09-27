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
            this.shadowRoot.innerHTML = `
                <aside>
                    <nav>
                        <div class="user-bar-dashboard">
                            <img src="${this.photo}" alt="Profile picture">
                            <div class="text-container">
                                <h6>${this.username || "Username"}</h6>
                                <p>${this.name || "Real Name"}</p>
                            </div>
                        </div>
                    </nav>
                </aside>
            `;
        };
    
        const cssUserBar = this.ownerDocument.createElement("style");
        cssUserBar.innerHTML = styles;
        this.shadowRoot?.appendChild(cssUserBar);
    }    
};
customElements.define("user-bar", UserBar);
export default UserBar;
