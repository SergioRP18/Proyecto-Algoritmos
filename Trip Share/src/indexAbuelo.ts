import {data} from './data/dataUser';
import { infoPost } from './data/dataPost';
import './components/indexPadre';
import NavBar, {Attribute} from './components/navBar/Nav';
import AppPost, {Attributes} from './components/cardPost/post';
import navAside, {AttributeAside} from './components/AsideHome/navAside';

class AppContainer extends HTMLElement {
    posts: AppPost[] = [];

    constructor(){
        super();
        this.attachShadow({mode:'open'});

        

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
        const aside = this.ownerDocument.createElement("app-nav-profile") as navAside;
            aside.setAttribute(AttributeAside.photo,data.photo);
            aside.setAttribute(AttributeAside.uid,String(data.id));
            aside.setAttribute(AttributeAside.username,data.username);
            aside.setAttribute(AttributeAside.name,data.name);
            aside.setAttribute(AttributeAside.photo,data.photo);

        if(this.shadowRoot){
            
            this.shadowRoot?.appendChild(aside);
            
        }
        if(this.shadowRoot){
            this.shadowRoot.innerHTML += `
                <section-search-bar></section-search-bar>
            `;
        }

        const input = this.ownerDocument.createElement("app-nav-bar") as NavBar;
            input.setAttribute(Attribute.photo,data.photo);
            input.setAttribute(Attribute.uid,String(data.id));
            input.setAttribute(Attribute.username,data.username);
            input.setAttribute(Attribute.name,data.name);
            input.setAttribute(Attribute.photo,data.photo);

        if(this.shadowRoot){
            
            this.shadowRoot?.appendChild(input);
            
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