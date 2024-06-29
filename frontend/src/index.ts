import './styles.css'; // Verifique o caminho correto do arquivo CSS
import { defineCustomElements } from './components'; // Seu método defineCustomElements
import { Drawer } from './components/drawer';
import { CustomButton } from './components/button';
import { ContentMain } from './components/contentMain';
import { SearchInput } from './components/inputSearch';
import { CardComponent } from './components/card';

defineCustomElements();
customElements.define('app-drawer', Drawer);
customElements.define('custom-button', CustomButton);
customElements.define('app-content', ContentMain);
customElements.define('search-input', SearchInput);
customElements.define('card-component', CardComponent);

