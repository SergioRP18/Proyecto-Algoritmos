import { addObserver } from "../../store";

class AppProfile extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode:'open'});
        addObserver(this);
    }

    async connectedCallback(){
        this.render();
    }

    render(){
        
    }
};
customElements.define("app-profile", AppProfile);