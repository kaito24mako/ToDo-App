import './index.css';
import './css/sidebar.css';
import './css/content.css';

import { toggleSidebar, toggleTheme, checkViewportWidth } from './js/sidebar.js';
import { addMissionsToSidebar } from './js/dom.js';
import { createDefaultTabs } from './js/tabs.js';
import { displayTasksContentOnClick } from './js/click.js';

export function getUI() {
    return {
        /* general */
        root: document.documentElement,
        /* sidebar */
        sidebar: document.querySelector('#sidebar-container'),
        sidebarBtn: document.querySelector('#sidebarBtn'),
        logo: document.querySelector('#logo'),
        themeBtn: document.querySelector('#themeBtn'),
        tabButtons: document.querySelectorAll('.tab-container button:not(#settingsBtn)'),
        missions: document.querySelector('#mission-container'),
        /* content */
        content: document.querySelector('#content-container'),
    }
}

/* sidebar.js */
toggleSidebar();
toggleTheme();
checkViewportWidth();
/* dom.js */
addMissionsToSidebar({ title: 'to buy' });
/* tabs.js */
createDefaultTabs();
/* click.js */
displayTasksContentOnClick();