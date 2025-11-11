import './index.css';
import './css/sidebar.css';
import './css/content.css';

import { toggleSidebar, toggleTheme, checkViewportWidth } from './js/sidebar.js';
import { displayTasksContent, addMissionsToSidebar, addMissionToSidebarList } from './js/dom.js';
import { tabArray, createTab, createDefaultTabs } from './js/tabs.js';

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


function displayTaskContentOnClick() {
    const { tabButtons, content } = getUI();

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
}
displayTaskContentOnClick();

addMissionBtn.addEventListener('click', () => {
    const newMissionName = prompt('Enter new mission name:');
    if (!newMissionName) {
        return;
    }

    // Prevent duplicate names
    if (tabArray.some(tab => tab.title === newMissionName)) {
        alert('A mission with that name already exists.');
        return;
    }

    // Create new mission tab
    const newMission = createTab(newMissionName);

    // Add it to sidebar visually
    addMissionToSidebarList(newMission);
});
