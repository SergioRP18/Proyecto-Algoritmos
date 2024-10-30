class HeaderRegister extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
                <div class="header-register">
                    <h1>Register</h1>
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDUxMiA1MTIiPjxwYXRoIGZpbGw9IiMxNDdBRkYiIGQ9Im0yODkuOTQgMjU2bDk1LTk1QTI0IDI0IDAgMCAwIDM1MSAxMjdsLTk1IDk1bC05NS05NWEyNCAyNCAwIDAgMC0zNCAzNGw5NSA5NWwtOTUgOTVhMjQgMjQgMCAxIDAgMzQgMzRsOTUtOTVsOTUgOTVhMjQgMjQgMCAwIDAgMzQtMzRaIi8+PC9zdmc+">
                    <p>Join our travel community! Sign up to share your adventures, discover new destinations, and connect with fellow travel enthusiasts. Start exploring the world today!</p>
                </div>
            `;
        }
    }
};
customElements.define("section-header-register", HeaderRegister);
export default HeaderRegister;