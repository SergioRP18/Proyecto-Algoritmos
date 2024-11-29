import '../../components/indexPadre';
import { appState } from '../../store';

class AppProfile extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    async connectedCallback() {
        this.render()
        
		// if (appState.postsByUser.length === 0) {
		// 	const action = await getPostsByUserAction();
		// 	dispatch(action);
        // }
	}

    async render(){
            const nav = this.ownerDocument.createElement('nav-bar');
            this.shadowRoot?.appendChild(nav);

            const navResponsive = this.ownerDocument.createElement('nav-responsive');
            this.shadowRoot?.appendChild(navResponsive);

            const userProfile = this.ownerDocument.createElement('section-user-profile');
            this.shadowRoot?.appendChild(userProfile);

            const publicationsUser = this.ownerDocument.createElement('section-publications-user');
            this.shadowRoot?.appendChild(publicationsUser);

            const postComponent = this.ownerDocument.createElement('section-post');
            this.shadowRoot?.appendChild(postComponent);
    }
};
customElements.define("app-profile", AppProfile);
