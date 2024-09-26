(()=>{"use strict";var n={61:(n,e,a)=>{a.d(e,{A:()=>s});var t=a(601),r=a.n(t),i=a(314),o=a.n(i)()(r());o.push([n.id,"/* Estilos generales para la barra lateral derecha */\naside {\n    background-color: #E6F4FF; /* Color azul claro */\n    padding: 1rem;\n    border-left: 1px solid #CCC; /* Borde de separación */\n    position: fixed; /* Hace que la barra de navegación esté fija */\n    top: 0;\n    right: 0; /* Fijado al lado derecho de la pantalla */\n    height: 100vh; /* Asegura que la barra cubra toda la altura de la pantalla */\n    z-index: 1000; /* Asegura que la barra esté siempre por encima del contenido */\n    width: 18%; /* Ajusta el ancho según la referencia */\n    font-family: 'Arial', sans-serif;\n}\n\n/* Estilos del contenido dentro de la barra */\nnav {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n/* Estilos del user-bar */\n.user-bar-dashboard {\n    text-align: center;\n    margin-bottom: 1.5rem;\n}\n\n/* Imagen de perfil */\n.user-bar-dashboard img {\n    border-radius: 50%;\n    width: 60px;\n    height: 60px;\n}\n\n/* Texto dentro del user-bar */\n.user-bar-dashboard h6 {\n    margin: 0.5rem 0 0.2rem;\n    font-size: 1rem;\n    font-weight: bold;\n}\n\n.user-bar-dashboard p {\n    font-size: 0.9rem;\n    color: #555;\n}\n\n/* Footer fijo al final de la barra lateral */\n.footer {\n    text-align: center;\n    font-size: 0.8rem;\n    color: #888;\n    margin-top: auto;\n    padding-top: 1rem;\n    border-top: 1px solid #CCC;\n    width: 100%;\n}\n\n/* Media queries para pantallas más grandes */\n@media (min-width: 768px) {\n    aside {\n        width: 18%; /* La barra se reduce en pantallas más grandes */\n    }\n\n    .user-bar-dashboard img {\n        width: 50px; /* Imagen de perfil más pequeña en pantallas grandes */\n        height: 50px;\n    }\n\n    .user-bar-dashboard h6 {\n        font-size: 1.2rem; /* Texto más grande en pantallas grandes */\n    }\n\n    .user-bar-dashboard p {\n        font-size: 1rem; /* Texto más grande en pantallas grandes */\n    }\n}\n\n/* Media queries para pantallas pequeñas (móviles) */\n@media (max-width: 767px) {\n    aside {\n        width: 100%; /* La barra ocupa toda la anchura de la pantalla */\n        height: auto; /* La altura se ajusta automáticamente en dispositivos móviles */\n    }\n\n    .user-bar-dashboard img {\n        width: 40px; /* Imagen de perfil más pequeña en móviles */\n        height: 40px;\n    }\n\n    .user-bar-dashboard h6 {\n        font-size: 1rem; /* Texto ligeramente más pequeño en móviles */\n    }\n\n    .user-bar-dashboard p {\n        font-size: 0.85rem; /* Texto ligeramente más pequeño en móviles */\n    }\n}\n",""]);const s=o},103:(n,e,a)=>{a.d(e,{A:()=>s});var t=a(601),r=a.n(t),i=a(314),o=a.n(i)()(r());o.push([n.id,".container-search-bar {\n    display: flex;\n    flex-direction: column;\n    align-items: center; /* Centra el contenido en el eje vertical */\n    padding: 1rem;\n    background-color: #fff; /* Fondo blanco para contraste */\n}\n\n\n#search-bar {\n    width: 100%;\n    max-width: 400px;\n    padding: 0.5rem;\n    border-radius: 25px;\n    border: 1px solid #DDD;\n    background-color: #F9F9F9;\n    margin-bottom: 1rem;\n}\n\n\n.pills-search-bar {\n    display: flex;\n    justify-content: center; /* Centra los botones horizontalmente */\n    flex-wrap: wrap;\n    gap: 0.5rem; /* Espacio entre los botones */\n    width: 100%;\n}\n\n\n.pills-search-bar button {\n    padding: 0.5rem 1rem;\n    border: none;\n    border-radius: 20px;\n    background-color: #147AFF;\n    color: #FFF;\n    cursor: pointer;\n    font-size: 1rem;\n}\n\n\n@media (min-width: 768px) {\n    .container-search-bar {\n        max-width: 600px;\n        margin: 0 auto;\n    }\n\n\n    #search-bar {\n        width: 100%; /* Ajusta el campo de búsqueda para ocupar toda la anchura en pantallas grandes */\n    }\n}\n",""]);const s=o},507:(n,e,a)=>{a.d(e,{A:()=>s});var t=a(601),r=a.n(t),i=a(314),o=a.n(i)()(r());o.push([n.id,".user-bar-dashboard {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    padding: 1rem;\n    background-color: transparent; /* Fondo transparente */\n    border-bottom: 1px solid #ddd; /* Borde en la parte inferior */\n}\n\n.user-bar-dashboard img {\n    border-radius: 50%;\n    width: 60px;\n    height: 60px;\n    margin-bottom: 1rem;\n}\n\n.user-bar-dashboard h6 {\n    font-size: 1.2rem;\n    color: #000;\n    margin: 0;\n}\n\n.user-bar-dashboard p {\n    font-size: 1rem;\n    color: #666;\n}\n\n/* Media queries para pantallas más grandes */\n@media (min-width: 768px) {\n    .user-bar-dashboard {\n        flex-direction: row;\n        text-align: left;\n        justify-content: space-between;\n    }\n\n    .user-bar-dashboard img {\n        margin-right: 1rem;\n    }\n\n    .user-bar-dashboard h6 {\n        font-size: 1.5rem;\n    }\n\n    .user-bar-dashboard p {\n        font-size: 1.2rem;\n    }\n}\n\n/* Media queries para pantallas pequeñas */\n@media (max-width: 767px) {\n    .user-bar-dashboard {\n        flex-direction: column;\n        text-align: center;\n    }\n\n    .user-bar-dashboard img {\n        width: 50px;\n        height: 50px;\n    }\n\n    .user-bar-dashboard h6 {\n        font-size: 1rem;\n    }\n\n    .user-bar-dashboard p {\n        font-size: 0.9rem;\n    }\n}\n",""]);const s=o},663:(n,e,a)=>{a.d(e,{A:()=>s});var t=a(601),r=a.n(t),i=a(314),o=a.n(i)()(r());o.push([n.id,"/* Estilos generales para los posts */\n.post-container {\n    display: flex;\n    justify-content: center;\n    padding: 1rem;\n    background-color: #fff;\n}\n\n.card {\n    background-color: white;\n    border-radius: 10px;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n    width: 100%;\n    max-width: 500px;\n    margin: 1rem;\n    overflow: hidden;\n    font-family: 'Arial', sans-serif;\n}\n\n.head-card {\n    display: flex;\n    align-items: center;\n    padding: 1rem;\n    border-bottom: 1px solid #ddd;\n}\n\n.head-card img {\n    border-radius: 50%;\n    width: 50px;\n    height: 50px;\n    margin-right: 1rem;\n}\n\n.head-card p {\n    margin: 0;\n    font-size: 0.9rem;\n    color: #333;\n}\n\n.head-card button {\n    margin-left: auto;\n    background-color: #147AFF;\n    color: white;\n    border: none;\n    border-radius: 5px;\n    padding: 0.5rem 1rem;\n    cursor: pointer;\n    font-size: 0.8rem;\n}\n\n.body-card {\n    padding: 1rem;\n}\n\n.body-card p {\n    margin: 0.5rem 0;\n    color: #555;\n    font-size: 1rem;\n}\n\n.body-card a {\n    display: block;\n    color: #147AFF;\n    font-size: 0.9rem;\n    text-decoration: none;\n    margin-bottom: 1rem;\n}\n\n.body-card img {\n    width: 100%;\n    border-radius: 10px;\n    margin-top: 1rem;\n}\n\n.icon-bar {\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    margin-top: 1rem;\n}\n\n.icon-bar svg {\n    width: 35px;\n    height: 35px;\n    cursor: pointer;\n    fill: #147AFF;\n}\n\n.icon-bar p {\n    font-size: 1rem;\n    margin-left: 0.5rem;\n    color: #555;\n}\n\n.footer-card {\n    display: flex;\n    align-items: center;\n    padding: 1rem;\n    border-top: 1px solid #ddd;\n}\n\n.footer-card img {\n    border-radius: 50%;\n    width: 35px;\n    height: 35px;\n    margin-right: 1rem;\n}\n\n.footer-card input {\n    flex-grow: 1;\n    border: 1px solid #ddd;\n    border-radius: 20px;\n    padding: 0.5rem 1rem;\n    font-size: 0.9rem;\n}\n\n.footer-card svg {\n    margin-left: 1rem;\n    cursor: pointer;\n    stroke: #147AFF;\n    fill: none;\n}\n\n/* Ajustes de responsividad */\n@media (min-width: 768px) {\n    .card {\n        max-width: 600px; /* Aumenta el tamaño en pantallas más grandes */\n    }\n\n    .head-card img {\n        width: 60px; /* Imagen de usuario más grande en pantallas grandes */\n        height: 60px;\n    }\n\n    .head-card p {\n        font-size: 1rem; /* Texto ligeramente más grande */\n    }\n\n    .head-card button {\n        font-size: 0.9rem; /* Botón ligeramente más grande */\n    }\n\n    .body-card p {\n        font-size: 1.1rem; /* Texto ligeramente más grande */\n    }\n\n    .body-card a {\n        font-size: 1rem; /* Hashtags ligeramente más grandes */\n    }\n\n    .footer-card img {\n        width: 40px; /* Imagen del pie de post más grande */\n        height: 40px;\n    }\n\n    .footer-card input {\n        font-size: 1rem; /* Caja de comentarios ligeramente más grande */\n    }\n}\n\n/* Media queries para pantallas pequeñas */\n@media (max-width: 767px) {\n    .card {\n        max-width: 100%; /* El post ocupa todo el ancho en móviles */\n    }\n\n    .head-card img {\n        width: 40px; /* Imagen de usuario más pequeña en móviles */\n        height: 40px;\n    }\n\n    .head-card button {\n        padding: 0.4rem 0.8rem; /* Botón más pequeño en móviles */\n        font-size: 0.8rem;\n    }\n\n    .body-card img {\n        margin-top: 0.5rem;\n    }\n\n    .footer-card img {\n        width: 30px; /* Imagen del pie de post más pequeña */\n        height: 30px;\n    }\n\n    .footer-card input {\n        padding: 0.4rem 0.8rem; /* Caja de comentarios más pequeña */\n        font-size: 0.9rem;\n    }\n}\n",""]);const s=o},968:(n,e,a)=>{a.d(e,{A:()=>s});var t=a(601),r=a.n(t),i=a(314),o=a.n(i)()(r());o.push([n.id,"/* Estilos generales para la barra de navegación */\naside {\n    background-color: #FAF8F8; /* Color de fondo más oscuro */\n    padding: 1rem;\n    border-right: 1px solid #CCC; /* Borde de separación */\n    position: fixed; /* Barra fija */\n    top: 0;\n    left: 0;\n    height: 100vh; /* Cobertura de toda la altura de la pantalla */\n    z-index: 1000; /* Por encima del contenido */\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    width: 18%; /* Ancho específico */\n    box-sizing: border-box;\n}\n\n/* Logo */\n.logo img {\n    width: 80px;\n    margin-bottom: 2rem;\n}\n\n/* Lista de enlaces de navegación */\n.inputs ul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n\n/* Estilos de cada enlace en la lista */\n.inputs li {\n    display: flex;\n    align-items: center;\n    margin-bottom: 1.5rem;\n}\n\n/* Iconos SVG junto a los enlaces */\n.inputs li svg {\n    margin-right: 0.5rem;\n}\n\n/* Estilos del texto de los enlaces */\n.inputs li a {\n    text-decoration: none;\n    font-size: 1rem;\n    color: #147AFF;\n    font-weight: bold;\n    display: flex;\n    align-items: center;\n}\n\n/* Imagen de perfil en la barra */\n.inputs li img {\n    border-radius: 50%;\n    width: 30px;\n    height: 30px;\n    margin-left: 0.5rem;\n}\n\n/* Asegura que el user-bar esté al final de la barra */\n.user-bar {\n    margin-top: auto;\n}\n\n/* Media queries para pantallas más grandes */\n@media (min-width: 768px) {\n    aside {\n        width: 18%; /* Ancho para pantallas grandes */\n    }\n\n    .inputs li a {\n        font-size: 1.2rem; /* Tamaño de texto más grande */\n    }\n\n    .logo img {\n        width: 120px; /* Logo más grande */\n    }\n\n    .inputs li img {\n        width: 40px;\n        height: 40px; /* Imagen de perfil más grande */\n    }\n}\n\n/* Media queries para pantallas pequeñas */\n@media (max-width: 767px) {\n    aside {\n        width: 100%; /* Barra ocupa toda la anchura */\n        height: auto; /* Altura ajustable */\n        padding: 0.5rem;\n    }\n\n    .logo img {\n        width: 60px; /* Logo más pequeño */\n    }\n\n    .inputs li {\n        margin-bottom: 1rem; /* Espaciado reducido */\n    }\n\n    .inputs li a {\n        font-size: 0.9rem; /* Texto más pequeño */\n    }\n\n    .inputs li img {\n        width: 25px;\n        height: 25px; /* Imagen de perfil más pequeña */\n    }\n}\n",""]);const s=o},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var a="",t=void 0!==e[5];return e[4]&&(a+="@supports (".concat(e[4],") {")),e[2]&&(a+="@media ".concat(e[2]," {")),t&&(a+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),a+=n(e),t&&(a+="}"),e[2]&&(a+="}"),e[4]&&(a+="}"),a})).join("")},e.i=function(n,a,t,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(t)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(o[d]=!0)}for(var l=0;l<n.length;l++){var h=[].concat(n[l]);t&&o[h[0]]||(void 0!==i&&(void 0===h[5]||(h[1]="@layer".concat(h[5].length>0?" ".concat(h[5]):""," {").concat(h[1],"}")),h[5]=i),a&&(h[2]?(h[1]="@media ".concat(h[2]," {").concat(h[1],"}"),h[2]=a):h[2]=a),r&&(h[4]?(h[1]="@supports (".concat(h[4],") {").concat(h[1],"}"),h[4]=r):h[4]="".concat(r)),e.push(h))}},e}},601:n=>{n.exports=function(n){return n[1]}}},e={};function a(t){var r=e[t];if(void 0!==r)return r.exports;var i=e[t]={id:t,exports:{}};return n[t](i,i.exports,a),i.exports}a.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return a.d(e,{a:e}),e},a.d=(n,e)=>{for(var t in e)a.o(e,t)&&!a.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},a.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e);const t=[{id:1,photo:"https://img.freepik.com/foto-gratis/primer-plano-mapa-explotacion-turistica-masculina-su-mano_23-2147841551.jpg?t=st=1726983746~exp=1726987346~hmac=0118c246b10b5609449997c1aa25e784c49dccb69dffd0f253675f4c414c74c1&w=1060",name:"Pablo",username:"LopezAgarrdio",email:"Lopex@gmail.com",address:{birthdate:24,region:"Colombia"}}],r=[{id:1,image:"https://img.freepik.com/foto-gratis/manta-rayas-realista-agua-mar_23-2151461127.jpg?t=st=1727034113~exp=1727037713~hmac=ac132cfb2642165e108f4836e975386a71ce2fd2e49dc34b62e0c46fcc320436&w=1380",photoUser:"https://cdn-icons-png.flaticon.com/512/8847/8847419.png",username:"X_AE_A-13",region:"Pacific Region",description:"Visiting the whales in the beautiful Pacific region, I love to travel.",hashtags:"#amazing #great #lifetime"},{id:2,image:"https://img.freepik.com/foto-gratis/manta-rayas-realista-agua-mar_23-2151461127.jpg?t=st=1727034113~exp=1727037713~hmac=ac132cfb2642165e108f4836e975386a71ce2fd2e49dc34b62e0c46fcc320436&w=1380",photoUser:"https://cdn-icons-png.flaticon.com/512/8847/8847419.png",username:"X_AE_A-13",region:"Pacific Region",description:"Visiting the whales in the beautiful Pacific region, I love to travel.",hashtags:"#amazing #great #lifetime"},{id:3,image:"https://img.freepik.com/foto-gratis/manta-rayas-realista-agua-mar_23-2151461127.jpg?t=st=1727034113~exp=1727037713~hmac=ac132cfb2642165e108f4836e975386a71ce2fd2e49dc34b62e0c46fcc320436&w=1380",photoUser:"https://cdn-icons-png.flaticon.com/512/8847/8847419.png",username:"X_AE_A-13",region:"Pacific Region",description:"Visiting the whales in the beautiful Pacific region, I love to travel.",hashtags:"#amazing #great #lifetime"},{id:4,image:"https://img.freepik.com/foto-gratis/manta-rayas-realista-agua-mar_23-2151461127.jpg?t=st=1727034113~exp=1727037713~hmac=ac132cfb2642165e108f4836e975386a71ce2fd2e49dc34b62e0c46fcc320436&w=1380",photoUser:"https://cdn-icons-png.flaticon.com/512/8847/8847419.png",username:"X_AE_A-13",region:"Pacific Region",description:"Visiting the whales in the beautiful Pacific region, I love to travel.",hashtags:"#amazing #great #lifetime"}];var i,o=a(968);!function(n){n.username="username",n.name="name",n.photo="photo",n.uid="uid"}(i||(i={}));class s extends HTMLElement{static get observedAttributes(){return Object.keys(i)}attributeChangedCallback(n,e,a){n===i.uid?this.uid=a?Number(a):void 0:this[n]=a,this.render()}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var n;this.shadowRoot&&(this.shadowRoot.innerHTML=`\n                <aside>\n                    <nav>\n                        <div class="logo">\n                            <img src="../../assets/Logo.png" alt="logo of brand">\n                        </div>\n\n                        <div class="inputs">\n                            <ul>\n                                <li>\n                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#147AFF" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"/></svg>\n                                    <a href="">Home</a>\n                                </li>\n                                <li>\n                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#147AFF" d="m22 9.24l-7.19-.62L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27L18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28z"/></svg>\n                                    <a href="">My Wish List</a>\n                                </li>\n                                <li>\n                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#147AFF" d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8"/></svg>\n                                    <a href="">Create</a>\n                                </li>\n                                <li>\n                                    <img src="${this.photo}" alt="">\n                                    <a href="">Profile</a>\n                                </li>\n                            </ul>\n                        </div>\n                        <user-bar></user-bar>\n                    </nav>\n                </aside>\n            `);const e=this.ownerDocument.createElement("style");e.innerHTML=o.A,null===(n=this.shadowRoot)||void 0===n||n.appendChild(e)}}customElements.define("app-nav-bar",s);var d=a(61);class l extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var n;this.shadowRoot&&(this.shadowRoot.innerHTML='\n                <aside>\n                    <nav>\n                        <user-bar></user-bar>\n                        <div class="footer">\n                            <p>Information - Help - News - API - Privacity - Conditions - Lenguage - Trip Verified</p>\n                            <p>2024 TRIP SHARED FROM DMI</p>\n                        </div>\n                    </nav>\n                </aside>\n            ');const e=this.ownerDocument.createElement("style");e.innerHTML=d.A,null===(n=this.shadowRoot)||void 0===n||n.appendChild(e)}}customElements.define("app-nav-profile",l);var h,c=a(507);!function(n){n.username="username",n.name="name",n.photo="photo",n.uid="uid"}(h||(h={}));class p extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.keys(Attr)}attributeChangedCallback(n,e,a){n===h.uid?this.uid=a?Number(a):void 0:this[n]=a,this.render()}render(){var n;this.shadowRoot&&(this.shadowRoot.innerHTML=`\n                <aside>\n                    <nav>\n                        <div class="user-bar-dashboard">\n                            <img src="${this.photo}" alt="">\n                            <h6>${this.username}</h6>\n                            <p>${this.name}</p>\n                        </div>\n                    </nav>\n                </aside>\n            `);const e=this.ownerDocument.createElement("style");e.innerHTML=c.A,null===(n=this.shadowRoot)||void 0===n||n.appendChild(e)}}customElements.define("user-bar",p);var m,g=a(663);!function(n){n.uid="uid",n.image="image",n.photoUser="photoUser",n.username="username",n.region="region",n.description="description",n.hashtags="hashtags"}(m||(m={}));class u extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.keys(m)}attributeChangedCallback(n,e,a){n===m.uid?this.uid=a?Number(a):void 0:this[n]=a,this.render()}connectedCallback(){this.render()}render(){var n;this.shadowRoot&&(this.shadowRoot.innerHTML=`\n            <section>\n                <div class="post-container">\n                    <div class="card">\n                        <div class="head-card">\n                            <img src="${this.photoUser}" alt="photo user">\n                            <p>${this.username}</p>\n                            <p>${this.region}</p>\n                            <button>Follow</button>\n                        </div>\n                        <div class="body-card">\n                            <p>${this.description}</p>\n                            <a>${this.hashtags}</a>\n                            <img src="${this.image}" alt="image post">\n                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#147AFF" d="m13.11 5.72l-.57 2.89c-.12.59.04 1.2.42 1.66s.94.73 1.54.73H20v1.08L17.43 18H9.34a.35.35 0 0 1-.34-.34V9.82zM14 2L7.59 8.41C7.21 8.79 7 9.3 7 9.83v7.83C7 18.95 8.05 20 9.34 20h8.1c.71 0 1.36-.37 1.72-.97l2.67-6.15c.11-.25.17-.52.17-.8V11c0-1.1-.9-2-2-2h-5.5l.92-4.65c.05-.22.02-.46-.08-.66a4.8 4.8 0 0 0-.88-1.22zM4 9H2v11h2c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1"/></svg>\n                            <p>Likes <span id="contador-likes">0</span></p>\n                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#147AFF" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H6l-2 2V4h16z"/></svg>\n                            <p>Comments</p>\n                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="none" stroke="#147AFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 4v4C6.425 9.028 3.98 14.788 3 20c-.037.206 5.384-5.962 10-6v4l8-7z"/></svg>\n                            <p>Share</p>\n                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#147AFF" d="m22 9.24l-7.19-.62L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27L18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28z"/></svg>\n                        </div>\n                        <div class="footer-card">\n                            <img src="${this.photoUser}" alt="photo user">\n                            <input type="text" placeholder="Write your comment..">\n                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><g fill="none" stroke="#147AFF" stroke-linecap="round" stroke-width="2"><path d="m12 17l-1.5 1.5a3.536 3.536 0 0 1-5 0v0a3.536 3.536 0 0 1 0-5l3-3a3.536 3.536 0 0 1 5 0v0"/><path d="m12 7l1.5-1.5a3.536 3.536 0 0 1 5 0v0a3.536 3.536 0 0 1 0 5l-3 3a3.536 3.536 0 0 1-5 0v0"/></g></svg>\n                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><g fill="none" stroke="#147AFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0m6-2h.01M15 10h.01"/><path d="M9.5 15a3.5 3.5 0 0 0 5 0"/></g></svg>\n                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="none" stroke="#147AFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.698 4.034L21 12L4.698 19.966a.5.5 0 0 1-.546-.124a.56.56 0 0 1-.12-.568L6.5 12L4.032 4.726a.56.56 0 0 1 .12-.568a.5.5 0 0 1 .546-.124M6.5 12H21"/></svg>\n                        </div>\n                    </div>\n                </div>\n            </section>\n            `);const e=this.ownerDocument.createElement("style");e.innerHTML=g.A,null===(n=this.shadowRoot)||void 0===n||n.appendChild(e)}}customElements.define("app-post",u);var b=a(103);class f extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var n;this.shadowRoot&&(this.shadowRoot.innerHTML='\n            <section>\n                <div class="container-search-bar">\n                    <input type="text" id="search-bar" placeholder="Search for #Hashtag or friends">\n                    <div class ="pills-search-bar">\n                        <button>Región Pacífica</button>\n                        <button>Región Andina</button>\n                        <button>Región Amazónica</button>\n                        <button>Región Caribe</button>\n                        <button>Región Orinoquía</button>\n                    </div>\n                </div>\n            </section>\n            ');const e=this.ownerDocument.createElement("style");e.innerHTML=b.A,null===(n=this.shadowRoot)||void 0===n||n.appendChild(e)}}customElements.define("section-search-bar",f);class v extends HTMLElement{constructor(){super(),this.users=[],this.posts=[],this.attachShadow({mode:"open"}),t.forEach((n=>{const e=this.ownerDocument.createElement("app-nav-bar");e.setAttribute(i.username,n.username),e.setAttribute(i.name,n.name),e.setAttribute(i.photo,n.photo),e.setAttribute(i.uid,String(n.id)),this.users.push(e)})),r.forEach((n=>{const e=this.ownerDocument.createElement("app-post");e.setAttribute(m.image,n.image),e.setAttribute(m.photoUser,n.photoUser),e.setAttribute(m.username,n.username),e.setAttribute(m.region,n.region),e.setAttribute(m.description,n.description),e.setAttribute(m.hashtags,n.hashtags),e.setAttribute(m.uid,String(n.id)),this.posts.push(e)}))}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML+="\n            <app-nav-profile></app-nav-profile>\n            "),this.shadowRoot&&(this.shadowRoot.innerHTML+="\n                <section-search-bar></section-search-bar>\n            "),this.shadowRoot&&this.users.forEach((n=>{var e;null===(e=this.shadowRoot)||void 0===e||e.appendChild(n)})),this.shadowRoot&&this.posts.forEach((n=>{var e;null===(e=this.shadowRoot)||void 0===e||e.appendChild(n)}))}}customElements.define("app-container",v)})();