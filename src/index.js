import './index.css';
import './css/sidebar.css';
import './css/content.css';
import './css/forms.css';

import { toggleSidebar, toggleTheme, checkViewportWidth } from './js/sidebar.js';
import { displayTasksContent, addMissionsToSidebar } from './js/dom.js';
import { tabArray, createTab, createDefaultTabs } from './js/tabs.js';
import { displayAddMission } from './js/forms.js';

export function getUI() {
    return {
        /* General */
        root: document.documentElement,
        /* Sidebar */
        sidebar: document.querySelector('#sidebar-container'),
        sidebarBtn: document.querySelector('#sidebarBtn'),
        logo: document.querySelector('#logo'),
        themeBtn: document.querySelector('#themeBtn'),
        tabButtons: document.querySelectorAll('.tab-container button:not(#settingsBtn)'),
        missions: document.querySelector('#mission-container'),
        /* Content */
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
/* forms.js */
displayAddMission();


function displayAllTabOnLoad() {
    const { content } = getUI();
    const allTab = tabArray.find(tab => tab.title === 'All');

    window.addEventListener('load', () => {
        if (allTab) {
            content.innerHTML = "";
            displayTasksContent(allTab);
        }
    })
    addMissionsToSidebar({title: 'To buy' });
}

export function displayTabContentOnClick() {
    const { tabButtons, content } = getUI();
    const missionButtons = document.querySelectorAll('#mission-wrapper button');
    
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const dataTitle = btn.dataset.title;
            const selectedTab = tabArray.find(tab => tab.title === dataTitle);

            if (selectedTab) {
                content.innerHTML = "";
                displayTasksContent(selectedTab);
            }
        })
    })

    missionButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const dataTitle = btn.dataset.title;
            const selectedTab = tabArray.find(tab => tab.title === dataTitle);

            if (selectedTab) {
                content.innerHTML = "";
                displayTasksContent(selectedTab);
            }
        })
    })
}

displayAllTabOnLoad();
displayTabContentOnClick();
