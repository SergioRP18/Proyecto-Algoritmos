export enum Attributes {
    "image" = "image",
    "photoUser" = "photoUser",
    "username" = "username",
    "region" = "region",
    "description" = "description",
    "hashtags" = "hashtags",
};

class AppPost extends HTMLElement {
    image? : string
    photoUser? : string
    username? : string
    region? : string
    description? : string
    hashtags? : string

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }
    static get observedAttributes(){
        return Object.keys(Attr);
    }
    attributeChangedCallback(propName:Attributes, oldValue:string | undefined, newValue:string | undefined){
        
    }
    connectedCallback(){
        this.render();
    }
    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
                <div class="post-container">
                    <div class="card">
                        <div class="head-card">
                            <img src="${this.photoUser}" alt="photo user">
                            <p>"${this.username}"</p>
                            <p>"${this.region}"</p>
                            <button>Follow</button>
                        </div>
                        <div class="body-card">
                            <p>"${this.description}"</p>
                            <a>"${this.hashtags}"</a>
                            <img src="${this.image}" alt="image post">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#147AFF" d="m13.11 5.72l-.57 2.89c-.12.59.04 1.2.42 1.66s.94.73 1.54.73H20v1.08L17.43 18H9.34a.35.35 0 0 1-.34-.34V9.82zM14 2L7.59 8.41C7.21 8.79 7 9.3 7 9.83v7.83C7 18.95 8.05 20 9.34 20h8.1c.71 0 1.36-.37 1.72-.97l2.67-6.15c.11-.25.17-.52.17-.8V11c0-1.1-.9-2-2-2h-5.5l.92-4.65c.05-.22.02-.46-.08-.66a4.8 4.8 0 0 0-.88-1.22zM4 9H2v11h2c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1"/></svg>
                            <p>Likes</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#147AFF" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H6l-2 2V4h16z"/></svg>
                            <p>Comments</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="none" stroke="#147AFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 4v4C6.425 9.028 3.98 14.788 3 20c-.037.206 5.384-5.962 10-6v4l8-7z"/></svg>
                            <p>Share</p>
                        </div>
                        <div class=""></div>
                    </div>
                </div>
            `;
        };
    }
};
customElements.define("app-post", AppPost);
export default AppPost;