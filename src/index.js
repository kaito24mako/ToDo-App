import './index.css';
import './css/sidebar.css';
import './css/content.css';

import { toggleSidebar, toggleTheme, checkViewportWidth } from './js/sidebar.js';
import { displayTabContent } from './js/dom.js';
import { tabArray, createDefaultTabs } from './js/tabs.js';

export function getUI() {
    return {
        /* general */
        root: document.documentElement,
        /* sidebar */
        sidebar: document.querySelector('#sidebar-container'),
        sidebarBtn: document.querySelector('#sidebarBtn'),
        logo: document.querySelector('#logo'),
        themeBtn: document.querySelector('#themeBtn'),
        allBtn: document.querySelector('#allBtn'),
        /* content */
        content: document.querySelector('#content-container'),
    }
}

/* sidebar.js */
toggleSidebar();
toggleTheme();
checkViewportWidth();
/* dom.js */
/* tabs.js */
createDefaultTabs();


/* Display tab content on click */ 

allBtn.addEventListener('click', () => {
    const allTab = tabArray.find(tab => tab.title === 'All');
    if (allTab) {
        displayTabContent(allTab);
    }
})