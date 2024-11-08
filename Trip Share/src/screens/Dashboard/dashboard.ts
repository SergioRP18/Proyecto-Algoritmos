import '../../components/indexPadre';
import AppPost, { Attributes } from '../../components/cardPost/post';
import { addObserver, dispatch } from '../../store';
import { navigate } from '../../store/actions';
import { Screens } from '../../types/navigation';
import { getPosts } from '../../utils/Firebase';

class AppDashboard extends HTMLElement {
    posts: AppPost[] = [];

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        addObserver(this);
    }

    async connectedCallback() {
        this.render();
        const button = this.shadowRoot?.querySelector('button');
        button?.addEventListener('click', () => {
            dispatch(navigate(Screens.LOGIN));
        });
    }

    async renderPost() {
        try {
            const infoPost = await getPosts();
            console.log(infoPost);

            const postContainer = this.ownerDocument.createElement("div"); // Crea un contenedor para los posts

            infoPost?.forEach((element) => {
                const post = this.ownerDocument.createElement("app-post") as AppPost;
                post.setAttribute(Attributes.image, element.image);
                post.setAttribute(Attributes.photouser, element.photouser);
                post.setAttribute(Attributes.username, element.username);
                post.setAttribute(Attributes.region, element.region);
                post.setAttribute(Attributes.description, element.description);
                post.setAttribute(Attributes.hashtags, element.hashtags);
                post.setAttribute(Attributes.uid, String(element.id));

                postContainer.appendChild(post); // Agrega el post al contenedor
            });

            this.shadowRoot?.appendChild(postContainer); // Agrega el contenedor al Shadow DOM

        } catch (error) {
            console.error('Error fetching posts:', error);
            return Promise.reject(error);
        }
    }

    async render() {
        const nav = this.ownerDocument.createElement('nav-bar');
        this.shadowRoot?.appendChild(nav);

        const search = this.ownerDocument.createElement('section-search-bar');
        this.shadowRoot?.appendChild(search);

        const navAside = this.ownerDocument.createElement('app-nav-profile');
        this.shadowRoot?.appendChild(navAside);

        const navResponsive = this.ownerDocument.createElement('nav-responsive');
        this.shadowRoot?.appendChild(navResponsive);

        await this.renderPost();
    }
}

customElements.define("app-dashboard", AppDashboard);
