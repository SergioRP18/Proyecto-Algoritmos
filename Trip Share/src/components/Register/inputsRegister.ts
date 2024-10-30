class InputsRegister extends HTMLElement {
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
                <div class="inputs-register">
                    <input type="text" id="name" name="user" placeholder="Name" required>
                    <input type="text" id="last-name" name="last-user" placeholder="Last name" required>
                    <input type="email" id="user-email" name="email" placeholder="Email" required>
                    <input type="password" id="user-password" name="password" placeholder="Password" required>
                </div>
            `;
        }
    }
};
customElements.define("section-inputs-register", InputsRegister);
export default InputsRegister;