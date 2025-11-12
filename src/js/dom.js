import { getUI } from "../index.js";
import circleImg from '../images/circle.png';
import importantImg from '../images/important.png';
import folderImg from "../images/mission.png";
import optionsImg from "../images/edit.png";

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
    progressNumber.textContent = tab.progress; 
    
    // const progressCounter = document.querySelector('#task-tab-container .counter')
    // progressCounter.textContent = tab.progress;

    const progressStatus = document.createElement('p');
    progressStatus.id = 'status';
    progressStatus.textContent = 'In Progress';  

    const completed = document.createElement('span');
    completed.id = 'completed'
    completed.classList.add('counter');

    const completedNumber = document.createElement('p');
    completedNumber.id = 'number';
    completedNumber.textContent = tab.completed;

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
    const container = missions.querySelector('.tab-container'); 

    // missions
    const wrapper = document.createElement('li');
    wrapper.id = 'mission-wrapper';

    const button = document.createElement('button');
    button.dataset.title = tab.title;

    const iconTitle = document.createElement('span');
    iconTitle.classList.add('icon-and-title');

    const missionImg = document.createElement('img');
    missionImg.src = folderImg;
    missionImg.alt = "An image of a folder with a target on it";

    const missionTitle = document.createElement('p');
    missionTitle.textContent = tab.title; 

    const settingsBtn = document.createElement('button');
    settingsBtn.id = 'settingsBtn';

    const settingsImg = document.createElement('img');
    settingsImg.src = optionsImg;
    settingsImg.alt = 'An image of a settings button';

    container.appendChild(wrapper);
    wrapper.append(button, settingsBtn);
    button.appendChild(iconTitle);
    iconTitle.append(missionImg, missionTitle);
    settingsBtn.appendChild(settingsImg);

    // append missions before "Add Mission" button
    const addMissionWrapper = missions.querySelector('#addMissionBtn').parentElement;
    container.insertBefore(wrapper, addMissionWrapper);
}








