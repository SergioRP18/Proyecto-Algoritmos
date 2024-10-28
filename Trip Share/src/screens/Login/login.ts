import { dispatch } from "../../store/index";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/navigation";
import "../../components/login/inputLogin";
class AppLogin extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    async connectedCallback(){
        this.render();
    }

    handleLoginButton() {
        dispatch(navigate(Screens.DASHBOARD));
    }


    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
                <login-section></login-section>
            `
        }
    }
};
customElements.define("app-login", AppLogin)