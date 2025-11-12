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
        const newMissionTitle = form.elements["title"];

        e.preventDefault();

        if (tabArray.some(tab => tab.title === newMissionTitle)) {
            alert('The mission name already exists.');
            return;
        }

        const newMission = createTab(newMissionTitle.value);
        addMissionsToSidebar(newMission);
        displayTabContentOnClick();

        dialog.close();
        form.reset();
    })
}
