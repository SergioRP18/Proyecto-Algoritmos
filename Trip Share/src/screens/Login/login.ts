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
                <link rel="stylesheet" href="./login.css">
                <div class="main-container">
                    <div class="logo-login">
                         <section-image-login></section-image-login> <!-- Logo -->
                    </div>
                    <div class="right-section">
                        <login-section></login-section> <!-- Formulario de inicio de sesión -->
                    </div>
                </div>
                <section-footer-login></section-footer-login>
            `;
        }
    }
}

customElements.define("app-login", AppLogin);
