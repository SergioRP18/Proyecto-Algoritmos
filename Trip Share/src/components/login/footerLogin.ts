import styles from './footerLogin.css'

class FooterLogin extends HTMLElement {
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
                <link rel="stylesheet" href="./footerLogin.css">
                <div class="footer-login">
                    <p>Information - Help - News - API - Privacity - Conditions - Lenguage - Trip Verified</p>
                    <p>2024 TRIP SHARED FROM DMI</p>
                </div>
            `;
        };

        const cssLogin = this.ownerDocument.createElement("style");
        cssLogin.innerHTML = styles;
        this.shadowRoot?.appendChild(cssLogin);        
    }
};
customElements.define("section-footer-login", FooterLogin);
export default FooterLogin;