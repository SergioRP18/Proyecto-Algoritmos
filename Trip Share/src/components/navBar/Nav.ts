import { Screens } from '../../types/navigation';
import { dispatch } from '../../store';
import { navigate } from '../../store/actions';
import ExitAccount from '../ExitAccount/exitAccount';
import styles from './Nav.css';
import Post from '../CreatePost/inputPost';

export enum Attribute {
    'photo' = 'photo',
    'uid' = 'uid',
    'username' = 'username',
    'name' = 'name',
}

class NavBar extends HTMLElement {
    photo?: string;
    name?: string;
    username?: string;
    uid?: number;

    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    static get observedAttributes(){
        return Object.keys(Attribute);
    }

    attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined){
        if (propName === Attribute.uid) {
            this.uid = newValue ? Number(newValue) : undefined;
        } else {
            this[propName] = newValue;
        }
        this.render();
    }

    connectedCallback(){
        if (!this.shadowRoot?.innerHTML) {
            this.render();
        }
    }

    goNavigate(screen: Screens){
        dispatch(navigate(screen));
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ''; 

            const aside = this.createAside();
            const userBarExit = this.createUserBarExit();

            // Coloca userBarExit dentro del nav
            const nav = aside.querySelector("nav");
            if (nav) {
                nav.appendChild(userBarExit); // Aquí agregas el userBarExit dentro de nav
            }

            this.shadowRoot.appendChild(aside);

            const cssNav = this.ownerDocument.createElement("style");
            cssNav.innerHTML = styles;
            this.shadowRoot.appendChild(cssNav);
        }
    }

    createAside() {
        const aside = this.ownerDocument.createElement("aside");
        const nav = this.ownerDocument.createElement("nav");
        aside.appendChild(nav);

        const logoDiv = this.createLogo();
        nav.appendChild(logoDiv);

        const inputsDiv = this.createNavLinks();
        nav.appendChild(inputsDiv);

        return aside;
    }

    createLogo() {
        const logoDiv = this.ownerDocument.createElement("div");
        logoDiv.className = "logo";
        const logoImg = this.ownerDocument.createElement("img");
        logoImg.src = "https://github.com/SergioRP18/logo-trip-share/raw/60425bb95745f5de7c7d5532dd68d7a04b4b7787/Logo.png";
        logoImg.alt = "logo of brand";
        logoDiv.appendChild(logoImg);
        return logoDiv;
    }

    createNavLinks() {
        const inputsDiv = this.ownerDocument.createElement("div");
        inputsDiv.className = "inputs";
        const ul = this.ownerDocument.createElement("ul");

        const links = [
            {id: "home-screen", icon:'<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#147AFF" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"/></svg>', text: 'Home' },
            {id: "wish-list-screen", icon:'<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#147AFF" d="m22 9.24l-7.19-.62L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27L18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28z"/></svg>', text: 'My Wish List' },
            {id: "create-screen", icon:'<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#147AFF" d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8"/></svg>', text: 'Create' },
            {id: "profile-screen", icon:'', text: 'Profile', imgSrc: this.photo }
        ];

        links.forEach(link => {
            const li = this.createNavLink(link);
            ul.appendChild(li);
        });

        inputsDiv.appendChild(ul);
        return inputsDiv;
    }

    createNavLink(link: { id: string, icon?: string, imgSrc?: string, text: string }) {
        const li = this.ownerDocument.createElement('li');
        li.id = link.id;

        if (link.icon) {
            const svg = this.ownerDocument.createElement('div');
            svg.innerHTML = link.icon;
            li.appendChild(svg);
        }

        if (link.id === "create-screen") {
            li.addEventListener('click', (event) => {
                event.preventDefault();
                const create = this.ownerDocument.createElement("section-post") as Post;
                this.shadowRoot?.appendChild(create);
                create.openDialog();
            });
        }

        li.addEventListener("click", (event) => {
            event.preventDefault();
            this.handleNavigation(link.id);
        });

        return li;
    }

    handleNavigation(id: string) {
        switch(id) {
            case "home-screen":
                this.goNavigate(Screens.DASHBOARD);
                break;
            case "wish-list-screen":
                this.goNavigate(Screens.MY_WISH_LIST);
                break;
            case "profile-screen":
                this.goNavigate(Screens.PROFILE);
                break;
        }
    }

    createUserBarExit() {
        const userBarExit = this.ownerDocument.createElement("div");
        userBarExit.className = 'userbar-exit';

        const userbarBotDiv = this.ownerDocument.createElement('div');
        userbarBotDiv.className = 'userbarbot';

        if(this.photo && this.name && this.username){
            const userBar = this.ownerDocument.createElement('user-bar');
            userBar.setAttribute('photo', this.photo);  
            userBar.setAttribute('name', this.name);    
            userBar.setAttribute('username', this.username); 
            userbarBotDiv.appendChild(userBar);
        }

        const exitDiv = this.createExitButton();
        userBarExit.appendChild(userbarBotDiv);
        userBarExit.appendChild(exitDiv);

        return userBarExit;
    }

    createExitButton() {
        const exitDiv = this.ownerDocument.createElement('div');
        exitDiv.className = 'exit';

        const svgExit = this.ownerDocument.createElement('svg');
        svgExit.setAttribute('class', 'exit');
        svgExit.setAttribute('width', '25');
        svgExit.setAttribute('height', '25');
        svgExit.setAttribute('viewBox', '0 0 24 24');

        const path1 = this.ownerDocument.createElement('path');
        path1.setAttribute('fill', '#147AFF');
        path1.setAttribute('d', 'M6 2h9a2 2 0 0 1 2 2v2h-2V4H6v16h9v-2h2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2');

        const path2 = this.ownerDocument.createElement('path');
        path2.setAttribute('fill', '#147AFF');
        path2.setAttribute('d', 'M16.09 15.59L17.5 17l5-5l-5-5l-1.41 1.41L18.67 11H9v2h9.67z');

        svgExit.appendChild(path1);
        svgExit.appendChild(path2);

        exitDiv.appendChild(svgExit);

        exitDiv.addEventListener("click", () => {
            const exitPopup = this.ownerDocument.createElement('exit-account') as ExitAccount;
            this.shadowRoot?.appendChild(exitPopup);
        });

        return exitDiv;
    }
}

customElements.define('app-nav-bar', NavBar);
export default NavBar;
