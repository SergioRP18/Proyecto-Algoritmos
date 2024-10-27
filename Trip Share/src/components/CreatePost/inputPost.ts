class Post extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.render()
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
                <h1>Write your review</h1>
                <input type="text" id="description" placeholder="Every photo has a story..." required>
                <h1>Your Hashtags</h1>
                <input type="text" id="labels" placeholder="How do you identify this moment..." required>
                <h1>Your Location</h1>
                <input type="text" id="location" placeholder="Help others find this place..." required>
                <button class="update">Publish</button>
            `;
        }
    }
};
customElements.define("section-post", Post);
export default Post;