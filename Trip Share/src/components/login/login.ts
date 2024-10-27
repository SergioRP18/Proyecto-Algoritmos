class Login extends HTMLElement {
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
                <img src="">

                <form id="user-form">
                    <input type="e-mail" id="email" name="email" placeholder="E-mail" required>
                    <input type="password" id="password" name="password" placeholder="Password" required>
                    <button type="submit">Log In</button>
                </form>

                <footer>
                    <p>Information - Help - News - API - Privacity - Conditions - Lenguage - Trip Verified</p>
                    <p>2024 TRIP SHARE FROM DMI</p>
                </footer>
            `
        }
    }
};
customElements.define("login-section", Login);
export default Login;