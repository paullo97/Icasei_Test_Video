export class CustomButton extends HTMLElement {
    private buttonText: string = '';
    private sideContent: string = '';

    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        this.buttonText = this.getAttribute('text') || '';
        this.sideContent = this.getAttribute('side-content') || '';

        const button = document.createElement('button');
        button.textContent = this.buttonText;

        if (this.sideContent) {
            const sideElement = document.createElement('span');
            sideElement.textContent = this.sideContent;
            button.appendChild(sideElement);
        }

        const style = document.createElement('style');
        style.textContent = `
            button {
                padding: 10px;
                font-size: 16px;
                background-color: transparent;
                color: white;
                border: 1px solid black;
                cursor: pointer;
                display: flex;
                align-items: center;
                width: 200px;
                color: black;
                border-radius: 5px;
                justify-content: space-between;
            }
            span {
                color: black;
                background-color: orange;
                height: 25px;
                border-radius: 10px;
                width: 25px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        `;

        shadow.appendChild(style);
        shadow.appendChild(button);
    }

    get text() {
        return this.buttonText;
    }

    get getSideContent() {
        return this.sideContent;
    }
}

customElements.define('custom-button', CustomButton);
