import '../../components/indexPadre';
class AppRegister extends HTMLElement {
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
                <section-header-register></section-header-register>
            `;
        }
    }
};
customElements.define("app-register", AppRegister)