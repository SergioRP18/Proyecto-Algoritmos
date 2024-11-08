class ChangeDescription extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            const div
        }
    }
};
customElements.define("section-edit-description", ChangeDescription);
export default ChangeDescription;