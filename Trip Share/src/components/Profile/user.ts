class UserProfile extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){

    }

    render(){
        
    }
};
customElements.define("section-user-profile", UserProfile);
export default UserProfile;