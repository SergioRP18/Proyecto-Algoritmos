import { addObserver } from "../../store";
import NavBar from "../../components/navBar/Nav";
import '../../components/indexPadre';

class AppProfile extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode:'open'});
        addObserver(this);
    }

    async connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){

            const navBar = this.ownerDocument.createElement('app-nav-bar') as NavBar;
            this.shadowRoot.appendChild(navBar);

            const userProfile = this.ownerDocument.createElement('section-user-profile');
            const publicationsUser = this.ownerDocument.createElement('section-publications-user');
            const postComponent = this.ownerDocument.createElement('section-post');

            userProfile.setAttribute('username', 'john_doe');
            userProfile.setAttribute('name', 'John Doe');
            userProfile.setAttribute('photo', 'user-photo.jpg');
            userProfile.setAttribute('description', 'Traveler and photographer');
            userProfile.setAttribute('uid', '12345');

            this.shadowRoot.appendChild(userProfile);
            this.shadowRoot.appendChild(publicationsUser);
            this.shadowRoot.appendChild(postComponent);
        }
    }
};
customElements.define("app-profile", AppProfile);
