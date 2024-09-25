import styles from './userBar.css'

enum Attribute {
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
        return Object.keys(Attr);
    }
    attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined){
        switch(propName){
                case Attribute.uid:
                    this.uid = newValue ? Number(newValue) : undefined;
                    break;
                default:
                    this[propName] = newValue;
                    break;
        }
        this.render();
    }
    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
                <aside>
                    <nav>
                        <div class="user-bar-dashboard">
                            <img src="${this.photo}" alt="">
                            <h6>${this.username}</h6>
                            <p>${this.name}</p>
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