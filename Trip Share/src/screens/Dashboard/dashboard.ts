import '../../components/indexPadre';
import AppPost, { Attributes } from '../../components/cardPost/post';
import NavBar, { Attribute } from '../../components/navBar/Nav';
import navAside, { AttributeAside } from '../../components/AsideHome/navAside';
import { addObserver, dispatch } from '../../store';
import { navigate } from '../../store/actions';
import { Screens } from '../../types/navigation';
import { getPosts, getUser, getFirebaseInstance } from '../../utils/Firebase';
import { onAuthStateChanged } from "firebase/auth";

class AppDashboard extends HTMLElement {
    posts: AppPost [] = [];
    user: navAside [] = [];

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

    async renderPost(){
        try{
            const infoPost = await getPosts();
            console.log(infoPost);
            

            infoPost?.forEach((element) => {
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

        } catch (error){
            console.error('Error fetching posts:', error);
            return Promise.reject(error);
        }
    }

    async renderNavProfile(userId: string){
        try{
            const data = await getUser(userId);
            console.log(data);
            
            if(data){
                const aside = this.ownerDocument.createElement("app-nav-profile") as navAside;
                aside.setAttribute(AttributeAside.photo, data.photo);
                aside.setAttribute(AttributeAside.uid, String(data.id));
                aside.setAttribute(AttributeAside.username, data.username);
                aside.setAttribute(AttributeAside.name, data.name);
                this.user?.push(aside);
                console.log(this.user);
                

                const input = this.ownerDocument.createElement("app-nav-bar") as NavBar;
                input.setAttribute(Attribute.photo, data.photo);
                input.setAttribute(Attribute.uid, String(data.id));
                input.setAttribute(Attribute.username, data.username);
                input.setAttribute(Attribute.name, data.name);
                this.shadowRoot?.appendChild(input);
                console.log(input);
                
            }
        } catch (error){
            console.error('Error fetching user profile:', error);
        }
    }

    async render() {
        try {
            const { auth } = await getFirebaseInstance();
            onAuthStateChanged(auth, async (user) => {
                if (user) {
                    const userId = user.uid;

                    await Promise.allSettled([this.renderPost(), this.renderNavProfile(userId)]);

                    if (this.shadowRoot) {
                        this.shadowRoot.appendChild(this.ownerDocument.createElement("section-search-bar"));

                        this.posts.forEach((post) => {
                            this.shadowRoot?.appendChild(post);
                        });

                        this.shadowRoot.appendChild(this.ownerDocument.createElement("nav-responsive"));
                    }
                } else {
                    console.log("No authenticated user.");
                }
            });
        } catch (error) {
            console.error('Error during render:', error);
        }
    }
}

customElements.define("app-dashboard", AppDashboard);
