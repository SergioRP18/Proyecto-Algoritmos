import styles from './searchBar.css';

class SearchBar extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }
    connectedCallback(){
        this.render();

        const selectedPills = this.shadowRoot?.querySelectorAll("button");

        selectedPills?.forEach(selectedPill => {
            let isSelected = false;

            selectedPill?.addEventListener("click", () => {
                isSelected = !isSelected;
                if(isSelected){
                    selectedPill.classList.add("selected");
                } else {
                    selectedPill.classList.remove("selected");
                }
            });
        });
    }
    render(){
        if(this.shadowRoot){
            const section = this.ownerDocument.createElement('section');
            section.classList.add('search-section');

            const containerSearchBar = this.ownerDocument.createElement('div');
            containerSearchBar.classList.add('container-search-bar');

            const searchWrapper = this.ownerDocument.createElement('div');
            searchWrapper.classList.add('search-wrapper');

            const searchInput = this.ownerDocument.createElement('input');
            searchInput.type = 'text';
            searchInput.id = 'search-bar';
            searchInput.placeholder = 'Search for #Hashtag or friends';

            const searchIcon = this.ownerDocument.createElementNS('http://www.w3.org/2000/svg', 'svg');
            searchIcon.classList.add('search-icon');
            searchIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
            searchIcon.setAttribute('width', '25');
            searchIcon.setAttribute('height', '25');
            searchIcon.setAttribute('viewBox', '0 0 24 24');

            const path = this.ownerDocument.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('fill', 'none');
            path.setAttribute('stroke', '#147AFF');
            path.setAttribute('stroke-linecap', 'round');
            path.setAttribute('stroke-linejoin', 'round');
            path.setAttribute('stroke-width', '2');
            path.setAttribute('d', 'M3 10a7 7 0 1 0 14 0a7 7 0 1 0-14 0m18 11l-6-6');

            searchIcon.appendChild(path);

            const searchTitles = this.ownerDocument.createElement('div');
            searchTitles.classList.add('search-titles');

            const title1 = this.ownerDocument.createElement('h1');
            title1.innerText = '¿Not knowing where to go?';

            const title2 = this.ownerDocument.createElement('h2');
            title2.innerText = 'Select one of the following options';

            const pillsSearchBar = this.ownerDocument.createElement('div');
            pillsSearchBar.classList.add('pills-search-bar');

            const regions = ['Pacific Region', 'Andean Region', 'Amazon Region', 'Caribbean Region', 'Orinoco Region'];
            regions.forEach(region => {
                const button = this.ownerDocument.createElement('button');
                button.innerText = region;
                pillsSearchBar.appendChild(button);
            });

            searchWrapper.appendChild(searchInput);
            searchWrapper.appendChild(searchIcon);
            containerSearchBar.appendChild(searchWrapper);

            searchTitles.appendChild(title1);
            searchTitles.appendChild(title2);
            containerSearchBar.appendChild(searchTitles);

            containerSearchBar.appendChild(pillsSearchBar);

            section.appendChild(containerSearchBar);

            this.shadowRoot.appendChild(section);
        };

        const cssSearchBar = this.ownerDocument.createElement("style");
        cssSearchBar.innerHTML = styles;
        this.shadowRoot?.appendChild(cssSearchBar);
    }

};
customElements.define("section-search-bar", SearchBar);
export default SearchBar;
