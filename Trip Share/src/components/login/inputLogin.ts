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
                    <input type="e-mail" id="email" name="email" placeholder="E-mail">
                    <input type="password" id="password" name="password" placeholder="Password">
                    <button type="submit">Log In</button>
                </form>
            `
        }
    }
};
customElements.define("login-section", Login);
export default Login;