(()=>{"use strict";var n={61:(n,e,t)=>{t.d(e,{A:()=>s});var a=t(601),o=t.n(a),i=t(314),r=t.n(i)()(o());r.push([n.id,"/* Estilos generales para la barra lateral derecha */\naside {\n    background-color: #E6F4FF; /* Color azul claro */\n    padding: 1rem;\n    border-left: 1px solid #CCC; /* Borde de separación */\n    position: fixed; /* Hace que la barra de navegación esté fija */\n    top: 0;\n    right: 0; /* Fijado al lado derecho de la pantalla */\n    height: 100vh; /* Asegura que la barra cubra toda la altura de la pantalla */\n    z-index: 1000; /* Asegura que la barra esté siempre por encima del contenido */\n    width: 18%; /* Ajusta el ancho según la referencia */\n    font-family: 'Arial', sans-serif;\n    display: flex;\n    flex-direction: column;\n}\n\n/* Estilos del contenido dentro de la barra */\nnav {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    flex-grow: 1;\n}\n\n/* Estilos del user-bar */\n.user-bar-dashboard {\n    text-align: center;\n    margin-bottom: 1.5rem;\n}\n\n/* Imagen de perfil */\n.user-bar-dashboard img {\n    border-radius: 50%;\n    width: 60px;\n    height: 60px;\n}\n\n/* Texto dentro del user-bar */\n.user-bar-dashboard h6 {\n    margin: 0.5rem 0 0.2rem;\n    font-size: 1rem;\n    font-weight: bold;\n}\n\n.user-bar-dashboard p {\n    font-size: 0.9rem;\n    color: #555;\n}\n\n/* Footer fijo al final de la barra lateral */\n.footer {\n    text-align: center;\n    font-size: 0.8rem;\n    color: #888;\n    margin-top: auto; /* Hace que el footer se pegue al fondo de la barra */\n    padding-top: 1rem;\n    margin-bottom: 1cm; /* Agrega un espacio de 1 cm desde el borde inferior */\n    border-top: 1px solid #CCC;\n    width: 100%;\n}\n\n\n/* Responsive */\n@media (max-width: 767px) {\n    aside {\n        display: none;\n    }\n}\n",""]);const s=r},103:(n,e,t)=>{t.d(e,{A:()=>s});var a=t(601),o=t.n(a),i=t(314),r=t.n(i)()(o());r.push([n.id,".container-search-bar {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 1rem;\n    background-color: #fff;\n    max-width: 800px; /* Ajuste de ancho máximo para el contenedor */\n    margin: 0 auto; /* Centra el contenedor en la página */\n}\n\n#search-bar {\n    width: 100%;\n    max-width: 600px; /* Aumenta el ancho del campo de búsqueda */\n    padding: 0.75rem; /* Aumenta el relleno interno */\n    border-radius: 25px;\n    border: 1px solid #DDD;\n    background-color: #F9F9F9;\n    margin-bottom: 1.5rem; /* Aumenta el espacio inferior */\n    font-size: 1rem; /* Ajusta el tamaño de la fuente */\n}\n\n.search-titles h1 {\n    font-size: 1.75rem; /* Tamaño de fuente más grande para el título principal */\n    color: #333; /* Color más oscuro para el texto */\n    margin-bottom: 0.5rem; /* Ajusta el margen inferior */\n    text-align: center; /* Asegura que el texto esté centrado */\n    font-family: 'Poppins', sans-serif;\n}\n\n.search-titles h2 {\n    font-size: 1.25rem; /* Tamaño de fuente para el subtítulo */\n    color: #666; /* Color gris para el subtítulo */\n    margin-bottom: 2rem; /* Espacio inferior más amplio */\n    text-align: center; /* Asegura que el texto esté centrado */\n    font-family: 'Poppins', sans-serif;\n}\n\n.pills-search-bar {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    gap: 0.75rem; /* Espacio entre los botones */\n    width: 100%;\n}\n\n.pills-search-bar button {\n    padding: 0.75rem 1.5rem; /* Aumenta el relleno interno para los botones */\n    border: none;\n    border-radius: 25px; /* Bordes más redondeados */\n    background-color: #147AFF;\n    color: #FFF;\n    cursor: pointer;\n    font-size: 1.1rem; /* Tamaño de fuente más grande para los botones */\n    transition: background-color 0.3s ease; /* Animación suave para el cambio de color */\n}\n\n.pills-search-bar button:hover {\n    background-color: #005bb5; /* Color de fondo más oscuro al hacer hover */\n}\n\n@media (min-width: 768px) {\n    .container-search-bar {\n        max-width: 800px;\n        margin: 0 auto;\n    }\n\n    #search-bar {\n        max-width: 600px;\n    }\n}\n",""]);const s=r},507:(n,e,t)=>{t.d(e,{A:()=>s});var a=t(601),o=t.n(a),i=t(314),r=t.n(i)()(o());r.push([n.id,".user-bar-dashboard {\n    display: flex;\n    align-items: center;\n    text-align: left;\n    padding: 1rem;\n    background-color: transparent; /* Fondo transparente */\n    border-bottom: 1px solid #ddd; /* Borde en la parte inferior */\n    font-family: 'Poppins', sans-serif;\n    margin-top: auto; /* Desplazar el user bar hacia la parte inferior */\n    justify-content: center; /* Centrar el contenido horizontalmente */\n}\n\n.user-bar-dashboard img {\n    border-radius: 50%;\n    width: 40px;\n    height: 40px;\n    margin-right: 0.5rem; /* Espacio entre la imagen y los textos */\n}\n\n.user-bar-dashboard h6 {\n    font-size: 1rem;\n    color: #000;\n    margin: 0;\n    font-weight: bold;\n    font-family: 'Poppins', sans-serif;\n}\n\n.user-bar-dashboard p {\n    font-size: 0.9rem;\n    color: #666;\n    font-family: 'Poppins', sans-serif;\n    margin: 0; /* Elimina el margen para evitar separación no deseada */\n}\n\n/* Media queries para pantallas más grandes */\n@media (min-width: 768px) {\n    .user-bar-dashboard {\n        justify-content: flex-start; /* Alinea el contenido a la izquierda en pantallas más grandes */\n    }\n\n    .user-bar-dashboard img {\n        width: 50px;\n        height: 50px;\n    }\n\n    .user-bar-dashboard h6 {\n        font-size: 1.2rem;\n    }\n\n    .user-bar-dashboard p {\n        font-size: 1rem;\n    }\n}\n\n/* Media queries para pantallas pequeñas */\n@media (max-width: 767px) {\n    .user-bar-dashboard {\n        justify-content: center; /* Centra el contenido en móviles */\n        flex-direction: row; /* Mantiene la disposición en fila en móviles */\n    }\n\n    .user-bar-dashboard img {\n        width: 40px;\n        height: 40px;\n    }\n\n    .user-bar-dashboard h6 {\n        font-size: 1rem;\n    }\n\n    .user-bar-dashboard p {\n        font-size: 0.9rem;\n    }\n}\n",""]);const s=r},663:(n,e,t)=>{t.d(e,{A:()=>s});var a=t(601),o=t.n(a),i=t(314),r=t.n(i)()(o());r.push([n.id,"/* Estilos generales para los posts */\n.post-container {\n    display: flex;\n    justify-content: center;\n    padding: 1rem;\n    background-color: #fff;\n}\n\n.card {\n    background-color: white;\n    border-radius: 10px;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n    width: 100%;\n    max-width: 500px;\n    margin: 1rem;\n    overflow: hidden;\n    font-family: 'Arial', sans-serif;\n}\n\n.head-card {\n    display: flex;\n    align-items: center;\n    padding: 1rem;\n    border-bottom: 1px solid #ddd;\n    gap: 1rem; /* Añadir un espacio entre los elementos */\n}\n\n.head-card img {\n    border-radius: 50%;\n    width: 50px;\n    height: 50px;\n}\n\n.head-card .ubi {\n    display: flex;\n    flex-direction: column;\n}\n\n.head-card h1 {\n    margin: 0;\n    font-size: 1rem;\n    color: #333;\n    font-weight: bold;\n}\n\n.head-card p {\n    margin: 0;\n    font-size: 0.8rem;\n    color: #666;\n}\n\n.head-card button {\n    margin-left: auto;\n    background-color: #147AFF;\n    color: white;\n    border: none;\n    border-radius: 5px;\n    padding: 0.5rem 1rem;\n    cursor: pointer;\n    font-size: 0.8rem;\n}\n\n.body-card {\n    padding: 1rem;\n}\n\n.body-card .icons {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    margin-top: 1rem;\n}\n\n\n.icons svg {\n    width: 25px; /* Ajustar el tamaño de los íconos si es necesario */\n    height: 25px;\n    margin-right: 0.5rem; /* Espacio entre ícono y texto */\n    cursor: pointer;\n    fill: #147AFF;\n}\n\n.icons p {\n    margin: 0 1rem; /* Espacio alrededor de los textos */\n    font-size: 1rem;\n    color: #555;\n    display: flex;\n    align-items: center;\n}\n\n.icons p span {\n    margin-left: 0.5rem;\n}\n\n.body-card p {\n    margin: 0.5rem 0;\n    color: #555;\n    font-size: 1rem;\n}\n\n.body-card a {\n    display: block;\n    color: #147AFF;\n    font-size: 0.9rem;\n    text-decoration: none;\n    margin-bottom: 1rem;\n}\n\n.body-card img {\n    width: 100%;\n    border-radius: 10px;\n    margin-top: 1rem;\n}\n\n.icon-bar {\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    margin-top: 1rem;\n}\n\n.icon-bar svg {\n    width: 35px;\n    height: 35px;\n    cursor: pointer;\n    fill: #147AFF;\n}\n\n.icon-bar p {\n    font-size: 1rem;\n    margin-left: 0.5rem;\n    color: #555;\n}\n\n.footer-card {\n    display: flex;\n    align-items: center;\n    padding: 1rem;\n    border-top: 1px solid #ddd;\n}\n\n.footer-card img {\n    border-radius: 50%;\n    width: 35px;\n    height: 35px;\n    margin-right: 1rem;\n}\n\n.footer-card input {\n    flex-grow: 1;\n    border: 1px solid #ddd;\n    border-radius: 20px;\n    padding: 0.5rem 1rem;\n    font-size: 0.9rem;\n}\n\n.footer-card svg {\n    margin-left: 1rem;\n    cursor: pointer;\n    stroke: #147AFF;\n    fill: none;\n}\n\n/* Ajustes de responsividad */\n@media (min-width: 768px) {\n    .card {\n        max-width: 600px; /* Aumenta el tamaño en pantallas más grandes */\n    }\n\n    .head-card img {\n        width: 60px; /* Imagen de usuario más grande en pantallas grandes */\n        height: 60px;\n    }\n\n    .head-card p {\n        font-size: 1rem; /* Texto ligeramente más grande */\n    }\n\n    .head-card button {\n        font-size: 0.9rem; /* Botón ligeramente más grande */\n    }\n\n    .body-card p {\n        font-size: 1.1rem; /* Texto ligeramente más grande */\n    }\n\n    .body-card a {\n        font-size: 1rem; /* Hashtags ligeramente más grandes */\n    }\n\n    .footer-card img {\n        width: 40px; /* Imagen del pie de post más grande */\n        height: 40px;\n    }\n\n    .footer-card input {\n        font-size: 1rem; /* Caja de comentarios ligeramente más grande */\n    }\n}\n\n/* Media queries para pantallas pequeñas */\n@media (max-width: 767px) {\n    .card {\n        max-width: 100%; /* El post ocupa todo el ancho en móviles */\n    }\n\n    .head-card img {\n        width: 40px; /* Imagen de usuario más pequeña en móviles */\n        height: 40px;\n    }\n\n    .head-card button {\n        padding: 0.4rem 0.8rem; /* Botón más pequeño en móviles */\n        font-size: 0.8rem;\n    }\n\n    .body-card img {\n        margin-top: 0.5rem;\n    }\n\n    .footer-card img {\n        width: 30px; /* Imagen del pie de post más pequeña */\n        height: 30px;\n    }\n\n    .footer-card input {\n        padding: 0.4rem 0.8rem; /* Caja de comentarios más pequeña */\n        font-size: 0.9rem;\n    }\n}\n",""]);const s=r},968:(n,e,t)=>{t.d(e,{A:()=>s});var a=t(601),o=t.n(a),i=t(314),r=t.n(i)()(o());r.push([n.id,"/* Estilos generales para la barra de navegación */\naside {\n    background-color: #FAF8F8; /* Color de fondo más oscuro */\n    padding: 1rem;\n    border-right: 1px solid #CCC; /* Borde de separación */\n    position: fixed; /* Barra fija */\n    top: 0;\n    left: 0;\n    height: 100vh; /* Cobertura de toda la altura de la pantalla */\n    z-index: 1000; /* Por encima del contenido */\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    width: 18%; /* Ancho específico */\n    box-sizing: border-box;\n}\n\n/* Logo */\n.logo img {\n    width: 80px;\n    margin-bottom: 2rem;\n}\n\n/* Lista de enlaces de navegación */\n.inputs ul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n\n/* Estilos de cada enlace en la lista */\n.inputs li {\n    display: flex;\n    align-items: center;\n    margin-bottom: 1.5rem;\n}\n\n/* Iconos SVG junto a los enlaces */\n.inputs li svg {\n    margin-right: 0.5rem;\n}\n\n/* Estilos del texto de los enlaces */\n.inputs li a {\n    text-decoration: none;\n    font-size: 1rem;\n    color: #147AFF;\n    font-weight: bold;\n    display: flex;\n    align-items: center;\n}\n\n/* Imagen de perfil en la barra */\n.inputs li img {\n    border-radius: 50%;\n    width: 30px;\n    height: 30px;\n    margin-left: 0.5rem;\n}\n\n/* Asegura que el user-bar esté al final de la barra */\n.user-bar {\n    margin-top: auto;\n}\n\n/* Responsive */\n@media (max-width: 767px) {\n    aside {\n        display: none;\n    }\n}\n",""]);const s=r},847:(n,e,t)=>{t.d(e,{A:()=>s});var a=t(601),o=t.n(a),i=t(314),r=t.n(i)()(o());r.push([n.id,"nav {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    background-color: #FFFFFF;\n    border-top: 1px solid #E0E0E0;\n    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);\n    z-index: 1000;\n}\n\nul {\n    display: flex;\n    justify-content: space-around;\n    margin: 0;\n    padding: 0.5rem 0;\n    list-style-type: none;\n}\n\nli {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n}\n\nsvg {\n    width: 28px;\n    height: 28px;\n    fill: #147AFF;\n}\n\n@media (min-width: 768px) {\n    nav {\n        display: none;\n    }\n}\n",""]);const s=r},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(a)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(r[d]=!0)}for(var l=0;l<n.length;l++){var c=[].concat(n[l]);a&&r[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),o&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=o):c[4]="".concat(o)),e.push(c))}},e}},601:n=>{n.exports=function(n){return n[1]}}},e={};function t(a){var o=e[a];if(void 0!==o)return o.exports;var i=e[a]={id:a,exports:{}};return n[a](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e);const a=[{id:1,photo:"https://img.freepik.com/foto-gratis/primer-plano-mapa-explotacion-turistica-masculina-su-mano_23-2147841551.jpg?t=st=1726983746~exp=1726987346~hmac=0118c246b10b5609449997c1aa25e784c49dccb69dffd0f253675f4c414c74c1&w=1060",name:"Pablo",username:"LopezAgarrido",email:"Lopex@gmail.com",address:{birthdate:24,region:"Colombia"}}],o=[{id:1,image:"https://img.freepik.com/foto-gratis/manta-rayas-realista-agua-mar_23-2151461127.jpg?t=st=1727034113~exp=1727037713~hmac=ac132cfb2642165e108f4836e975386a71ce2fd2e49dc34b62e0c46fcc320436&w=1380",photouser:"https://www.abasturhub.com/img/blog/viajero---nuevos-tipos-de-viajeros_-viajes-de-experiencia.png",username:"X_AE_A-13",region:"Pacific Region",description:"Visiting the whales in the beautiful Pacific region, I love to travel.",hashtags:"#amazing #great #lifetime"},{id:2,image:"https://img.freepik.com/foto-gratis/manta-rayas-realista-agua-mar_23-2151461127.jpg?t=st=1727034113~exp=1727037713~hmac=ac132cfb2642165e108f4836e975386a71ce2fd2e49dc34b62e0c46fcc320436&w=1380",photouser:"https://www.abasturhub.com/img/blog/viajero---nuevos-tipos-de-viajeros_-viajes-de-experiencia.png",username:"X_AE_A-13",region:"Pacific Region",description:"Visiting the whales in the beautiful Pacific region, I love to travel.",hashtags:"#amazing #great #lifetime"},{id:3,image:"https://img.freepik.com/foto-gratis/manta-rayas-realista-agua-mar_23-2151461127.jpg?t=st=1727034113~exp=1727037713~hmac=ac132cfb2642165e108f4836e975386a71ce2fd2e49dc34b62e0c46fcc320436&w=1380",photouser:"https://www.abasturhub.com/img/blog/viajero---nuevos-tipos-de-viajeros_-viajes-de-experiencia.png",username:"X_AE_A-13",region:"Pacific Region",description:"Visiting the whales in the beautiful Pacific region, I love to travel.",hashtags:"#amazing #great #lifetime"},{id:4,image:"https://img.freepik.com/foto-gratis/manta-rayas-realista-agua-mar_23-2151461127.jpg?t=st=1727034113~exp=1727037713~hmac=ac132cfb2642165e108f4836e975386a71ce2fd2e49dc34b62e0c46fcc320436&w=1380",photouser:"https://www.abasturhub.com/img/blog/viajero---nuevos-tipos-de-viajeros_-viajes-de-experiencia.png",username:"X_AE_A-13",region:"Pacific Region",description:"Visiting the whales in the beautiful Pacific region, I love to travel.",hashtags:"#amazing #great #lifetime"}];var i,r=t(968);!function(n){n.username="username",n.name="name",n.photo="photo",n.uid="uid"}(i||(i={}));class s extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.keys(i)}attributeChangedCallback(n,e,t){n===i.uid?this.uid=t?Number(t):void 0:this[n]=t,this.render()}connectedCallback(){this.render()}render(){var n;this.shadowRoot&&(this.shadowRoot.innerHTML=`\n                <aside>\n                    <nav>\n                        <div class="logo">\n                            <img src="https://github.com/SergioRP18/logo-trip-share/blob/60425bb95745f5de7c7d5532dd68d7a04b4b7787/Logo.png" alt="logo of brand">\n                        </div>\n\n                        <div class="inputs">\n                            <ul>\n                                <li>\n                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#147AFF" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"/></svg>\n                                    <a href="">Home</a>\n                                </li>\n                                <li>\n                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#147AFF" d="m22 9.24l-7.19-.62L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27L18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28z"/></svg>\n                                    <a href="">My Wish List</a>\n                                </li>\n                                <li>\n                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#147AFF" d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8"/></svg>\n                                    <a href="">Create</a>\n                                </li>\n                                <li>\n                                    <img src="${this.photo}" alt="">\n                                    <a href="">Profile</a>\n                                </li>\n                            </ul>\n                        </div>\n\n                        <user-bar></user-bar>\n\n                    </nav>\n                </aside>\n            `);const e=this.ownerDocument.createElement("style");e.innerHTML=r.A,null===(n=this.shadowRoot)||void 0===n||n.appendChild(e)}}customElements.define("app-nav-bar",s);var d=t(61);class l extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var n;this.shadowRoot&&(this.shadowRoot.innerHTML='\n                <aside>\n                    <nav>\n                        <user-bar></user-bar>\n                        <div class="footer">\n                            <p>Information - Help - News - API - Privacity - Conditions - Lenguage - Trip Verified</p>\n                            <p>2024 TRIP SHARED FROM DMI</p>\n                        </div>\n                    </nav>\n                </aside>\n            ');const e=this.ownerDocument.createElement("style");e.innerHTML=d.A,null===(n=this.shadowRoot)||void 0===n||n.appendChild(e)}}customElements.define("app-nav-profile",l);var c,h=t(507);!function(n){n.username="username",n.name="name",n.photo="photo",n.uid="uid"}(c||(c={}));class p extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.keys(c)}attributeChangedCallback(n,e,t){n===c.uid?this.uid=t?Number(t):void 0:this[n]=t,this.render()}connectedCallback(){this.render()}render(){var n;this.shadowRoot&&(this.shadowRoot.innerHTML=`\n                <aside>\n                    <nav>\n                        <div class="user-bar-dashboard">\n                            <img src="${this.photo}" alt="Profile picture">\n                            <div class="text-container">\n                                <h6>${this.username||"Username"}</h6>\n                                <p>${this.name||"Real Name"}</p>\n                            </div>\n                        </div>\n                    </nav>\n                </aside>\n            `);const e=this.ownerDocument.createElement("style");e.innerHTML=h.A,null===(n=this.shadowRoot)||void 0===n||n.appendChild(e)}}customElements.define("user-bar",p);var m,g=t(663);!function(n){n.uid="uid",n.image="image",n.photouser="photouser",n.username="username",n.region="region",n.description="description",n.hashtags="hashtags"}(m||(m={}));class u extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return Object.keys(m)}attributeChangedCallback(n,e,t){n===m.uid?this.uid=t?Number(t):void 0:this[n]=t,this.render()}connectedCallback(){this.render()}render(){var n;this.shadowRoot&&(this.shadowRoot.innerHTML=`\n            <section>\n                <div class="post-container">\n                    <div class="card">\n                        <div class="head-card">\n                            <img src="${this.photouser}" alt="photo user">\n                            <div class="ubi">\n                            <h1>${this.username}</h1>\n                            <p>${this.region}</p>\n                            </div>\n                            <button>Follow</button>\n                        </div>\n                        <div class="body-card">\n                            <p>${this.description}</p>\n                            <a>${this.hashtags}</a>\n                            <img src="${this.image}" alt="image post">\n                            <div class="icons">\n                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#147AFF" d="m13.11 5.72l-.57 2.89c-.12.59.04 1.2.42 1.66s.94.73 1.54.73H20v1.08L17.43 18H9.34a.35.35 0 0 1-.34-.34V9.82zM14 2L7.59 8.41C7.21 8.79 7 9.3 7 9.83v7.83C7 18.95 8.05 20 9.34 20h8.1c.71 0 1.36-.37 1.72-.97l2.67-6.15c.11-.25.17-.52.17-.8V11c0-1.1-.9-2-2-2h-5.5l.92-4.65c.05-.22.02-.46-.08-.66a4.8 4.8 0 0 0-.88-1.22zM4 9H2v11h2c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1"/></svg>\n                            <p>Likes <span id="contador-likes">0</span></p>\n                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#147AFF" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H6l-2 2V4h16z"/></svg>\n                            <p>Comments</p>\n                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="none" stroke="#147AFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 4v4C6.425 9.028 3.98 14.788 3 20c-.037.206 5.384-5.962 10-6v4l8-7z"/></svg>\n                            <p>Share</p>\n                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#147AFF" d="m22 9.24l-7.19-.62L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27L18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28z"/></svg>\n                            </div>\n                        </div>\n                        <div class="footer-card">\n                            <img src="${this.photouser}" alt="photo user">\n                            <input type="text" placeholder="Write your comment..">\n                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><g fill="none" stroke="#147AFF" stroke-linecap="round" stroke-width="2"><path d="m12 17l-1.5 1.5a3.536 3.536 0 0 1-5 0v0a3.536 3.536 0 0 1 0-5l3-3a3.536 3.536 0 0 1 5 0v0"/><path d="m12 7l1.5-1.5a3.536 3.536 0 0 1 5 0v0a3.536 3.536 0 0 1 0 5l-3 3a3.536 3.536 0 0 1-5 0v0"/></g></svg>\n                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><g fill="none" stroke="#147AFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0m6-2h.01M15 10h.01"/><path d="M9.5 15a3.5 3.5 0 0 0 5 0"/></g></svg>\n                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="none" stroke="#147AFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.698 4.034L21 12L4.698 19.966a.5.5 0 0 1-.546-.124a.56.56 0 0 1-.12-.568L6.5 12L4.032 4.726a.56.56 0 0 1 .12-.568a.5.5 0 0 1 .546-.124M6.5 12H21"/></svg>\n                        </div>\n                    </div>\n                </div>\n            </section>\n            `);const e=this.ownerDocument.createElement("style");e.innerHTML=g.A,null===(n=this.shadowRoot)||void 0===n||n.appendChild(e)}}customElements.define("app-post",u);var f=t(103);class b extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var n;this.shadowRoot&&(this.shadowRoot.innerHTML='\n            <section class="search-section">\n                <div class="container-search-bar">\n                    <input type="text" id="search-bar" placeholder="Search for #Hashtag or friends">\n                    <div class="search-titles">\n                        <h1>¿Not knowing where to go?</h1>\n                        <h2>Select one of the following options</h2>\n                    </div>\n                    <div class ="pills-search-bar">\n                        <button>Región Pacífica</button>\n                        <button>Región Andina</button>\n                        <button>Región Amazónica</button>\n                        <button>Región Caribe</button>\n                        <button>Región Orinoquía</button>\n                    </div>\n                </div>\n            </section>\n            ');const e=this.ownerDocument.createElement("style");e.innerHTML=f.A,null===(n=this.shadowRoot)||void 0===n||n.appendChild(e)}}customElements.define("section-search-bar",b);var v=t(847);class w extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){var n;this.shadowRoot&&(this.shadowRoot.innerHTML='\n                <nav>\n                    <ul>\n                        <li><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#147AFF" d="m22 9.24l-7.19-.62L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27L18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28z"/></svg></li>\n                        <li><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#147AFF" d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8"/></svg></li>\n                        <li><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="none" stroke="#147AFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 19v-1.25c0-2.071-1.919-3.75-4.286-3.75h-3.428C7.919 14 6 15.679 6 17.75V19m9-11a3 3 0 1 1-6 0a3 3 0 0 1 6 0"/></svg></li>\n                    </ul>\n                </nav>\n            ');const e=this.ownerDocument.createElement("style");e.innerHTML=v.A,null===(n=this.shadowRoot)||void 0===n||n.appendChild(e)}}customElements.define("nav-responsive",w);class x extends HTMLElement{constructor(){super(),this.inputs=[],this.posts=[],this.attachShadow({mode:"open"}),a.forEach((n=>{const e=this.ownerDocument.createElement("app-nav-bar");e.setAttribute(i.username,n.username),e.setAttribute(i.name,n.name),e.setAttribute(i.photo,n.photo),e.setAttribute(i.uid,String(n.id));const t=this.ownerDocument.createElement("user-bar");t.setAttribute(c.username,n.username),t.setAttribute(c.name,n.name),t.setAttribute(c.photo,n.photo),t.setAttribute(c.uid,String(n.id)),e.appendChild(t),this.inputs.push(e)})),o.forEach((n=>{const e=this.ownerDocument.createElement("app-post");e.setAttribute(m.image,n.image),e.setAttribute(m.photouser,n.photouser),e.setAttribute(m.username,n.username),e.setAttribute(m.region,n.region),e.setAttribute(m.description,n.description),e.setAttribute(m.hashtags,n.hashtags),e.setAttribute(m.uid,String(n.id)),this.posts.push(e)}))}connectedCallback(){this.render()}render(){this.shadowRoot&&(this.shadowRoot.innerHTML+="\n            <app-nav-profile></app-nav-profile>\n            "),this.shadowRoot&&(this.shadowRoot.innerHTML+="\n                <section-search-bar></section-search-bar>\n            "),this.shadowRoot&&this.inputs.forEach((n=>{var e;null===(e=this.shadowRoot)||void 0===e||e.appendChild(n)})),this.shadowRoot&&this.posts.forEach((n=>{var e;null===(e=this.shadowRoot)||void 0===e||e.appendChild(n)})),this.shadowRoot&&(this.shadowRoot.innerHTML+="\n                <nav-responsive></nav-responsive>\n            ")}}customElements.define("app-container",x)})();