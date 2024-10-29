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
                <div class="footer-login">
                    <p>Information - Help - News - API - Privacity - Conditions - Lenguage - Trip Verified</p>
                    <p>2024 TRIP SHARED FROM DMI</p>
                </div>
            `;
        }
    }
};
customElements.define("section-footer-login", FooterLogin);
export default FooterLogin;