import './index.css';
import './css/sidebar.css';
import './css/content.css';

import { toggleSidebar, toggleTheme, checkViewportWidth } from './js/sidebar.js';
import { createTabContent } from './js/content.js';

export function getUI() {
    return {
        /* general */
        root: document.documentElement,
        /* sidebar */
        sidebar: document.querySelector('#sidebar-container'),
        sidebarBtn: document.querySelector('#sidebarBtn'),
        logo: document.querySelector('#logo'),
        themeBtn: document.querySelector('#themeBtn'),
        /* content */
        content: document.querySelector('#content-container'),
    }
}

/* sidebar.js */
toggleSidebar();
toggleTheme();
checkViewportWidth();

/* content.js */
createTabContent();