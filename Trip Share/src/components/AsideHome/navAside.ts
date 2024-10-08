import styles from './navAside.css'

class navAside extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }
    connectedCallback(){
        this.render();
    }
    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
                <aside>
                    <nav>
                        <user-bar></user-bar>
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