import { Screens } from '../../types/navigation';
import { dispatch } from '../../store';
import { navigate } from '../../store/actions';
import ExitAccount from '../ExitAccount/exitAccount';
import { getUser, getFirebaseInstance } from '../../utils/Firebase';
import { onAuthStateChanged } from "firebase/auth";
import '../../components/indexPadre';
import styles from './Nav.css';
import { Post } from '../../components/indexPadre';

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

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return Object.keys(Attribute);
    }

    attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined) {
        if (newValue !== oldValue) {
            if (propName === Attribute.uid) {
                this.uid = newValue ? Number(newValue) : undefined;
            } else {
                this[propName] = newValue;
            }
            this.render();
        }
    }

    connectedCallback() {
        if (!this.shadowRoot) {
            this.attachShadow({ mode: 'open' });
        }

        this.photo = this.getAttribute(Attribute.photo) || 'default-photo.jpg';
        this.name = this.getAttribute(Attribute.name) || 'No Name';
        this.username = this.getAttribute(Attribute.username) || 'No Username';
        this.uid = this.getAttribute(Attribute.uid) ? Number(this.getAttribute(Attribute.uid)) : undefined;

        this.render();
    }


    goNavigate(screen: Screens) {
        dispatch(navigate(screen));
    }

    async renderNavProfile(userId: string) {
        try {
            const data = await getUser(userId);
            console.log(data);
    
            if (data) {
                this.setAttribute(Attribute.photo, data.photo || 'default-photo.jpg');
                this.setAttribute(Attribute.name, data.name || 'No Name');
                this.setAttribute(Attribute.username, data.username || 'No Username');
                this.setAttribute(Attribute.uid, data.id.toString());
    
                this.render();
            }
        } catch (error) {
            console.error('Error fetching user profile:', error);
        }
    }

    async render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = '';

            try {
                const { auth } = await getFirebaseInstance();
                onAuthStateChanged(auth, async (user) => {
                    if (user) {
                        const userId = user.uid;

                        await Promise.allSettled([this.renderNavProfile(userId)]);

                        const aside = this.createAside();
                        this.shadowRoot?.appendChild(aside);
                    } else {
                        console.log("No authenticated user.");
                    }
                });
            } catch (error) {
                console.error('Error during render:', error);
            }

            const cssNav = this.ownerDocument.createElement('style');
            cssNav.innerHTML = styles;
            this.shadowRoot?.appendChild(cssNav);
        }
    }

    createAside() {
        const aside = this.ownerDocument.createElement('aside');
        const nav = this.ownerDocument.createElement('nav');
        aside.appendChild(nav);

        const logoDiv = this.createLogo();
        nav.appendChild(logoDiv);

        const inputsDiv = this.createNavLinks();
        nav.appendChild(inputsDiv);

        const userbarExit = this.ownerDocument.createElement('div');
        userbarExit.className = 'userbar-exit';

        const profileImg = this.ownerDocument.createElement('img');
        profileImg.src = this.photo || 'default-photo.jpg';
        profileImg.alt = 'Profile Picture';

        // Contenedor de la información del usuario
        const userInfo = this.ownerDocument.createElement('div');
        userInfo.className = 'user-info';

        const usernameText = this.ownerDocument.createElement('span');
        usernameText.className = 'username';
        usernameText.textContent = this.username || 'No Username';

        const nameText = this.ownerDocument.createElement('span');
        nameText.className = 'name';
        nameText.textContent = this.name || 'No Name';

        userInfo.appendChild(usernameText);
        userInfo.appendChild(nameText);

        // Ícono de logout
        const exitIcon = this.createExitIcon();

        // Agregar los elementos al contenedor `userbar-exit`
        userbarExit.appendChild(profileImg);
        userbarExit.appendChild(userInfo);
        userbarExit.appendChild(exitIcon);

        // Agregar el `userbar-exit` al `aside`
        aside.appendChild(userbarExit);

        return aside;
    }

    createLogo() {
        const logoDiv = this.ownerDocument.createElement('div');
        logoDiv.className = 'logo';
        const logoImg = this.ownerDocument.createElement('img');
        logoImg.src = 'https://github.com/SergioRP18/logo-trip-share/raw/60425bb95745f5de7c7d5532dd68d7a04b4b7787/Logo.png';
        logoImg.alt = 'logo of brand';
        logoDiv.appendChild(logoImg);
        return logoDiv;
    }

    createNavLinks() {
        const inputsDiv = this.ownerDocument.createElement('div');
        inputsDiv.className = 'inputs';
        const ul = this.ownerDocument.createElement('ul');

        const links = [
            { id: 'home-screen', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#147AFF" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"/></svg>', text: 'Home' },
            { id: 'wish-list-screen', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#147AFF" d="m22 9.24l-7.19-.62L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27L18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28z"/></svg>', text: 'My Wish List' },
            { id: 'create-screen', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#147AFF" d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8"/></svg>', text: 'Create' },
            { id: 'profile-screen', icon: '', text: 'Profile', imgSrc: this.photo }
        ];

        links.forEach(link => {
            const li = this.createNavLink(link);
            ul.appendChild(li);
        });

        inputsDiv.appendChild(ul);

    
        const exitDiv = this.createExitIcon();
        inputsDiv.appendChild(exitDiv);
    
        return inputsDiv;
    }

    createNavLink(link: { id: string, icon?: string, imgSrc?: string, text: string }) {
        const li = this.ownerDocument.createElement('li');
        li.id = link.id;
    
        const linkContainer = this.ownerDocument.createElement('div');
        linkContainer.className = 'link-container';
    
        if (link.icon) {
            const iconWrapper = this.ownerDocument.createElement('div');
            iconWrapper.className = 'icon';
            iconWrapper.innerHTML = link.icon;
            linkContainer.appendChild(iconWrapper);
        } else if (link.imgSrc) {
            const imgWrapper = this.ownerDocument.createElement('div');
            imgWrapper.className = 'user-photo';
            const img = this.ownerDocument.createElement('img');
            img.src = link.imgSrc;
            img.alt = `${link.text} photo`;
            imgWrapper.appendChild(img);
            linkContainer.appendChild(imgWrapper);
        }
    
        const textSpan = this.ownerDocument.createElement('span');
        textSpan.className = 'link-text';
        textSpan.textContent = link.text;
        linkContainer.appendChild(textSpan);

        li.addEventListener('click', (event) => {
            event.preventDefault();
            if (link.id === 'create-screen') {
                this.handleCreateDialog(); 
            } else {
                this.handleNavigation(link.id);
            }
        });
    
        li.appendChild(linkContainer);
    
        li.addEventListener('click', (event) => {
            event.preventDefault();
            this.handleNavigation(link.id);
        });
    
        return li;
    }

    createExitIcon() {
        const div = this.ownerDocument.createElement('div');
        div.className = 'exit-container';

        const iconWrapper = this.ownerDocument.createElement('div');
        iconWrapper.className = 'exit-icon';
        iconWrapper.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="#147AFF" d="M12 3a1 1 0 0 1 .117 1.993L12 5H7a1 1 0 0 0-.993.883L6 6v12a1 1 0 0 0 .883.993L7 19h4.5a1 1 0 0 1 .117 1.993L11.5 21H7a3 3 0 0 1-2.995-2.824L4 18V6a3 3 0 0 1 2.824-2.995L7 3zm5.707 5.464l2.828 2.829a1 1 0 0 1 0 1.414l-2.828 2.829a1 1 0 1 1-1.414-1.415L17.414 13H12a1 1 0 1 1 0-2h5.414l-1.121-1.121a1 1 0 0 1 1.414-1.415"/></g></svg>';

        div.appendChild(iconWrapper);
        div.addEventListener('click', this.handleExit.bind(this));

        return div;
    }

    handleNavigation(id: string) {
        switch (id) {
            case 'home-screen':
                this.goNavigate(Screens.DASHBOARD);
                break;
            case 'wish-list-screen':
                this.goNavigate(Screens.MY_WISH_LIST);
                break;
            case 'profile-screen':
                this.goNavigate(Screens.PROFILE);
                break;
            case 'create-screen':
                this.handleCreateDialog(); 
                break;
            case 'exit':
                this.handleExit();
                break;
        }
    }

    handleCreateDialog() {
        let createDialog = this.ownerDocument.querySelector('section-post') as Post;
        
        if (!createDialog) {
            createDialog = document.createElement('section-post') as Post;
            document.body.appendChild(createDialog);
        }
    
        const dialog = createDialog.shadowRoot?.getElementById('create-dialog') as HTMLDialogElement;
        
        if (dialog && !dialog.open) {
            dialog.showModal();
        }
    }

    handleExit() {
        const exitModal = document.createElement('exit-account');
        document.body.appendChild(exitModal);
    }
}

customElements.define('nav-bar', NavBar);
export default NavBar;
