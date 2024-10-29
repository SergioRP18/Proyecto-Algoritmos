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
                    <button id="btn">¿Forgot your password?</button>
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNNiAxMmE2IDYgMCAwIDAgMTEuNjU5IDJIMTJ2LTRoOS44MDV2NEgyMS44Yy0uOTI3IDQuNTY0LTQuOTYyIDgtOS44IDhjLTUuNTIzIDAtMTAtNC40NzctMTAtMTBTNi40NzcgMiAxMiAyYTkuOTkgOS45OSAwIDAgMSA4LjI4MiA0LjM5M2wtMy4yNzggMi4yOTVBNiA2IDAgMCAwIDYgMTIiLz48L3N2Zz4=">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNMTIgMi4wNGMtNS41IDAtMTAgNC40OS0xMCAxMC4wMmMwIDUgMy42NiA5LjE1IDguNDQgOS45di03SDcuOXYtMi45aDIuNTRWOS44NWMwLTIuNTEgMS40OS0zLjg5IDMuNzgtMy44OWMxLjA5IDAgMi4yMy4xOSAyLjIzLjE5djIuNDdoLTEuMjZjLTEuMjQgMC0xLjYzLjc3LTEuNjMgMS41NnYxLjg4aDIuNzhsLS40NSAyLjloLTIuMzN2N2ExMCAxMCAwIDAgMCA4LjQ0LTkuOWMwLTUuNTMtNC41LTEwLjAyLTEwLTEwLjAyIi8+PC9zdmc+">
                    <button type="submit" id="btn">Log In</button>
                </form>
            `;

            const loginBtn = this.ownerDocument.getElementById("btn");
            loginBtn?.addEventListener('submit', () => {
                    
            });
        }
    }
};
customElements.define("login-section", Login);
export default Login;