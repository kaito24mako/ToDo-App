import './index.css';
import './css/sidebar.css';
import './css/content.css';

import { toggleSidebar, toggleTheme, checkViewportWidth } from './js/sidebar.js';
import { displayContent, addMissionsToSidebar } from './js/dom.js';
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
addMissionsToSidebar();
/* tabs.js */
createDefaultTabs();

function displayContentOnClick() {
    const { tabButtons, content } = getUI();

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const dataTitle = btn.dataset.title;
            const selectedTab = tabArray.find(tab => tab.title === dataTitle);

            if (selectedTab) {
                content.innerHTML = "";
                displayContent(selectedTab);
            }
        })
    })
}
displayContentOnClick();