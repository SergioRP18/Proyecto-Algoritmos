import {data} from './data/data';
import './components/indexPadre';

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});

        data.forEach(user => {
            
        });
    }
    connectedCallback(){
        this.render();
    }
    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <app-nav-bar></app-nav-bar>
            `
        }
    }
};
customElements.define('app-container', AppContainer);