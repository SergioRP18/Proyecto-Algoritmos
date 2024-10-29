class ImageLogin extends HTMLElement {
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
            <div class="logo-login">
            <img src="https://github.com/SergioRP18/logo-trip-share/raw/60425bb95745f5de7c7d5532dd68d7a04b4b7787/Logo.png">
            </div>
            `;
        }
    }
};
customElements.define("section-image-login", ImageLogin);
export default ImageLogin;