// src/components/search-input.ts

export class SearchInput extends HTMLElement {
    private inputElement: HTMLInputElement;

    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        // Criar input element
        this.inputElement = document.createElement('input');
        this.inputElement.type = 'text';
        this.inputElement.placeholder = 'Search...';

        // Estilos para o input
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

        // Anexar elementos ao shadow DOM
        shadow.appendChild(style);
        shadow.appendChild(this.inputElement);
    }

    // Método getter para obter o valor do input
    get value() {
        return this.inputElement.value;
    }
}

// Registrar o componente SearchInput
customElements.define('search-input', SearchInput);
