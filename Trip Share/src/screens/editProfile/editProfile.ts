class AppEditProfile extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    async connectedCallback(){

    }

    return(){
            const nav = this.ownerDocument.createElement('nav-bar');
            this.shadowRoot?.appendChild(nav);
    }
};
customElements.define("app-edit-profile", AppEditProfile);