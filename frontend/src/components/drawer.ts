import { navigateTo } from "..";

export class Drawer extends HTMLElement {
    constructor() {
      super();
  
      const shadow = this.attachShadow({ mode: 'open' });
  
      const wrapper = document.createElement('div');
      wrapper.setAttribute('class', 'wrapper');
  
      const content = document.createElement('span');
      content.textContent = 'Menu';
      wrapper.appendChild(content);

        const videosBtn = document.createElement('custom-button');
        videosBtn.setAttribute('text', 'Videos');
        videosBtn.addEventListener('click', () => {
          navigateTo('/videos');
        });
        wrapper.appendChild(videosBtn);

        const favoriteBtn = document.createElement('custom-button');
        favoriteBtn.setAttribute('text', 'Favoritos'); 
        favoriteBtn.setAttribute('side-content', '3');
        favoriteBtn.addEventListener('click', () => {
          navigateTo('/favoritos');
        });
        wrapper.appendChild(favoriteBtn);
  
      const style = document.createElement('style');
      style.textContent = `
        .wrapper {
          border: 1px solid black;
          padding: 10px 30px;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          height: 90%;
          flex-direction: column;
        }
        span {
          color: black;
          font-weight: bold;
          font-size: 1.5em;
          margin-bottom: 40px; 
        }

        custom-button {
            margin-top: 10%;
        }
      `;
  
      shadow.appendChild(style);
      shadow.appendChild(wrapper);
    }
  }
  
  customElements.define('app-drawer', Drawer);
  