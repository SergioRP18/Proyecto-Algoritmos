
import styles from './Nav.css'

export enum Attribute {
    'photo' = 'photo',
    'uid' = 'uid',
}

class NavBar extends HTMLElement {
    photo? : string;
    uid? : number;

    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }
    static get observedAttributes(){
        return Object.keys(Attribute);
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
    render() {
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
                <aside>
                    <nav>
                        <div class="logo">
                            <img src="https://github.com/SergioRP18/logo-trip-share/raw/60425bb95745f5de7c7d5532dd68d7a04b4b7787/Logo.png" alt="logo of brand">
                        </div>
    
                        <div class="inputs">
                            <ul>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#147AFF" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"/></svg>
                                    <a href="">Home</a>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#147AFF" d="m22 9.24l-7.19-.62L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27L18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28z"/></svg>
                                    <a href="">My Wish List</a>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#147AFF" d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8"/></svg>
                                    <a href="">Create</a>
                                </li>
                                <li>
                                    <img src="${this.photo}" alt="Profile Picture">
                                    <a href="">Profile</a>
                                </li>
                            </ul>
                        </div>

                        <user-bar></user-bar>

                    </nav>
                </aside>
            `;
        };
        const cssNav = this.ownerDocument.createElement("style");
        cssNav.innerHTML = styles;
        this.shadowRoot?.appendChild(cssNav);
    }    
};
customElements.define('app-nav-bar', NavBar);
export default NavBar;