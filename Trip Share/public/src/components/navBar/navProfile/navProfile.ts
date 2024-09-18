export enum Attribute {
    'username' = 'username',
    'name' = 'name',
    'photo' = 'photo',
    'uid' = 'uid',
}

class NavProfile extends HTMLElement {
    username? : string;
    name? : string;
    photo? : string;
    uid? : number;

    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }
    static get observedAttributes(){
        const atr: Record<Attribute, null> = {
                username : null,
                name : null,
                photo : null,
                uid : null,
        };
        return Object.keys(atr);
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
    connectedCallback(){
        this.render();
    }
    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
                <aside>
                    <nav>
                        <div class="">
                        </div>

                        <div class="">
                            <p>Information - Help - News - API - Privacity - Conditions - Lenguage - Trip Verified</p>
                            <p>2024 TRIP SHARED FROM DMI</p>
                        </div>
                    </nav>
                </aside>
            `;
        };
    }
};
customElements.define('app-nav-profile', NavProfile);
export default NavProfile;