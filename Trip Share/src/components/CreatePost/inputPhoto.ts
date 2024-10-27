class Photo extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
                <h1>Create New Post</h1>
                <img src="">
                <h4>Drag photos here</h4>
                <button class="upload-btn">Select from device</button>
                <input type="file" accept="image/*" id="fileInput" required>
            `;
        }
    }
};
customElements.define("section-photo", Photo);
export default Photo;