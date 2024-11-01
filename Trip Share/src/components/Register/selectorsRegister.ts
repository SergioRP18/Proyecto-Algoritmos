
const credentials = {
    day: '',
    month: '',
    year: '',
    region: '',
}
class SelectorRegister extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        this.render();
    }

    changeDay(e: any) {
		credentials.day = e.target.value;
	}

    changeMonth(e: any) {
		credentials.month = e.target.value;
	}

    changeYear(e: any) {
		credentials.year = e.target.value;
	}

    changeRegion(e: any) {
		credentials.region = e.target.value;
	}

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
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

            `;

            const pDay = this.ownerDocument.getElementById("day");
            pDay?.addEventListener('change', this.changeDay);

            const pMonth = this.ownerDocument.getElementById("month");
            pMonth?.addEventListener('change', this.changeMonth);

            const pYear = this.ownerDocument.getElementById("year");
            pYear?.addEventListener('change', this.changeYear);

            const pRegion = this.ownerDocument.getElementById("region");
            pRegion?.addEventListener('change', this.changeRegion);
        }
    }
};
customElements.define("section-selector-register", SelectorRegister);
export default SelectorRegister;