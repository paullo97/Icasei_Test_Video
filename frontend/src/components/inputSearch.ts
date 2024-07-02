export class SearchInput extends HTMLElement {
    private inputElement: HTMLInputElement;

    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        this.inputElement = document.createElement('input');
        this.inputElement.type = 'text';
        this.inputElement.placeholder = 'Search...';

        const style = document.createElement('style');
        style.textContent = `
            input {
                padding: 10px;
                font-size: 16px;
                border: 1px solid #ccc;
                border-radius: 5px;
                width: 30%;
            }
        `;

        shadow.appendChild(style);
        shadow.appendChild(this.inputElement);
    }

    get value() {
        return this.inputElement.value;
    }
}

customElements.define('search-input', SearchInput);
