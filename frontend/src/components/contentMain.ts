import { CardComponent } from './card';
import { SearchInput } from './inputSearch';

export class ContentMain extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'wrapper');

        const content = document.createElement('span');
        content.textContent = this.getAttribute('text') || 'MF_VIDEOS';
        wrapper.appendChild(content);

        if (this.hasAttribute('showSearchInput') && this.getAttribute('showSearchInput') !== 'false') {
            const searchInput = new SearchInput();
            wrapper.appendChild(searchInput);

            searchInput.addEventListener('keydown', (event: KeyboardEvent) => {
                if (event.key === 'Enter') {
                    console.log('Enter pressionado! Valor digitado:', searchInput.value);
                }
            });
        }

        const cardsContainer = document.createElement('div');
        cardsContainer.setAttribute('class', 'cards-container');
        wrapper.appendChild(cardsContainer);

        const cardData = [
            { yellowStar: false },
            { yellowStar: true },
            { yellowStar: true },
            { yellowStar: true },
            { yellowStar: false },
            { yellowStar: false },
            { yellowStar: false },
            { yellowStar: false },
            { yellowStar: false },
            { yellowStar: false },
            { yellowStar: false },
            { yellowStar: false },
            { yellowStar: false },
            { yellowStar: false },
            { yellowStar: false },
        ];

        cardData.forEach(data => {
            const cardComponent = new CardComponent();
            cardComponent.setAttributes(data.yellowStar);
            cardsContainer.appendChild(cardComponent);
        });

        const style = document.createElement('style');
        style.textContent = `
            .wrapper {
                border: 1px solid black;
                padding: 10px 30px;
                display: flex;
                height: 90%;
                width: 75vw;
                flex-direction: column;
            }
            span {
                color: black;
                font-weight: bold;
                font-size: 1.5em;
                margin-bottom: 40px;
            }
            .cards-container {
                display: flex;
                flex-wrap: wrap;
                gap: 20px;
            }
        `;

        shadow.appendChild(style);
        shadow.appendChild(wrapper);
    }

    static get observedAttributes() {
        return ['showSearchInput'];
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        if (name === 'showSearchInput') {
            const wrapper = this.shadowRoot?.querySelector('.wrapper');
            if (wrapper) {
                if (newValue !== null && newValue !== '') {
                    const searchInput = new SearchInput();
                    wrapper.appendChild(searchInput);

                    searchInput.addEventListener('keydown', (event: KeyboardEvent) => {
                        if (event.key === 'Enter') {
                            console.log('Enter pressionado! Valor digitado:', searchInput.value);
                        }
                    });
                }
            }
        }
    }
}

customElements.define('app-content', ContentMain);
