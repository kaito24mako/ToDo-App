import { getUI } from "../index.js";
import folderImg from "../images/mission.png";
import optionsImg from "../images/edit.png";
import plusImg from "../images/plus.png";

export let tabArray = [];

export class Tab {
    constructor(title) {
        this.title = title;
        this.progress = 0;
        this.completed = 0;
        this.taskArray = [];
        this.id = crypto.randomUUID();
    }
    addTask(task) {
        this.taskArray.push(task);
        this.updateCounts();
    }
    updateCounts() {
        this.completed = this.taskArray.filter(task => task.completed).length;
        this.progress = this.taskArray.length - this.completed;
    }
}

export function createTab(title) {
    let newTab = new Tab(title);
    tabArray.push(newTab);
    return newTab;
}

export function createDefaultTabs() {
    createTab('All').addTask({ title: 'Work on ToDo App', completed: false, important: true }); 
    createTab('Today');
    createTab('This Week');
    createTab('Not Scheduled');
    createTab('Important');
    createTab('Completed');

    // TO CREATE A NEW MISSION 
}

// console.log(tabArray);

export function addTabToSidebar() {
    const { missions } = getUI();

    // missions
    const title = document.createElement('h3');
    title.textContent = 'Missions';

    const container = document.createElement('ul');
    container.classList.add('tab-container');
    container.id = 'mission-tab-container';

    const wrapper = document.createElement('li');
    wrapper.id = 'mission-wrapper';

    const button = document.createElement('button');

    const iconTitle = document.createElement('span');
    iconTitle.classList.add('icon-and-title');

    const missionImg = document.createElement('img');
    missionImg.textContent = 'to buy';
    missionImg.src = folderImg;
    missionImg.alt = "An image of a folder with a target on it";

    const missionTitle = document.createElement('p');
    missionTitle.textContent = 'to buy';  // how to set data-title?

    const settingsBtn = document.createElement('button');
    settingsBtn.id = 'settingsBtn';

    const settingsImg = document.createElement('img');
    settingsImg.src = optionsImg;
    settingsImg.alt = 'An image of a settings button';

    // add mission button
    const wrapper2 = document.createElement('li');

    const addMissionBtn = document.createElement('button');
    addMissionBtn.id = 'addMissionBtn';

    const iconTitle2 = document.createElement('span');
    iconTitle2.classList.add('icon-and-title');

    const addMissionImg = document.createElement('img');
    addMissionImg.src = plusImg;
    addMissionImg.alt = 'An image of a plus sign';

    const addMissionTitle = document.createElement('p');
    addMissionTitle.textContent = 'Add Mission';

    missions.append(title, container);
    container.append(wrapper, wrapper2);
    wrapper.append(button, settingsBtn);
    button.appendChild(iconTitle);
    iconTitle.append(missionImg, missionTitle);
    settingsBtn.appendChild(settingsImg);

    wrapper2.appendChild(addMissionBtn);
    addMissionBtn.appendChild(iconTitle2);
    iconTitle2.append(addMissionImg, addMissionTitle);
}