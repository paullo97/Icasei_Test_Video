import './styles.css';
import { defineCustomElements } from './components';
import { Drawer } from './components/drawer';
import { CustomButton } from './components/button';
import { ContentMain } from './components/contentMain';
import { SearchInput } from './components/inputSearch';
import { CardComponent } from './components/card';

function handleRoute(path: string) {
    if (path === '/videos') {
        renderVideosComponent();
    } else if (path === '/favoritos') {
        renderFavoritesComponent();
    } else {
        render404Component();
    }
}

window.addEventListener('DOMContentLoaded', () => {
    defineCustomElements();
    customElements.define('app-drawer', Drawer);
    customElements.define('custom-button', CustomButton);
    customElements.define('app-content', ContentMain);
    customElements.define('search-input', SearchInput);
    customElements.define('card-component', CardComponent);

    handleRoute(window.location.pathname);
});

window.addEventListener('popstate', () => {
    handleRoute(window.location.pathname);
});

export function navigateTo(path: string) {
    history.pushState(null, '', path);
    handleRoute(path);
}

function renderVideosComponent() {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
        mainContent.innerHTML = '<app-content text="Videos" showSearchInput></app-content>';
    }
}

function renderFavoritesComponent() {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
        mainContent.innerHTML = '<app-content text="Favoritos"></app-content>';
    }
}

function render404Component() {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
        mainContent.innerHTML = '<h2>404 - Página não encontrada</h2>';
    }
}
