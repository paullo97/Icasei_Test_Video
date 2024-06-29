// src/components/drawer.ts
export class Drawer extends HTMLElement {
    constructor() {
      super();
  
      const shadow = this.attachShadow({ mode: 'open' });
  
      // Criar wrapper div
      const wrapper = document.createElement('div');
      wrapper.setAttribute('class', 'wrapper');
  
      // Adicionar algum conteúdo à div
      const content = document.createElement('span');
      content.textContent = 'MF_DRAWER';
      wrapper.appendChild(content);

        // Criar o botão personalizado
        const videosBtn = document.createElement('custom-button');
        videosBtn.setAttribute('text', 'Videos'); // Definir o texto do botão
        videosBtn.addEventListener('click', () => {
            console.log('Botão clicado dentro do Drawer! 1');
        });
        wrapper.appendChild(videosBtn);

        // Criar o botão personalizado
        const favoriteBtn = document.createElement('custom-button');
        favoriteBtn.setAttribute('text', 'Favoritos'); // Definir o texto do botão
        favoriteBtn.setAttribute('side-content', '3');
        favoriteBtn.addEventListener('click', () => {
            console.log('Botão clicado dentro do Drawer! 2');
        });
        wrapper.appendChild(favoriteBtn);
  
      // Criar elemento style para estilos encapsulados
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
  
      // Anexar estilos e wrapper ao shadow DOM
      shadow.appendChild(style);
      shadow.appendChild(wrapper);
    }
  }
  
  // Registrar o elemento personalizado
  customElements.define('app-drawer', Drawer);
  