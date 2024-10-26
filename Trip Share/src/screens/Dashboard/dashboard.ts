class AppDashboard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    async connectedCallback(){

    }

    render(){
        if(this.shadowRoot){
            
        }
    }
}
customElements.define("app-dashboard", AppDashboard);