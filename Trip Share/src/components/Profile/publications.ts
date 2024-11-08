import styles from './publications.css';

class PublicationsUser extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    async connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            const divSection = this.ownerDocument.createElement('section')

            const div = this.ownerDocument.createElement('div')
            divSection.appendChild(div);

            const icon = this.ownerDocument.createElement('img');
            icon.id = 'icono-posts'
            icon.src = '<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#333333" d="M5.5 16V8a3 3 0 0 0-3-3a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5a3 3 0 0 0 3-3m7-11c1.886 0 2.828 0 3.414.586S16.5 7.114 16.5 9v6c0 1.886 0 2.828-.586 3.414S14.386 19 12.5 19h-1c-1.886 0-2.828 0-3.414-.586S7.5 16.886 7.5 15V9c0-1.886 0-2.828.586-3.414S9.614 5 11.5 5zm6 3v8a3 3 0 0 0 3 3a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5a3 3 0 0 0-3 3"/></svg>'
            div.appendChild(icon);

            const tittle = this.ownerDocument.createElement('h1');
            tittle.innerText = 'Publications'

            const section = this.ownerDocument.createElement('section')
            div.appendChild(section);

            this.shadowRoot.appendChild(divSection);

            const cssPost = this.ownerDocument.createElement("style");
            cssPost.innerHTML = styles;
            this.shadowRoot.appendChild(cssPost);
        }
    }
};
customElements.define('section-publications-user', PublicationsUser);
export default PublicationsUser;