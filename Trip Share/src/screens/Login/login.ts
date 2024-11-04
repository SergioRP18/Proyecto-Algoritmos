import styles from './login.css';
import "../../components/indexPadre";

class AppLogin extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    async connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <div class="main-container">
                    <div class="logo-login-big">
                        <section-image-login></section-image-login> <!-- Logo -->
                    </div>
                    <div class="right-section">
                        <login-section></login-section> <!-- Formulario de inicio de sesión -->
                    </div>
                </div>
                <div class="footer">
                    <section-footer-login></section-footer-login>
                </div>
            `;

            const style = document.createElement('style');
            style.textContent = styles;
            this.shadowRoot.appendChild(style);
        }
    }
}
customElements.define("app-login", AppLogin);
