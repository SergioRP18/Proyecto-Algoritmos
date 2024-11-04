import { addObserver } from "../../store";

class AppEditProfile extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode:'open'});
        addObserver(this);
    }

    async connectedCallback(){

    }

    return(){
        
    }
};
customElements.define("app-edit-profile", AppEditProfile);