import styles from './inputsRegister.css';
import { registerUser } from "../../utils/Firebase";
import { addObserver, dispatch } from "../../store";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/navigation";

const credentials = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    day: '',
    month: '',
    year: '',
    region: '',
};

class InputsRegister extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        addObserver(this);
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

customElements.define("section-inputs-register", InputsRegister);
export default InputsRegister;
