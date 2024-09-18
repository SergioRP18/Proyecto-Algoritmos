export enum Attribute {
    'username' = 'username',
    'name' = 'name',
    'photo' = 'photo',
    'uid' = 'uid',
}

class NavBar extends HTMLElement {
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
                        <div class="logo">
                            <img src="" alt="logo of brand">
                        </div>

                        <div class="inputs">
                            <ul>
                                <li>
                                    <img src="" alt="">
                                    <a href="">Home</a>
                                </li>
                                <li>
                                    <img src="" alt="">
                                    <a href="">My Wish List</a>
                                </li>
                                <li>
                                    <img src="" alt="">
                                    <a href="">Create</a>
                                </li>
                                <li>
                                    <img src="" alt="">
                                    <a href="">Profile</a>
                                </li>
                            </ul>
                        </div>

                        <div class="input-log-out-bottom">
                            <img src="${this.photo}" alt="">
                            <h6>${this.username}</h6>
                            <p>${this.name}</p>
                            <img src="" alt="">
                        </div>
                    </nav>
                </aside>
            `;
        };
    }
};
customElements.define('app-nav-bar', NavBar);
export default NavBar;