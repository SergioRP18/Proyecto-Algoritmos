import NavBar from "../../components/navBar/Nav";
import UserProfile from '../../components/Profile/user';
import PublicationsUser from '../../components/Profile/publications';
import Post from '../../components/CreatePost/inputPost';
import '../../components/indexPadre';

class AppProfile extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    async connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){

            const nav = this.ownerDocument.createElement('nav-bar') as NavBar;
            this.shadowRoot?.appendChild(nav);

            const userProfile = this.ownerDocument.createElement('section-user-profile') as UserProfile;
            this.shadowRoot?.appendChild(userProfile);

            const publicationsUser = this.ownerDocument.createElement('section-publications-user') as PublicationsUser;
            this.shadowRoot?.appendChild(publicationsUser);

            const postComponent = this.ownerDocument.createElement('section-post') as Post;
            this.shadowRoot?.appendChild(postComponent);
        }
    }
};
customElements.define("app-profile", AppProfile);
