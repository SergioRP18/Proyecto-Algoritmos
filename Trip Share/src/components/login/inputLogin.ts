import styles from './inputLogin.css'; 
import { addObserver, dispatch } from "../../store";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/navigation";
import { loginUser } from '../../utils/Firebase';
import "../../components/indexPadre";

const credentials = {
    email: '',
    password: '',
};

class InputLogin extends HTMLElement {
    private showPopup: boolean;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        addObserver(this);
        this.showPopup = false;
    }

    connectedCallback() {
        this.render();
        this.shadowRoot?.addEventListener('close-popup', () => this.togglePopup());
    }

    changeEmail(e: Event) {
        const target = e.target as HTMLInputElement;
        credentials.email = target.value;
    }

    changePassword(e: Event) {
        const target = e.target as HTMLInputElement;
        credentials.password = target.value;
    }

    async submitForm(event: Event) {
        event.preventDefault();
        try {
            await loginUser(credentials.email, credentials.password);
            this.GoToDashboard();
        } catch (error) {
            console.error("Error logging in:", error);
            alert("An error occurred during login. Please try again.");
        }
    }

    GoToDashboard() {
        dispatch(navigate(Screens.DASHBOARD));
    }

    togglePopup() {
        this.showPopup = !this.showPopup;
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <style>${styles}</style>
                <form id="user-form" class="login-container">
                    <input type="email" id="email" name="email" placeholder="E-mail">
                    <input type="password" id="password" name="password" placeholder="Password">
                    <button type="submit" id="login-btn">Log In</button>
                    <div class="forgot-password">
                        <button type="button" id="forgotpassword-btn">¿Forgot your password?</button>
                    </div>
                    <div class="social-login">
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNNiAxMmE2IDYgMCAwIDAgMTEuNjU5IDJIMTJ2LTRoOS44MDV2NEgyMS44Yy0uOTI3IDQuNTY0LTQuOTYyIDgtOS44IDhjLTUuNTIzIDAtMTAtNC40NzctMTAtMTBTNi40NzcgMiAxMiAyYTkuOTkgOS45OSAwIDAgMSA4LjI4MiA0LjM5M2wtMy4yNzggMi4yOTVBNiA2IDAgMCAwIDYgMTIiLz48L3N2Zz4=">
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNMTIgMi4wNGMtNS41IDAtMTAgNC40OS0xMCAxMC4wMmMwIDUgMy42NiA5LjE1IDguNDQgOS45di03SDcuOXYtMi45aDIuNTRWOS44NWMwLTIuNTEgMS40OS0zLjg5IDMuNzgtMy44OWMxLjA5IDAgMi4yMy4xOSAyLjIzLjE5djIuNDdoLTEuMjZjLTEuMjQgMC0xLjYzLjc3LTEuNjMgMS41NnYxLjg4aDIuNzhsLS40NSAyLjloLTIuMzN2N2ExMCAxMCAwIDAgMCA4LjQ0LTkuOWMwLTUuNTMtNC41LTEwLjAyLTEwLTEwLjAyIi8+PC9zdmc+">
                    </div>
                    <a id="btn-register" class="create-account">Create new account</a>
                </form>
                <div class="overlay" style="display: ${this.showPopup ? 'block' : 'none'};" @click="${() => this.togglePopup()}"></div>
                <div class="popup" style="display: ${this.showPopup ? 'block' : 'none'};">
                    <app-register></app-register>
                </div>
            `;

            // Event listeners
            this.shadowRoot.getElementById("email")?.addEventListener('input', this.changeEmail.bind(this));
            this.shadowRoot.getElementById("password")?.addEventListener('input', this.changePassword.bind(this));
            this.shadowRoot.getElementById("login-btn")?.addEventListener('click', this.submitForm.bind(this));
            this.shadowRoot.getElementById("btn-register")?.addEventListener('click', (event) => {
                event.preventDefault();
                this.togglePopup();
            });
        }       
    }
}

customElements.define("login-section", InputLogin);
export default InputLogin;
