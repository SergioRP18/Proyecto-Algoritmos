import styles from './navAside.css';
import '../../components/indexPadre';

class navAside extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    async render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ''; 

            const userBar = document.createElement('user-bar'); 
            const aside = document.createElement('aside');

            const footer = document.createElement('div');
            footer.classList.add('footer');
            const footerText1 = document.createElement('p');
            footerText1.innerText = 'Information - Help - News - API - Privacy - Conditions - Language - Trip Verified';
            const footerText2 = document.createElement('p');
            footerText2.innerText = '2024 TRIP SHARED FROM DMI';

            footer.appendChild(footerText1);
            footer.appendChild(footerText2);

            aside.appendChild(userBar);
            aside.appendChild(footer);

            this.shadowRoot.appendChild(aside);

            this.addStyles();
        }
    }

    private addStyles() {
        const cssNavAside = this.ownerDocument.createElement("style");
        cssNavAside.innerHTML = styles;
        this.shadowRoot?.appendChild(cssNavAside);
    }
}

customElements.define('app-nav-profile', navAside);
export default navAside;
