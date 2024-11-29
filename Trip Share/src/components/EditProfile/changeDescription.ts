class ChangeDescription extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        
    }
};
customElements.define("section-edit-description", ChangeDescription);
export default ChangeDescription;