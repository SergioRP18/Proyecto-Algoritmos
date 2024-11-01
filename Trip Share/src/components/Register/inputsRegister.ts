import { registerUser } from "../../utils/Firebase";
import { dispatch } from "../../store";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/navigation";

const credentials = {
    name: '',
    lastName: '',
    email: '',
    password: '',
}

class InputsRegister extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        this.render();
    }

    changeEmail(e: any) {
		credentials.email = e.target.value;
	}

	changePassword(e: any) {
		credentials.password = e.target.value;
	}

	changeName(e: any) {
		credentials.name = e.target.value;
	}

    changeLastName(e: any) {
		credentials.lastName = e.target.value;
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

            const pEmail = this.ownerDocument.getElementById("#user-email");
            pEmail?.addEventListener('change', this.changeEmail);

            const pPass = this.ownerDocument.getElementById("#user-password");
            pPass?.addEventListener('change', this.changePassword);

            const pName = this.ownerDocument.getElementById("#user");
            pName?.addEventListener('change', this.changeName);

            const pLastName = this.ownerDocument.getElementById("#last-user");
            pLastName?.addEventListener('change', this.changeLastName);
        }
    }
};
customElements.define("section-inputs-register", InputsRegister);
export default InputsRegister;