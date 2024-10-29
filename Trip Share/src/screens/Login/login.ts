import "../../components/login/inputLogin";
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
                <login-section></login-section>
            `
        }
    }
};
customElements.define("app-login", AppLogin)