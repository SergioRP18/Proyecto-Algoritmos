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
            <style>${styles}</style>
                <div class="header-register">
                    <h1>Register</h1>
                    <img id="close-popup" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjMTQ3QUZGIiBkPSJtNy4wNSA1LjYzNmw0Ljk1IDQuOTVsNC45NS00Ljk1bDEuNDE0IDEuNDE0bC00Ljk1IDQuOTVsNC45NSA0Ljk1bC0xLjQxNSAxLjQxNGwtNC45NS00Ljk1bC00Ljk0OSA0Ljk1bC0xLjQxNC0xLjQxNGw0Ljk1LTQuOTVsLTQuOTUtNC45NXoiLz48L3N2Zz4=" alt="Close">
                    <p>Join our travel community! Sign up to share your adventures, discover new destinations, and connect with fellow travel enthusiasts. Start exploring the world today!</p>
                </div>
            `;

            const style = document.createElement("style");
            style.textContent = styles;
            this.shadowRoot.appendChild(style);

            const closePopupButton = this.shadowRoot.querySelector("#close-popup");
            closePopupButton?.addEventListener('click', (event) => {
                event.preventDefault();
                this.dispatchEvent(new CustomEvent('close-popup', { bubbles: true, composed: true }));
            });
        }
    }
}

customElements.define("section-header-register", HeaderRegister);
export default HeaderRegister;
