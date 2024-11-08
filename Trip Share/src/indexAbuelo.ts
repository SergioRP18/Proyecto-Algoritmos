import './screens/Dashboard/dashboard'
import './screens/Login/login'
import './screens/Profile/profile'
import './screens/editProfile/editProfile'
import './screens/myWishList/wishList'
import { addObserver } from './store';
import { appState } from './store';
import { Screens } from './types/navigation';
class AppContainer extends HTMLElement {
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
            this.shadowRoot.innerHTML = '';

            switch(appState.screen){
                case Screens.DASHBOARD:
                    const dashboard = this.ownerDocument.createElement("app-dashboard");
                    this.shadowRoot?.appendChild(dashboard);
                    break;
                
                case Screens.LOGIN:
                    const login = this.ownerDocument.createElement("app-login");
                    this.shadowRoot?.appendChild(login);
                    break;
                
                case Screens.REGISTER:
                    const register = this.ownerDocument.createElement("app-register");
                    this.shadowRoot?.appendChild(register);
                    break;
                
                case Screens.PROFILE:
                    const profile = this.ownerDocument.createElement("app-profile");
                    this.shadowRoot?.appendChild(profile);
                    break;

                case Screens.MY_WISH_LIST:
                    const myWishList = this.ownerDocument.createElement("app-wish-list");
                    this.shadowRoot?.appendChild(myWishList);
                    break;
                
                case Screens.EDIT_PROFILE:
                    const editProfile = this.ownerDocument.createElement("app-edit-profile");
                    this.shadowRoot?.appendChild(editProfile);
                    break;

                default:
                    break;
            }
        }
    }
};
customElements.define('app-container', AppContainer);