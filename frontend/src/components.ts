class MyComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'wrapper');

    const text = document.createElement('span');
    text.textContent = 'Hello, I am a custom component!';
    wrapper.appendChild(text);

    const style = document.createElement('style');
    style.textContent = `
      .wrapper {
        border: 1px solid black;
        padding: 10px;
        background-color: lightgray;
      }
      span {
        color: blue;
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
  }
}

export function defineCustomElements() {
  customElements.define('my-component', MyComponent);
}
