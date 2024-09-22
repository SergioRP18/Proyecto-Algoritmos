import {data} from './data/data';
import './components/indexPadre';
import NavBar, {Attribute} from './components/navBar/Nav';

class AppContainer extends HTMLElement {
    users: NavBar[] = [];

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
    }
    connectedCallback(){
        this.render();
    }
    render(){
        if(this.shadowRoot){
            this.users.forEach((users) => {
                this.shadowRoot?.appendChild(users);
            });
        }
    }
};
customElements.define('app-container', AppContainer);