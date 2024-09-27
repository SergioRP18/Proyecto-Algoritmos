import {data} from './data/dataUser';
import { infoPost } from './data/dataPost';
import './components/indexPadre';
import NavBar, {Attribute} from './components/navBar/Nav';
import AppPost, {Attributes} from './components/cardPost/post';
import UserBar, {AttributeUser} from './components/UserBar/userBar';

class AppContainer extends HTMLElement {
    inputs: NavBar[] = [];
    posts: AppPost[] = [];

    constructor(){
        super();
        this.attachShadow({mode:'open'});

        data.forEach((element) => {
            const input = this.ownerDocument.createElement("app-nav-bar") as NavBar;
            input.setAttribute(Attribute.photo,element.photo);
            input.setAttribute(Attribute.uid,String(element.id));
            
            const user = this.ownerDocument.createElement("user-bar") as UserBar;
            user.setAttribute(AttributeUser.username,element.username);
            user.setAttribute(AttributeUser.name,element.name);
            user.setAttribute(AttributeUser.photo,element.photo);
            user.setAttribute(AttributeUser.uid,String(element.id));
            
            input.appendChild(user);

            this.inputs.push(input);
        });

        

        infoPost.forEach((element) => {
            const post = this.ownerDocument.createElement("app-post") as AppPost;
            post.setAttribute(Attributes.image,element.image);
            post.setAttribute(Attributes.photouser,element.photouser);
            post.setAttribute(Attributes.username,element.username);
            post.setAttribute(Attributes.region,element.region);
            post.setAttribute(Attributes.description,element.description);
            post.setAttribute(Attributes.hashtags,element.hashtags);
            post.setAttribute(Attributes.uid,String(element.id));
            this.posts.push(post);
        });
    }
    connectedCallback(){
        this.render();
    }
    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML += `
            <app-nav-profile></app-nav-profile>
            `;
        }
        if(this.shadowRoot){
            this.shadowRoot.innerHTML += `
                <section-search-bar></section-search-bar>
            `;
        }
        if(this.shadowRoot){
            this.inputs.forEach((input) => {
                this.shadowRoot?.appendChild(input);
            });
        }
        if(this.shadowRoot){
            this.posts.forEach((posts) => {
                this.shadowRoot?.appendChild(posts);
            });
        }
        if(this.shadowRoot){
            this.shadowRoot.innerHTML += `
                <nav-responsive></nav-responsive>
            `;
        }
    }
};
customElements.define('app-container', AppContainer);