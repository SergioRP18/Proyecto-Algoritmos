(()=>{"use strict";const n=[{id:1,photo:"",name:"Pablo",username:"LopezAgarrdio",email:"Lopex@gmail.com",address:{birthdate:24,region:"Colombia"}}];var e,t;!function(n){n.username="username",n.name="name",n.photo="photo",n.uid="uid"}(e||(e={}));class a extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.keys({username:null,name:null,photo:null,uid:null})}attributeChangedCallback(n,t,a){n===e.uid?this.uid=a?Number(a):void 0:this[n]=a,this.render()}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML=`\n                <aside>\n                    <nav>\n                        <div class="logo">\n                            <img src="" alt="logo of brand">\n                        </div>\n\n                        <div class="inputs">\n                            <ul>\n                                <li>\n                                    <img src="" alt="">\n                                    <a href="">Home</a>\n                                </li>\n                                <li>\n                                    <img src="" alt="">\n                                    <a href="">My Wish List</a>\n                                </li>\n                                <li>\n                                    <img src="" alt="">\n                                    <a href="">Create</a>\n                                </li>\n                                <li>\n                                    <img src="" alt="">\n                                    <a href="">Profile</a>\n                                </li>\n                            </ul>\n                        </div>\n\n                        <div class="input-log-out-bottom">\n                            <img src="${this.photo}" alt="">\n                            <h6>${this.username}</h6>\n                            <p>${this.name}</p>\n                            <img src="" alt="">\n                        </div>\n                    </nav>\n                </aside>\n            `)}}customElements.define("app-nav-bar",a),function(n){n.username="username",n.name="name",n.photo="photo",n.uid="uid"}(t||(t={}));class i extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.keys({username:null,name:null,photo:null,uid:null})}attributeChangedCallback(n,e,a){n===t.uid?this.uid=a?Number(a):void 0:this[n]=a,this.render()}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML='\n                <aside>\n                    <nav>\n                        <div class="">\n                        </div>\n\n                        <div class="">\n                            <p>Information - Help - News - API - Privacity - Conditions - Lenguage - Trip Verified</p>\n                            <p>2024 TRIP SHARED FROM DMI</p>\n                        </div>\n                    </nav>\n                </aside>\n            ')}}customElements.define("app-nav-profile",i);class s extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),n.forEach((n=>{}))}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML="\n            <app-nav-bar></app-nav-bar>\n            ")}}customElements.define("app-container",s)})();