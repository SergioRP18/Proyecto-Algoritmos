class Post extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.render()
    }

    render(){

    }
};
customElements.define("section-post", Post);
export default Post;