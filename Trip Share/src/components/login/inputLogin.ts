import { dispatch } from "../../store/index";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/navigation";
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
                    <button type="submit" id="btn">Log In</button>
                </form>
            `;

            const loginBtn = this.ownerDocument.getElementById("btn");
            loginBtn?.addEventListener('submit', () => {
                    dispatch(navigate(Screens.DASHBOARD));
            });
        }
    }
};
customElements.define("login-section", Login);
export default Login;