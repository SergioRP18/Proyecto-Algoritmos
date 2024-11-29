import styles from './inputLogin.css'; 
import { addObserver, dispatch } from "../../store";
import { loginUser } from '../../utils/Firebase';
import AppRegister from '../../components/Register/register';
import "../../components/indexPadre";
class InputLogin extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        addObserver(this);
    }

    connectedCallback() {
        this.render();
    }

    submitForm() {
        const emailInput = this.shadowRoot?.querySelector('#user-email') as HTMLInputElement;
        const passwordInput = this.shadowRoot?.querySelector('#user-password') as HTMLInputElement;
        
        const credentials = {
            email: emailInput?.value?.trim(),
            password: passwordInput?.value,
        };

		loginUser(credentials.email, credentials.password).then(userId => {
            console.log("Successful login");
            alert("Successful login");
            this.resetForm();
        })
        .catch(error => {
            console.error("Error during login:", error);
            alert("Please verify your credentials.");
        });
	}

    resetForm() {
        const form = this.shadowRoot?.querySelector("#form-user") as HTMLFormElement;
        form?.reset();
    }

    render() {
        if (this.shadowRoot) {
            const form = this.ownerDocument.createElement('form');
            form.id = 'user-form';
            form.className = 'login-container';

            const pName = this.ownerDocument.createElement('input');
            pName.type = 'email'; 
            pName.placeholder = 'Email';
            pName.id = 'user-email';
            pName.autofocus = true;
            form.appendChild(pName);

            const pPass = this.ownerDocument.createElement('input');
            pPass.type = 'password';
            pPass.placeholder = 'Password';
            pPass.id = 'user-password';
            form.appendChild(pPass);

            const save = this.ownerDocument.createElement('button');
            save.type = 'submit';
			save.innerText = 'Log In';
            save.id = 'login-btn';
			save.addEventListener('click', async (event) => {
                event.preventDefault();
                this.submitForm();
            });
			form.appendChild(save);

            //Div para el bottom de forgot
            const forgotDiv = this.ownerDocument.createElement('div');
            forgotDiv.className = 'forgot-password';    

            const forgot = this.ownerDocument.createElement('button');
			forgot.innerText = 'Forgot your password?';
            forgot.id = 'forgotpassword-btn';
			forgotDiv.appendChild(forgot);
            form.appendChild(forgotDiv);

            // Crear el div para los íconos sociales
            const socialLoginDiv = this.ownerDocument.createElement('div');
            socialLoginDiv.className = 'social-login';

            const imgGoogle = this.ownerDocument.createElement('img');
            imgGoogle.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNNiAxMmE2IDYgMCAwIDAgMTEuNjU5IDJIMTJ2LTRoOS44MDV2NEgyMS44Yy0uOTI3IDQuNTY0LTQuOTYyIDgtOS44IDhjLTUuNTIzIDAtMTAtNC40NzctMTAtMTBTNi40NzcgMiAxMiAyYTkuOTkgOS45OSAwIDAgMSA4LjI4MiA0LjM5M2wtMy4yNzggMi4yOTVBNiA2IDAgMCAwIDYgMTIiLz48L3N2Zz4=';
            imgGoogle.alt = 'google icon';
            imgGoogle.className = 'social-login';
            socialLoginDiv.appendChild(imgGoogle);

            const imgFacebook = this.ownerDocument.createElement('img');
            imgFacebook.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNMTIgMi4wNGMtNS41IDAtMTAgNC40OS0xMCAxMC4wMmMwIDUgMy42NiA5LjE1IDguNDQgOS45di03SDcuOXYtMi45aDIuNTRWOS44NWMwLTIuNTEgMS40OS0zLjg5IDMuNzgtMy44OWMxLjA5IDAgMi4yMy4xOSAyLjIzLjE5djIuNDdoLTEuMjZjLTEuMjQgMC0xLjYzLjc3LTEuNjMgMS41NnYxLjg4aDIuNzhsLS40NSAyLjloLTIuMzN2N2ExMCAxMCAwIDAgMCA4LjQ0LTkuOWMwLTUuNTMtNC41LTEwLjAyLTEwLTEwLjAyIi8+PC9zdmc+';
            imgFacebook.alt = 'google icon';
            imgFacebook.className = 'social-login';
            socialLoginDiv.appendChild(imgFacebook);

            form.appendChild(socialLoginDiv);

            const registerLink = this.ownerDocument.createElement('a');
            registerLink.id = 'btn-register';
            registerLink.className = 'create-account';
            registerLink.innerText = 'Create new account';
            registerLink.addEventListener('click', (event) => {
                event.preventDefault();
                const register = this.ownerDocument.createElement("app-register") as AppRegister;
                this.shadowRoot?.appendChild(register);
                register.openDialog();
            });
            form.appendChild(registerLink);

            this.shadowRoot.appendChild(form);
        };
        const cssLogin = this.ownerDocument.createElement("style");
        cssLogin.innerHTML = styles;
        this.shadowRoot?.appendChild(cssLogin);  
    }
}

customElements.define("login-section", InputLogin);
export default InputLogin;
