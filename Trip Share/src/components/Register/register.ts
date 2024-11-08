import styles from './register.css';
import { registerUser } from "../../utils/Firebase";
import '../../components/indexPadre';
import { dispatch } from '../../store';
import { Screens } from '../../types/navigation';
import { navigate } from '../../store/actions';

const credentials = {
    name: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    day: '',
    month: '',
    year: '',
    region: '',
};

class AppRegister extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.shadowRoot?.addEventListener('close-popup', this.closeDialog.bind(this));
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
        credentials.name = e.target.value;
    }

    changeLastName(e: any) {
        this.setAttribute('lastName', e.target.value);
        credentials.lastName = e.target.value;
    }

    changeUsername(e: any) {
        this.setAttribute('username', e.target.value);
        credentials.username = e.target.value;
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
        if (resp) {
            dispatch(navigate(Screens.DASHBOARD));
        } else {
            alert('User could not be created');
        }
    }

    openDialog() {
        const dialog = this.shadowRoot?.querySelector("#register-dialog") as HTMLDialogElement;
        if (dialog) {
            dialog.classList.remove('hidden'); // Remueve la clase para mostrar el modal
            dialog.showModal();
        }
    }

    closeDialog() {
        const dialog = this.shadowRoot?.querySelector("#register-dialog") as HTMLDialogElement;
        if (dialog) {
            dialog.close();
            dialog.classList.add('hidden'); // Añade la clase para ocultar el modal
        }
    }

    render() {
        if (this.shadowRoot) {
            const dialog = this.ownerDocument.createElement('dialog');
            dialog.id = 'register-dialog';
            dialog.className = 'modal-content hidden'; // Añadir clase hidden para estar oculto al iniciar

            // Botón de cerrar
            const closeButton = this.ownerDocument.createElement('button');
            closeButton.className = 'close-button';
            closeButton.innerHTML = '×'; // Usa × para la X de cerrar
            closeButton.addEventListener('click', this.closeDialog.bind(this));
            dialog.appendChild(closeButton);

            const header = this.ownerDocument.createElement('h1');
            header.className = 'header-register';
            header.innerText = 'Register';
            dialog.appendChild(header);

            const description = this.ownerDocument.createElement('p');
            description.className = 'description-register';
            description.innerText = 'Join our travel community! Sign up to share your adventures, discover new destinations, and connect with fellow travel enthusiasts. Start exploring the world today!';
            dialog.appendChild(description);

            const inputsDiv = this.ownerDocument.createElement('div');
            inputsDiv.className = 'inputs-register';

            // Contenedor para Name y Last Name
            const nameLastNameContainer = this.ownerDocument.createElement('div');
            nameLastNameContainer.className = 'name-lastname-container';

            const nameInput = this.ownerDocument.createElement('input');
            nameInput.type = 'text';
            nameInput.id = 'name';
            nameInput.name = 'user';
            nameInput.placeholder = 'Name';
            nameInput.required = true;
            nameInput.addEventListener('change', this.changeName.bind(this));
            nameLastNameContainer.appendChild(nameInput);

            const lastNameInput = this.ownerDocument.createElement('input');
            lastNameInput.type = 'text';
            lastNameInput.id = 'last-name';
            lastNameInput.name = 'last-user';
            lastNameInput.placeholder = 'Last name';
            lastNameInput.required = true;
            lastNameInput.addEventListener('change', this.changeLastName.bind(this));
            nameLastNameContainer.appendChild(lastNameInput);

            // Añade el contenedor de Name y Last Name al div de inputs
            inputsDiv.appendChild(nameLastNameContainer);

            const usernameInput = this.ownerDocument.createElement('input');
            usernameInput.type = 'text';
            usernameInput.id = 'username';
            usernameInput.name = 'username';
            usernameInput.placeholder = 'Username';
            usernameInput.required = true;
            usernameInput.addEventListener('change', this.changeUsername.bind(this));
            inputsDiv.appendChild(usernameInput);

            const emailInput = this.ownerDocument.createElement('input');
            emailInput.type = 'email';
            emailInput.id = 'user-email';
            emailInput.name = 'email';
            emailInput.placeholder = 'Email';
            emailInput.required = true;
            emailInput.addEventListener('change', this.changeEmail.bind(this));
            inputsDiv.appendChild(emailInput);

            const passwordInput = this.ownerDocument.createElement('input');
            passwordInput.type = 'password';
            passwordInput.id = 'user-password';
            passwordInput.name = 'password';
            passwordInput.placeholder = 'Password';
            passwordInput.required = true;
            passwordInput.addEventListener('change', this.changePassword.bind(this));
            inputsDiv.appendChild(passwordInput);

            dialog.appendChild(inputsDiv);

            const selectorsDiv = this.ownerDocument.createElement('div');
            selectorsDiv.className = 'selectors';

            const birthdayHeader = this.ownerDocument.createElement('h1');
            birthdayHeader.innerText = 'Birthday';
            selectorsDiv.appendChild(birthdayHeader);

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
            daySelect.addEventListener('change', this.changeDay.bind(this));
            selectorsDiv.appendChild(daySelect);

            const monthSelect = this.ownerDocument.createElement('select');
            monthSelect.id = 'month';
            monthSelect.name = 'month';
            monthSelect.innerHTML = `
                <option value="">Select one month</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="December">December</option>
            `;
            monthSelect.addEventListener('change', this.changeMonth.bind(this));
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
            yearSelect.addEventListener('change', this.changeYear.bind(this));
            selectorsDiv.appendChild(yearSelect);

            // Contenedor de Region
            const regionContainer = this.ownerDocument.createElement('div');
            regionContainer.className = 'region-container';

            const regionHeader = this.ownerDocument.createElement('h1');
            regionHeader.innerText = 'Region';
            regionContainer.appendChild(regionHeader);

            const regionSelect = this.ownerDocument.createElement('select');
            regionSelect.id = 'region';
            regionSelect.name = 'region-user';
            regionSelect.innerHTML = `
                <option value="">Select region</option>
                <option value="Pacific Region">Pacific Region</option>
                <option value="Andean Region">Andean Region</option>
                <option value="Amazonian Region">Amazonian Region</option>
                <option value="Orinoco Region">Orinoco Region</option>
            `;
            regionSelect.addEventListener('change', this.changeRegion.bind(this));
            regionContainer.appendChild(regionSelect);

            // Añadir los contenedores de birthday y region a selectorsDiv
            selectorsDiv.appendChild(regionContainer);
            dialog.appendChild(selectorsDiv);

            const submitButton = this.ownerDocument.createElement('button');
            submitButton.id = 'submit-btn';
            submitButton.innerText = 'Register';
            submitButton.className = 'register-button';
            submitButton.addEventListener('click', (event) => {
                event.preventDefault();
                this.submitForm();
            });
            dialog.appendChild(submitButton);

            this.shadowRoot.appendChild(dialog);
        }

        const cssLogin = this.ownerDocument.createElement("style");
        cssLogin.innerHTML = styles;
        this.shadowRoot?.appendChild(cssLogin);
    }
}

customElements.define("app-register", AppRegister);
export default AppRegister;
