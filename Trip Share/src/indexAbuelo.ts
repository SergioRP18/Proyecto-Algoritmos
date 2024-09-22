import {data} from './data/dataUser';
import { infoPost } from './data/dataPost';
import './components/indexPadre';
import NavBar, {Attribute} from './components/navBar/Nav';
import AppPost, {Attributes} from './components/cardPost/post';

class AppContainer extends HTMLElement {
    users: NavBar[] = [];
    posts: AppPost[] = [];

    constructor(){
        super();
        this.attachShadow({mode:'open'});

        data.forEach((element) => {
            const user = this.ownerDocument.createElement("app-nav-bar") as NavBar;
            user.setAttribute(Attribute.username,element.username);
            user.setAttribute(Attribute.name,element.name);
            user.setAttribute(Attribute.photo,element.photo);
            user.setAttribute(Attribute.uid,String(element.id));
            this.users.push(user);
        });

        infoPost.forEach((element) => {
            const post = this.ownerDocument.createElement("app-post") as AppPost;
            post.setAttribute(Attributes.image,element.image);
            post.setAttribute(Attributes.photoUser,element.photoUser);
            post.setAttribute(Attributes.username,element.username);
            post.setAttribute(Attributes.region,element.region);
            post.setAttribute(Attributes.description,element.description);
            post.setAttribute(Attributes.hashtags,element.hashtags);
            this.posts.push(post);
        });
    }
    connectedCallback(){
        this.render();
    }
    render(){
        if(this.shadowRoot){
            this.users.forEach((users) => {
                this.shadowRoot?.appendChild(users);
            });

        if(this.shadowRoot){
            this.posts.forEach((posts) => {
                this.shadowRoot?.appendChild(posts);
            });
        }
            this.shadowRoot.innerHTML = `
                <app-nav-profile></app-nav-profile>
            `
        }
    }
};
customElements.define('app-container', AppContainer);