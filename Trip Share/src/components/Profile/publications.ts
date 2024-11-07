class PublicationsUser extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    async connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){

        }
    }
};
customElements.define("section-publications-user", PublicationsUser);
export default PublicationsUser;