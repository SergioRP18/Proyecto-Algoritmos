import styles from './inputsRegister.css';
import { registerUser } from "../../utils/Firebase";
import { dispatch } from "../../store";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/navigation";

const credentials = {
    name: '',
    lastName: '',
    email: '',
    password: '',
};

class InputsRegister extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        this.render();
    }

    changeEmail(e: Event) {
        credentials.email = (e.target as HTMLInputElement).value;
    }

    changePassword(e: Event) {
        credentials.password = (e.target as HTMLInputElement).value;
    }

    changeName(e: Event) {
        credentials.name = (e.target as HTMLInputElement).value;
    }

    changeLastName(e: Event) {
        credentials.lastName = (e.target as HTMLInputElement).value;
    }

    async submitForm() {
        const resp = await registerUser(credentials);
        resp ? dispatch(navigate(Screens.LOGIN)) : alert('No se pudo crear el usuario');
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
                <div class="inputs-register">
                    <input type="text" id="name" name="user" placeholder="Name" required>
                    <input type="text" id="last-name" name="last-user" placeholder="Last name" required>
                    <input type="email" id="user-email" name="email" placeholder="Email" required>
                    <input type="password" id="user-password" name="password" placeholder="Password" required>
                </div>
            `;

            const style = document.createElement("style");
            style.textContent = styles;
            this.shadowRoot.appendChild(style);
            const pEmail = this.ownerDocument.querySelector("#user-email");
            pEmail?.addEventListener('change', this.changeEmail);

            const pPass = this.ownerDocument.querySelector("#user-password");
            pPass?.addEventListener('change', this.changePassword);

            const pName = this.ownerDocument.querySelector("#user");
            pName?.addEventListener('change', this.changeName);

            const pLastName = this.ownerDocument.querySelector("#last-user");
            pLastName?.addEventListener('change', this.changeLastName);
        }
    }
}

customElements.define("section-inputs-register", InputsRegister);
export default InputsRegister;
