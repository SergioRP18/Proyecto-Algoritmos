import styles from './login.css'; 

import { dispatch } from "../../store/index";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/navigation";

class InputLogin extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="./login.css">
                <form id="user-form" class="login-container">
                    <input type="email" id="email" name="email" placeholder="E-mail">
                    <input type="password" id="password" name="password" placeholder="Password">
                    <button type="submit" id="login-btn">Log In</button>
                    <div class="forgot-password">
                        <button type="button" id="forgotpassword-btn">¿Forgot your password?</button>
                    </div>
                    <div class="social-login">
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNNiAxMmE2IDYgMCAwIDAgMTEuNjU5IDJIMTJ2LTRoOS44MDV2NEgyMS44Yy0uOTI3IDQuNTY0LTQuOTYyIDgtOS44IDhjLTUuNTIzIDAtMTAtNC40NzctMTAtMTBTNi40NzcgMiAxMiAyYTkuOTkgOS45OSAwIDAgMSA4LjI4MiA0LjM5M2wtMy4yNzggMi4yOTVBNiA2IDAgMCAwIDYgMTIiLz48L3N2Zz4=">
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNMTIgMi4wNGMtNS41IDAtMTAgNC40OS0xMCAxMC4wMmMwIDUgMy42NiA5LjE1IDguNDQgOS45di03SDcuOXYtMi45aDIuNTRWOS44NWMwLTIuNTEgMS40OS0zLjg5IDMuNzgtMy44OWMxLjA5IDAgMi4yMy4xOSAyLjIzLjE5djIuNDdoLTEuMjZjLTEuMjQgMC0xLjYzLjc3LTEuNjMgMS41NnYxLjg4aDIuNzhsLS40NSAyLjloLTIuMzN2N2ExMCAxMCAwIDAgMCA4LjQ0LTkuOWMwLTUuNTMtNC41LTEwLjAyLTEwLTEwLjAyIi8+PC9zdmc+">
                    </div>
                    <a id="btn-register" class="create-account">Create new account</a>
                </form>
            `;

            // Crear un elemento <style> y añadir el contenido del archivo CSS importado
            const style = document.createElement('style');
            style.textContent = styles;

            // Añadir el elemento <style> al shadowRoot
            this.shadowRoot.appendChild(style);

            // Listener para el botón de login
            const loginBtn = this.shadowRoot.querySelector("#login-btn");
            loginBtn?.addEventListener('click', (event) => {
                event.preventDefault();
                // Lógica para manejar el botón de inicio de sesión
            });
        }       
    }
}

customElements.define("login-section", InputLogin);
export default InputLogin;
