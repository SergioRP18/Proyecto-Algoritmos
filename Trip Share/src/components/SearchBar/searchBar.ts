import styles from './searchBar.css';

class SearchBar extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }
    connectedCallback(){
        this.render();
    }
    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <section class="search-section">
                <div class="container-search-bar">
                    <input type="text" id="search-bar" placeholder="Search for #Hashtag or friends">
                    <div class="search-titles">
                        <h1>¿Not knowing where to go?</h1>
                        <h2>Select one of the following options</h2>
                    </div>
                    <div class ="pills-search-bar">
                        <button>Región Pacífica</button>
                        <button>Región Andina</button>
                        <button>Región Amazónica</button>
                        <button>Región Caribe</button>
                        <button>Región Orinoquía</button>
                    </div>
                </div>
            </section>
            `;
        };

        const cssSearchBar = this.ownerDocument.createElement("style");
        cssSearchBar.innerHTML = styles;
        this.shadowRoot?.appendChild(cssSearchBar);
    }
};
customElements.define("section-search-bar", SearchBar);
export default SearchBar;
