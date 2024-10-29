import "../../components/login/inputLogin";
import "../../components/login/imageLogin";
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
            `
        }
    }
};
customElements.define("app-login", AppLogin)