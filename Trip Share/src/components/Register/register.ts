import styles from './register.css';
import { registerUser } from "../../utils/Firebase";
import '../../components/indexPadre';


class AppRegister extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        this.render();
    }

    async submitForm() {

        const inputs = this.shadowRoot?.querySelector("section-inputs-register");
        const selectors = this.shadowRoot?.querySelector("section-selector-register");

        const credentials = {
            name: inputs?.getAttribute('name') || '',
            lastName: inputs?.getAttribute('lastName') || '',
            email: inputs?.getAttribute('email') || '',
            password: inputs?.getAttribute('password') || '',
            day: selectors?.getAttribute('day') || '',
            month: selectors?.getAttribute('month') || '',
            year: selectors?.getAttribute('year') || '',
            region: selectors?.getAttribute('region') || '',
        };

        if (!credentials.name || !credentials.lastName || !credentials.email || !credentials.password || !credentials.day || !credentials.month || !credentials.year || !credentials.region) {
            alert("Please complete all fields.");
            return;
        }

        try {
            const response = await registerUser(credentials);
            if (response) {
                alert('Successful registration');
            } else {
                alert('Error when registering the user');
            }
        } catch (error) {
            console.error("Error during registration:", error);
            alert('An error occurred while trying to register the user.');
        }
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
                <section-header-register></section-header-register>
                <section-inputs-register></section-inputs-register>
                <section-selector-register></section-selector-register>
                <button id="submit-btn">Register</button>
            `;

            this.shadowRoot.querySelector("#submit-btn")?.addEventListener("click", () => this.submitForm());
        };
        const cssLogin = this.ownerDocument.createElement("style");
        cssLogin.innerHTML = styles;
        this.shadowRoot?.appendChild(cssLogin); 
    }
};
customElements.define("app-register", AppRegister);
export default AppRegister;

