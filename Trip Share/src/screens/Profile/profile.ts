class Profile extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    async connectedCallback(){

    }

    render(){
        
    }
};
customElements.define("app-profile", Profile);