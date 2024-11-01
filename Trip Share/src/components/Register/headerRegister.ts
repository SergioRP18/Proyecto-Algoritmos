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
                    <img id="close-popup" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDUxMiA1MTIiPjxwYXRoIGZpbGw9IiMxNDdBRkYiIGQ9Im0yODkuOTQgMjU2bDk1LTk1QTI0IDI0IDAgMCAwIDM1MSAxMjdsLTk1IDk1bC05NS05NWEyNCAyNCAwIDAgMC0zNCAzNGw5NSA5NWwtOTUgOTVhMjQgMjQgMCAxIDAgMzQgMzRsOTUtOTVsOTUgOTVhMjQgMjQgMCAwIDAgMzQtMzRaIi8+PC9zdmc+">
                    <p>Join our travel community! Sign up to share your adventures, discover new destinations, and connect with fellow travel enthusiasts. Start exploring the world today!</p>
                </div>
            `;

            this.shadowRoot.getElementById("close-popup")?.addEventListener('click', (event) => {
                event.preventDefault();
                this.dispatchEvent(new CustomEvent('close-popup', { bubbles: true, composed: true }));
            });
        }
    }
}

customElements.define("section-header-register", HeaderRegister);
export default HeaderRegister;
