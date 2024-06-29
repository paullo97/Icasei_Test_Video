export class CardComponent extends HTMLElement {
    private shadow: ShadowRoot;
    private wrapper: HTMLDivElement;
    private playIcon: HTMLDivElement;
    private starIcon: HTMLDivElement;
    private yellowStar: boolean;

    constructor() {
        super();

        this.shadow = this.attachShadow({ mode: 'open' });

        this.wrapper = document.createElement('div');
        this.wrapper.setAttribute('class', 'card-wrapper');

        this.playIcon = document.createElement('div');
        this.playIcon.setAttribute('class', 'play-icon');
        this.playIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48"><path d="M8 5v14l11-7z"/><path d="M0 0h24v24H0z" fill="none"/></svg>';
        this.wrapper.appendChild(this.playIcon);

        this.starIcon = document.createElement('div');
        this.starIcon.setAttribute('class', 'star-icon');
        this.starIcon.innerHTML = `
            <svg width="30px" height="30px" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.70492 17.8855L10 15.9706L14.2951 17.8855C14.9986 18.1991 15.7777 17.6331 15.6967 16.8671L15.2028 12.1905L18.3513 8.69737C18.8669 8.12523 18.5694 7.20937 17.8159 7.04961L13.2155 6.07423L10.8663 2.00044C10.4815 1.33319 9.5185 1.33319 9.13372 2.00044L6.78449 6.07423L2.18413 7.04961C1.43063 7.20937 1.13305 8.12523 1.64874 8.69737L4.79719 12.1905L4.30325 16.8671C4.22234 17.6331 5.00142 18.1991 5.70492 17.8855ZM9.5928 13.9623L6.47433 15.3527L6.83295 11.9572C6.86276 11.675 6.77127 11.3934 6.58129 11.1826L4.29534 8.64644L7.63546 7.93826C7.91305 7.8794 8.15257 7.70538 8.29432 7.45957L10 4.50177L11.7057 7.45957C11.8474 7.70538 12.0869 7.8794 12.3645 7.93826L15.7047 8.64644L13.4187 11.1826C13.2287 11.3934 13.1372 11.675 13.167 11.9572L13.5257 15.3527L10.4072 13.9623C10.148 13.8468 9.85197 13.8468 9.5928 13.9623Z" fill="#000000"/>
            </svg>
        `;
        this.wrapper.appendChild(this.starIcon);

        const style = document.createElement('style');
        style.textContent = `
            .card-wrapper {
                position: relative;
                width: 200px;
                height: 200px;
                border: 1px solid #ccc;
                border-radius: 8px;
                overflow: hidden;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #f9f9f9;
                transition: transform 0.3s ease;
                margin-top: 20px;
            }

            .play-icon {
                fill: #fff;
                background-color: rgba(0, 0, 0, 0.6);
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                transition: background-color 0.3s ease;
            }

            .play-icon:hover {
                background-color: rgba(0, 0, 0, 0.8);
            }

            .star-icon {
                position: absolute;
                bottom: 10px;
                right: 10px;
                width: 24px;
                height: 24px;
                fill: #f39c12; /* Altere a cor da estrela conforme necessário */
                cursor: pointer;
            }
        `;

        this.shadow.appendChild(style);
        this.shadow.appendChild(this.wrapper);

        this.yellowStar = this.hasAttribute('yellowStar');
        this.updateStarIcon();
    }

    static get observedAttributes() {
        return ['yellowStar'];
    }

    connectedCallback() {
        const starIcon = this.shadow.querySelector('.star-icon') as HTMLDivElement | null;
        if (starIcon) {
            this.starIcon = starIcon;
            this.yellowStar = this.hasAttribute('yellowStar');
            this.updateStarIcon();
        } else {
            console.error('Elemento .star-icon não encontrado no shadow DOM.');
        }
    }
    
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
        if (name === 'yellowStar' && this.starIcon) {
            this.yellowStar = newValue !== null;
            this.updateStarIcon();
        }
    }

    private updateStarIcon() {
        if (this.yellowStar && this.starIcon) {
            const customStarSVG = `
            <svg width="30px" height="30px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--fxemoji" preserveAspectRatio="xMidYMid meet"><path fill="#FFB636" d="M252.5 381l-128 49c-5.9 2.2-12.1-2.3-11.8-8.6l7-136.9c.1-2.1-.6-4.2-1.9-5.9L31.6 172c-4-4.9-1.6-12.2 4.5-13.9l132.4-35.6c2.1-.6 3.9-1.9 5-3.7L248.3 4c3.4-5.3 11.2-5.3 14.6 0l74.8 114.9c1.2 1.8 3 3.1 5 3.7l132.4 35.6c6.1 1.6 8.5 9 4.5 13.9l-86.1 106.6c-1.3 1.7-2 3.8-1.9 5.9l7 136.9c.3 6.3-5.9 10.8-11.8 8.6l-128-49c-2.1-.8-4.3-.8-6.3-.1z"></path><path fill="#FFD469" d="M456.1 51.7l-41-41c-1.2-1.2-2.8-1.7-4.4-1.5c-1.6.2-3.1 1.2-3.9 2.6l-42.3 83.3c-1.2 2.1-.8 4.6.9 6.3c1 1 2.4 1.5 3.7 1.5c.9 0 1.8-.2 2.6-.7L454.9 60c1.4-.8 2.4-2.2 2.6-3.9c.3-1.6-.3-3.2-1.4-4.4z"></path><path fill="#FFD469" d="M149.1 95.2l-42.3-83.3c-.8-1.4-2.2-2.4-3.9-2.6c-1.6-.2-3.3.3-4.4 1.5l-41 41c-1.2 1.2-1.7 2.8-1.5 4.4c.2 1.6 1.2 3.1 2.6 3.9l83.3 42.3c2.1 1.2 4.7.8 6.3-.9c1-1 1.5-2.4 1.5-3.7c0-.9-.2-1.8-.7-2.6z"></path><path fill="#FFD469" d="M212.6 165.2l-83.3-42.3c-1.4-.8-3.1-.3-4.4 1.5c-1.2 1.2-1.7 2.8-1.5 4.4l41 83.3c.8 1.6 2.4 2.6 4.2 2.6c.9 0 1.8-.2 2.6-.7c1.4-.8 2.4-2.2 2.6-3.9l42.3-83.3c.3-1.6-.3-3.2-1.4-4.4z"></path></svg>
            `;
            this.starIcon.innerHTML = customStarSVG;
        } else if (!this.yellowStar && this.starIcon) {
            const defaultStarSVG = `
            <svg width="30px" height="30px" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.70492 17.8855L10 15.9706L14.2951 17.8855C14.9986 18.1991 15.7777 17.6331 15.6967 16.8671L15.2028 12.1905L18.3513 8.69737C18.8669 8.12523 18.5694 7.20937 17.8159 7.04961L13.2155 6.07423L10.8663 2.00044C10.4815 1.33319 9.5185 1.33319 9.13372 2.00044L6.78449 6.07423L2.18413 7.04961C1.43063 7.20937 1.13305 8.12523 1.64874 8.69737L4.79719 12.1905L4.30325 16.8671C4.22234 17.6331 5.00142 18.1991 5.70492 17.8855ZM9.5928 13.9623L6.47433 15.3527L6.83295 11.9572C6.86276 11.675 6.77127 11.3934 6.58129 11.1826L4.29534 8.64644L7.63546 7.93826C7.91305 7.8794 8.15257 7.70538 8.29432 7.45957L10 4.50177L11.7057 7.45957C11.8474 7.70538 12.0869 7.8794 12.3645 7.93826L15.7047 8.64644L13.4187 11.1826C13.2287 11.3934 13.1372 11.675 13.167 11.9572L13.5257 15.3527L10.4072 13.9623C10.148 13.8468 9.85197 13.8468 9.5928 13.9623Z" fill="#000000"/>
            </svg>
            `;
            this.starIcon.innerHTML = defaultStarSVG;
        }
    }

    setAttributes(yellowStar: boolean) {
        if (yellowStar) {
            this.setAttribute('yellowStar', 'true');
        } else {
            this.removeAttribute('yellowStar');
        }
    }
}

customElements.define('card-component', CardComponent);
