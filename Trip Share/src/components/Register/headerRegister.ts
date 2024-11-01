import styles from './headerRegister.css';
import { addObserver } from "../../store";
import "../../components/indexPadre";

class HeaderRegister extends HTMLElement {

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
                <div class="header-register">
                    <h1>Register</h1>
                    <img id="close-popup" src="data:image/svg+xml;base64,..." alt="Close">
                    <p>Join our travel community! Sign up to share your adventures, discover new destinations, and connect with fellow travel enthusiasts. Start exploring the world today!</p>
                </div>
            `;

            const style = document.createElement("style");
            style.textContent = styles;
            this.shadowRoot.appendChild(style);

            this.shadowRoot.getElementById("close-popup")?.addEventListener('click', (event) => {
                event.preventDefault();
                this.dispatchEvent(new CustomEvent('close-popup', { bubbles: true, composed: true }));
            });
        }
    }
}

customElements.define("section-header-register", HeaderRegister);
export default HeaderRegister;
