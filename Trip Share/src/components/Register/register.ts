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
        console.log(e.target.value);
        
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

    openDialog(){
        const dialog =this.shadowRoot?.querySelector("#register-dialog") as HTMLDialogElement;
        dialog?.showModal()
    }

    render(){
        if(this.shadowRoot){
            // Crear el diálogo
            const dialog = this.ownerDocument.createElement('dialog');
            dialog.id = 'register-dialog';

            // Agregar la sección de encabezado
            const header = this.ownerDocument.createElement('section-header-register');
            dialog.appendChild(header);

            // Crear el contenedor de entradas
            const inputsDiv = this.ownerDocument.createElement('div');
            inputsDiv.className = 'inputs-register';

            // Crear los campos de entrada
            const nameInput = this.ownerDocument.createElement('input');
            nameInput.type = 'text';
            nameInput.id = 'name';
            nameInput.name = 'user';
            nameInput.placeholder = 'Name';
            nameInput.required = true;
            inputsDiv.appendChild(nameInput);

            const lastNameInput = this.ownerDocument.createElement('input');
            lastNameInput.type = 'text';
            lastNameInput.id = 'last-name';
            lastNameInput.name = 'last-user';
            lastNameInput.placeholder = 'Last name';
            lastNameInput.required = true;
            inputsDiv.appendChild(lastNameInput);

            const emailInput = this.ownerDocument.createElement('input');
            emailInput.type = 'email';
            emailInput.id = 'user-email';
            emailInput.name = 'email';
            emailInput.placeholder = 'Email';
            emailInput.required = true;
            inputsDiv.appendChild(emailInput);

            const passwordInput = this.ownerDocument.createElement('input');
            passwordInput.type = 'password';
            passwordInput.id = 'user-password';
            passwordInput.name = 'password';
            passwordInput.placeholder = 'Password';
            passwordInput.required = true;
            inputsDiv.appendChild(passwordInput);

            // Agregar el contenedor de entradas al diálogo
            dialog.appendChild(inputsDiv);

            // Agregar el encabezado de cumpleaños
            const birthdayHeader = this.ownerDocument.createElement('h1');
            birthdayHeader.innerText = 'Birthday';
            dialog.appendChild(birthdayHeader);

            // Crear el contenedor de selectores
            const selectorsDiv = this.ownerDocument.createElement('div');
            selectorsDiv.className = 'selectors';

            // Crear los selectores de día, mes y año
            const daySelect = this.ownerDocument.createElement('select');
            daySelect.id = 'day';
            daySelect.name = 'day';
            daySelect.innerHTML = `
                <option value="">Select one day</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="31">31</option>
            `;
            selectorsDiv.appendChild(daySelect);

            const monthSelect = this.ownerDocument.createElement('select');
            monthSelect.id = 'month';
            monthSelect.name = 'month';
            monthSelect.innerHTML = `
                <option value="">Select one month</option>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="12">December</option>
            `;
            selectorsDiv.appendChild(monthSelect);

            const yearSelect = this.ownerDocument.createElement('select');
            yearSelect.id = 'year';
            yearSelect.name = 'year';
            yearSelect.innerHTML = `
                <option value="">Select one year</option>
                <option value="1900">1900</option>
                <option value="1901">1901</option>
                <option value="2024">2024</option>
            `;
            selectorsDiv.appendChild(yearSelect);

            // Agregar el encabezado de región y el selector de región
            const regionHeader = this.ownerDocument.createElement('h1');
            regionHeader.innerText = 'Region';
            selectorsDiv.appendChild(regionHeader);

            const regionSelect = this.ownerDocument.createElement('select');
            regionSelect.id = 'region';
            regionSelect.name = 'region-user';
            regionSelect.innerHTML = `
                <option value="">Select region</option>
                <option value="1">Pacific Region</option>
                <option value="2">Andean Region</option>
                <option value="3">Amazonian Region</option>
                <option value="4">Orinoco Region</option>
            `;
            selectorsDiv.appendChild(regionSelect);

            // Agregar el contenedor de selectores al diálogo
            dialog.appendChild(selectorsDiv);

            // Crear el botón de registro
            const submitButton = this.ownerDocument.createElement('button');
            submitButton.id = 'submit-btn';
            submitButton.innerText = 'Register';
            submitButton.addEventListener('click', (event) => {
                event.preventDefault();
                // Lógica para manejar el registro
            });
            dialog.appendChild(submitButton);

            // Agregar el diálogo al shadowRoot
            this.shadowRoot.appendChild(dialog);


            this.shadowRoot.querySelector("#submit-btn")?.addEventListener("click", () => this.submitForm());

            const pEmail = this.shadowRoot.querySelector("#user-email");
            pEmail?.addEventListener('change', this.changeEmail.bind(this));

            const pPass = this.shadowRoot.querySelector("#user-password");
            pPass?.addEventListener('change', this.changePassword.bind(this));

            const pName = this.shadowRoot.querySelector("#name");
            pName?.addEventListener('change', this.changeName.bind(this));            

            const pLastName = this.shadowRoot.querySelector("#last-name");
            pLastName?.addEventListener('change', this.changeLastName.bind(this));
        };
        const cssLogin = this.ownerDocument.createElement("style");
        cssLogin.innerHTML = styles;
        this.shadowRoot?.appendChild(cssLogin); 
    }
};
customElements.define("app-register", AppRegister);
export default AppRegister;

