import '../../components/indexPadre';
import { NavBar, Post, PublicationsUser, UserProfile } from "../../components/indexPadre";
import { appState } from '../../store';

class AppProfile extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    async connectedCallback() {
        console.log('in profile screen');
        console.log('screen app', appState.screen);
        
        console.log('posts', appState.postsByUser);
        this.render()
        
		// if (appState.postsByUser.length === 0) {
		// 	const action = await getPostsByUserAction();
		// 	dispatch(action);
        // }
            
	}

    render(){
        if(this.shadowRoot){
            console.log('render profile');
            

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
