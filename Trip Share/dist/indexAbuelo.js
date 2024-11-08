"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./screens/Dashboard/dashboard");
require("./screens/Login/login");
require("./screens/Profile/profile");
require("./screens/editProfile/editProfile");
require("./screens/myWishList/wishList");
require("./components/indexPadre");
const store_1 = require("./store");
const store_2 = require("./store");
const navigation_1 = require("./types/navigation");
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        (0, store_1.addObserver)(this);
    }
    connectedCallback() {
        this.render();
    }
    render() {
        var _a, _b, _c, _d, _e, _f;
        if (this.shadowRoot)
            this.shadowRoot.innerHTML = ``;
        switch (store_2.appState.screen) {
            case navigation_1.Screens.DASHBOARD:
                const dashboard = this.ownerDocument.createElement("app-dashboard");
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(dashboard);
                break;
            case navigation_1.Screens.LOGIN:
                const login = this.ownerDocument.createElement("app-login");
                (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(login);
                break;
            case navigation_1.Screens.REGISTER:
                const register = this.ownerDocument.createElement("app-register");
                (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.appendChild(register);
                break;
            case navigation_1.Screens.PROFILE:
                const profile = this.ownerDocument.createElement("app-profile");
                (_d = this.shadowRoot) === null || _d === void 0 ? void 0 : _d.appendChild(profile);
                break;
            case navigation_1.Screens.MY_WISH_LIST:
                const myWishList = this.ownerDocument.createElement("app-wish-list");
                (_e = this.shadowRoot) === null || _e === void 0 ? void 0 : _e.appendChild(myWishList);
                break;
            case navigation_1.Screens.EDIT_PROFILE:
                const editProfile = this.ownerDocument.createElement("app-edit-profile");
                (_f = this.shadowRoot) === null || _f === void 0 ? void 0 : _f.appendChild(editProfile);
                break;
            default:
                break;
        }
    }
}
;
customElements.define('app-container', AppContainer);
