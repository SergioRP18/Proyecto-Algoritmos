import styles from './selectorsRegister.css';

const credentials = {
    day: '',
    month: '',
    year: '',
    region: '',
};

class SelectorRegister extends HTMLElement {
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
            

            `;

            const style = document.createElement("style");
            style.textContent = styles;
            this.shadowRoot.appendChild(style);
        }
    }
}

customElements.define("section-selector-register", SelectorRegister);
export default SelectorRegister;
