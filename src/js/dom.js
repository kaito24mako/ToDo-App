import { getUI } from "../index.js";
import circleImg from '../images/circle.png';
import importantImg from '../images/important.png';
import folderImg from "../images/mission.png";
import optionsImg from "../images/edit.png";
import plusImg from "../images/plus.png";

export function displayTasksContent(tab) {
    const { content } = getUI();
    content.innerHTML = "";

    // title and counters
    const tabTitle = document.createElement('h2');
    tabTitle.id = 'tabTitle';
    tabTitle.textContent = tab.title;  

    const counters = document.createElement('div');
    counters.id = 'counters';

    const progress = document.createElement('span');
    progress.id = 'progress'
    progress.classList.add('counter');

    const progressNumber = document.createElement('p');
    progressNumber.id = 'number';
    progressNumber.textContent = '3';  // PLACEHOLDER

    const progressStatus = document.createElement('p');
    progressStatus.id = 'status';
    progressStatus.textContent = 'In Progress';  

    const completed = document.createElement('span');
    completed.id = 'completed'
    completed.classList.add('counter');

    const completedNumber = document.createElement('p');
    completedNumber.id = 'number';
    completedNumber.textContent = '0';  // PLACEHOLDER

    const completedStatus = document.createElement('p');
    completedStatus.id = 'status';
    completedStatus.textContent = 'Completed'; 
    
    const taskContainer = document.createElement('div');
    taskContainer.id = 'tasks';

    content.append(tabTitle, counters, taskContainer);
    counters.append(progress, completed);
    progress.append(progressNumber, progressStatus);
    completed.append(completedNumber, completedStatus);

    // tasks 
    tab.taskArray.forEach(t => {
        const task = document.createElement('div');
        task.classList.add('task');

        const buttonAndTitle = document.createElement('span');
        buttonAndTitle.id = 'button-and-title';

        const circle = document.createElement('button');
        const circleImage = document.createElement('img');
        circleImage.src = circleImg;
        circleImage.alt = 'A small circle';

        const title = document.createElement('p');
        title.id = 'taskTitle';
        title.textContent = 'Task 1'; // PLACEHOLDER 

        const important = document.createElement('img');
        important.src = importantImg;
        important.alt = 'Two exclamation marks';

        const duedate = document.createElement('span');
        duedate.id = 'duedate';
        duedate.textContent = 'Sat, 12 Nov'; // PLACEHOLDER

        taskContainer.appendChild(task);
        task.append(buttonAndTitle, duedate);
        buttonAndTitle.append(circle, title, important);
        circle.appendChild(circleImage);
    })

    // "add task" button 
        const addTaskBtn = document.createElement('button');
        addTaskBtn.id = 'addTaskBtn';

        const plus = document.createElement('p');
        plus.textContent = '+';

        const text = document.createElement('p');
        text.textContent = 'Add Task';

        content.appendChild(addTaskBtn);
        addTaskBtn.append(plus, text);
}

export function addMissionsToSidebar(tab) {
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
    button.dataset.title = tab.title;

    const iconTitle = document.createElement('span');
    iconTitle.classList.add('icon-and-title');

    const missionImg = document.createElement('img');
    missionImg.textContent = 'to buy';
    missionImg.src = folderImg;
    missionImg.alt = "An image of a folder with a target on it";

    const missionTitle = document.createElement('p');
    missionTitle.textContent = tab.title; 

    const settingsBtn = document.createElement('button');
    settingsBtn.id = 'settingsBtn';

    const settingsImg = document.createElement('img');
    settingsImg.src = optionsImg;
    settingsImg.alt = 'An image of a settings button';

    // "add mission" button
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

export function addMissionToSidebarList(tab) {
    const { missions } = getUI();
    const container = missions.querySelector('.tab-container'); 

    // Create the new mission button
    const wrapper = document.createElement('li');
    wrapper.classList.add('mission-wrapper');

    const button = document.createElement('button');
    button.dataset.title = tab.title;

    const iconTitle = document.createElement('span');
    iconTitle.classList.add('icon-and-title');

    const missionImg = document.createElement('img');
    missionImg.src = folderImg;
    missionImg.alt = 'An image of a folder with a target on it';

    const missionTitle = document.createElement('p');
    missionTitle.textContent = tab.title;

    // Build the structure
    iconTitle.append(missionImg, missionTitle);
    button.appendChild(iconTitle);
    wrapper.appendChild(button);

    // Insert before the “Add Mission” button
    const addMissionWrapper = missions.querySelector('#addMissionBtn').parentElement;
    container.insertBefore(wrapper, addMissionWrapper);

    // Optional: Add click listener for displaying mission content
    const { content } = getUI();
    button.addEventListener('click', () => {
        content.innerHTML = '';
        displayTasksContent(tab);
    });
}





