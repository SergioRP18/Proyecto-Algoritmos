import '../../components/indexPadre';
import AppPost, { Attributes } from '../../components/cardPost/post';
import { infoPost } from '../../data/dataPost';
import { data } from '../../data/dataUser';
import NavBar, { Attribute } from '../../components/navBar/Nav';
import navAside, { AttributeAside } from '../../components/AsideHome/navAside';
import { addObserver, dispatch } from '../../store';
import { navigate } from '../../store/actions';
import { Screens } from '../../types/navigation';

class AppDashboard extends HTMLElement {
    posts: AppPost[] = [];

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        addObserver(this);

        // Crear y almacenar posts
        infoPost.forEach((element) => {
            const post = this.ownerDocument.createElement("app-post") as AppPost;
            post.setAttribute(Attributes.image, element.image);
            post.setAttribute(Attributes.photouser, element.photouser);
            post.setAttribute(Attributes.username, element.username);
            post.setAttribute(Attributes.region, element.region);
            post.setAttribute(Attributes.description, element.description);
            post.setAttribute(Attributes.hashtags, element.hashtags);
            post.setAttribute(Attributes.uid, String(element.id));
            this.posts.push(post);
        });
    }

    async connectedCallback() {
        this.render();
        const button = this.shadowRoot?.querySelector('button');
        button?.addEventListener('click', () => {
            dispatch(navigate(Screens.LOGIN));
        });
    }

    render() {
        const aside = this.ownerDocument.createElement("app-nav-profile") as navAside;
        aside.setAttribute(AttributeAside.photo, data.photo);
        aside.setAttribute(AttributeAside.uid, String(data.id));
        aside.setAttribute(AttributeAside.username, data.username);
        aside.setAttribute(AttributeAside.name, data.name);

        if (this.shadowRoot) {
            this.shadowRoot.appendChild(aside);
            this.shadowRoot.appendChild(this.ownerDocument.createElement("section-search-bar"));
            
            const input = this.ownerDocument.createElement("app-nav-bar") as NavBar;
            input.setAttribute(Attribute.photo, data.photo);
            input.setAttribute(Attribute.uid, String(data.id));
            input.setAttribute(Attribute.username, data.username);
            input.setAttribute(Attribute.name, data.name);
            this.shadowRoot.appendChild(input);
            
            this.posts.forEach((post) => {
                this.shadowRoot?.appendChild(post);
            });

            this.shadowRoot.appendChild(this.ownerDocument.createElement("nav-responsive"));
        }
    }
}

customElements.define("app-dashboard", AppDashboard);
