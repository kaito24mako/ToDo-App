import { displayTabContentOnClick } from "../index.js";
import { addMissionsToSidebar } from "./dom.js";
import { createTab, tabArray } from "./tabs.js";

export function displayAddMission() {

    const dialog = document.querySelector('#addMission-dialog');
    const form = document.querySelector('#addMission-form');
    const addMissionBtn = document.querySelector('#addMissionBtn');
    const closeBtn = document.querySelector('#addMission-form .buttons #cancel');

    addMissionBtn.addEventListener('click', (e) => {
        e.preventDefault();
        dialog.showModal();
    })

    closeBtn.addEventListener('click', () => {
        dialog.close();
        form.reset();
    })

    form.addEventListener('submit', (e) => {
        const titleInput = form.elements["title"];

        e.preventDefault();

        if (tabArray.some(tab => tab.title === titleInput.value)) {
            alert('The mission name already exists.');
            return;
        }

        const newMission = createTab(titleInput.value);
        addMissionsToSidebar(newMission);
        displayTabContentOnClick();
        // editMission();

        dialog.close();
        form.reset();
    })
}

export function editMission() {
    const dialog = document.querySelector('#editMission-dialog');
    const form = document.querySelector('#editMission-form');
    const editMissionBtn = document.querySelectorAll('#settingsBtn');
    const deleteBtn = document.querySelector('#editMission-form .buttons #cancel');
    const titleInput = form.elements["title"];

    editMissionBtn.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            const missionBtn = button.previousElementSibling;
            const oldTitle = missionBtn.dataset.title;
            const missionWrapper = button.closest('li');

            dialog.showModal();
            titleInput.value = oldTitle;

            // Delete mission
            deleteBtn.onclick = () => {
                const missionIndex = tabArray.findIndex(tab => tab.title === oldTitle);
                tabArray.splice(missionIndex, 1);
                missionWrapper.remove();

                dialog.close();
                form.reset();
            }

            // Edit mission name 
            form.onsubmit = (e) => {
                e.preventDefault();

                const newTitle = titleInput.value;

                // find and update the mission in tabArray
                const mission = tabArray.find(tab => tab.title === oldTitle);
                if (mission) {
                    mission.title = newTitle;
                }

                // update the text in sidebar
                missionBtn.dataset.title = newTitle;
                missionBtn.querySelector('p').textContent = newTitle;

                dialog.close();
                form.reset();
            }
        })
    })
}
