import { addObserver, dispatch } from "../../store";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/navigation";
import { loginUser } from '../../utils/Firebase';

const credentials = {
    email: '',
    password: '',
};
class InputLogin extends HTMLElement {
    private showPopup: boolean;

    constructor(){
        super();
        this.attachShadow({mode:'open'});
        addObserver(this);
        this.showPopup = false;
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

	submitForm() {
		loginUser(credentials.email, credentials.password);
	}

    GoToLogin(){
        dispatch(navigate(Screens.DASHBOARD));
    }

    togglePopup() {
        this.showPopup = !this.showPopup;
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
                <form id="user-form">
                    <input type="e-mail" id="email" name="email" placeholder="E-mail">
                    <input type="password" id="password" name="password" placeholder="Password">
                    <button id="btn">¿Forgot your password?</button>
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNNiAxMmE2IDYgMCAwIDAgMTEuNjU5IDJIMTJ2LTRoOS44MDV2NEgyMS44Yy0uOTI3IDQuNTY0LTQuOTYyIDgtOS44IDhjLTUuNTIzIDAtMTAtNC40NzctMTAtMTBTNi40NzcgMiAxMiAyYTkuOTkgOS45OSAwIDAgMSA4LjI4MiA0LjM5M2wtMy4yNzggMi4yOTVBNiA2IDAgMCAwIDYgMTIiLz48L3N2Zz4=">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNMTIgMi4wNGMtNS41IDAtMTAgNC40OS0xMCAxMC4wMmMwIDUgMy42NiA5LjE1IDguNDQgOS45di03SDcuOXYtMi45aDIuNTRWOS44NWMwLTIuNTEgMS40OS0zLjg5IDMuNzgtMy44OWMxLjA5IDAgMi4yMy4xOSAyLjIzLjE5djIuNDdoLTEuMjZjLTEuMjQgMC0xLjYzLjc3LTEuNjMgMS41NnYxLjg4aDIuNzhsLS40NSAyLjloLTIuMzN2N2ExMCAxMCAwIDAgMCA4LjQ0LTkuOWMwLTUuNTMtNC41LTEwLjAyLTEwLTEwLjAyIi8+PC9zdmc+">
                    <button type="submit" id="btn-log-in">Log In</button>
                    <button id="btn-register">Create new account</button>
                </form>

                    <div class="overlay" @click="${() => this.togglePopup()}"></div>
                    <div class="popup">
                        <app-register></app-register>
                    </div>
            `;

            const user = this.ownerDocument.getElementById("#email");
            user?.addEventListener('change', this.changeEmail);

            const pass = this.ownerDocument.getElementById("#password");
            pass?.addEventListener('change', this.changePassword);

            const save = this.ownerDocument.getElementById("#btn-log-in");
            save?.addEventListener('click', this.submitForm);

            const loginBtn = this.shadowRoot.getElementById("#btn-log-in");
            loginBtn?.addEventListener('click', this.GoToLogin);

            const registerBtn = this.shadowRoot.getElementById("btn-register");
            registerBtn?.addEventListener('click', (event) => {
                event.preventDefault();
                this.togglePopup();
            });
        }
    }
};
customElements.define("login-section", InputLogin);
export default InputLogin;