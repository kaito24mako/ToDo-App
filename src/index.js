import './index.css';
import './css/sidebar.css';
import './css/content.css';

import { toggleSidebar, toggleTheme, checkViewportWidth } from './js/sidebar.js';
import { displayTasksContent, addMissionsToSidebar } from './js/dom.js';
import { tabArray, createTab, createDefaultTabs } from './js/tabs.js';

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
addMissionsToSidebar({ title: 'To buy' });
/* tabs.js */
createDefaultTabs();
/* click.js */


function displayTabContentOnClick() {
    const { tabButtons, content } = getUI();
    // Declare due to missionButtons being created dynamically
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
displayTabContentOnClick();

function createNewMission() {
    const addMissionBtn = document.querySelector('#addMissionBtn');

    addMissionBtn.addEventListener('click', () => {
        // Prompt for new mission name
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
        // Add it to sidebar 
        addMissionsToSidebar(newMission);
        // Re-call so new mission shows
        displayTabContentOnClick();
    })
}
createNewMission();

