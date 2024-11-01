import styles from './register.css';
import { registerUser } from "../../utils/Firebase";
import '../../components/indexPadre';
import { dispatch } from '../../store';
import { Screens } from '../../types/navigation';
import { navigate } from '../../store/actions';

const credentials = {
    name: '',
    lastName:'',
    email:  '',
    password: '',
    day: '',
    month: '',
    year:'',
    region: '',
};

class AppRegister extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        this.render();
    }

    changeEmail(e: any) {
        this.setAttribute('email', e.target.value);
        credentials.email = e.target.value;
    }

    changePassword(e: any) {
        this.setAttribute('password', e.target.value);
        credentials.password = e.target.value;
    }

    changeName(e: any) {
        this.setAttribute('name', e.target.value);
        console.log(e.target.value);
        
        credentials.name = e.target.value;
    }

    changeLastName(e: any) {
        this.setAttribute('lastName', e.target.value);
        credentials.lastName = e.target.value;
    }

    changeDay(e: any) {
        this.setAttribute('day', e.target.value);
        credentials.day = e.target.value;
    }

    changeMonth(e: any) {
        this.setAttribute('month', e.target.value);
        credentials.month = e.target.value;
    }

    changeYear(e: any) {
        this.setAttribute('year', e.target.value);
        credentials.year = e.target.value;
    }

    changeRegion(e: any) {
        this.setAttribute('region', e.target.value);
        credentials.region = e.target.value;
    }


    async submitForm() {
        const resp = await registerUser(credentials);
        resp ? dispatch(navigate(Screens.LOGIN)) : alert('No se pudo crear el usuario');
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
                <section-header-register></section-header-register>
                <div class="inputs-register">
                    <input type="text" id="name" name="user" placeholder="Name" required>
                    <input type="text" id="last-name" name="last-user" placeholder="Last name" required>
                    <input type="email" id="user-email" name="email" placeholder="Email" required>
                    <input type="password" id="user-password" name="password" placeholder="Password" required>
                </div>
                <h1>Birthday</h1>
                <div class="selectors">
                    <select id="day" name="day">
                        <option value="">Select one day</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="31">31</option>
                    </select>
                    <select id="month" name="month">
                        <option value="">Select one month</option>
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="12">December</option>
                    </select>
                    <select id="year" name="year">
                        <option value="">Select one year</option>
                        <option value="1900">1900</option>
                        <option value="1901">1901</option>
                        <option value="2024">2024</option>
                    </select>
                    <h1>Region</h1>
                    <select id="region" name="region-user">
                        <option value="">Select region</option>
                        <option value="1">Pacific Region</option>
                        <option value="2">Andean Region</option>
                        <option value="3">Amazonian Region</option>
                        <option value="4">Orinoco Region</option>
                    </select>
                </div>
                <button id="submit-btn">Register</button>
            `;

            this.shadowRoot.querySelector("#submit-btn")?.addEventListener("click", () => this.submitForm());

            const pEmail = this.ownerDocument.querySelector("#user-email");
            pEmail?.addEventListener('change', this.changeEmail);
            console.log(credentials);
            

            const pPass = this.ownerDocument.querySelector("#user-password");
            pPass?.addEventListener('change', this.changePassword);

            const pName = this.ownerDocument.querySelector("#name");
            pName?.addEventListener('change', this.changeName);            

            const pLastName = this.ownerDocument.querySelector("#last-name");
            pLastName?.addEventListener('change', this.changeLastName);

        };
        const cssLogin = this.ownerDocument.createElement("style");
        cssLogin.innerHTML = styles;
        this.shadowRoot?.appendChild(cssLogin); 
    }
};
customElements.define("app-register", AppRegister);
export default AppRegister;

