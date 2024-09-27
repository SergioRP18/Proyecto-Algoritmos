import styles from './navAside.css'

export enum AttributeAside {
    'photo' = 'photo',
    'uid' = 'uid',
    'username' = 'username',
    'name' = 'name',

}

class navAside extends HTMLElement {
    photo? : string;
    name? : string;
    username? : string;
    uid? : number;

    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }
    static get observedAttributes(){
        return Object.keys(AttributeAside);
    }
    attributeChangedCallback(propName: AttributeAside, oldValue: string | undefined, newValue: string | undefined){
        switch(propName){
            case AttributeAside.uid:
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
                        <user-bar photo= ${this.photo} name=${this.name} username=${this.username} ></user-bar>
                        <div class="footer">
                            <p>Information - Help - News - API - Privacity - Conditions - Lenguage - Trip Verified</p>
                            <p>2024 TRIP SHARED FROM DMI</p>
                        </div>
                    </nav>
                </aside>
            `;
        };

        const cssNavAside = this.ownerDocument.createElement("style");
        cssNavAside.innerHTML = styles;
        this.shadowRoot?.appendChild(cssNavAside);
    }
};
customElements.define('app-nav-profile', navAside);
export default navAside;