import "../../components/indexPadre";
class AppLogin extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    async connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
                <section-image-login></section-image-login>
                <login-section></login-section>
                <section-footer-login></section-footer-login>
            `;
        }
    }
};
customElements.define("app-login", AppLogin)