import '../../components/indexPadre';

class AppMyWishList extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    async connectedCallback(){
        this.render();
    }

    render(){
        const nav = this.ownerDocument.createElement('nav-bar');
            this.shadowRoot?.appendChild(nav);
    }
};
customElements.define("app-wish-list", AppMyWishList);