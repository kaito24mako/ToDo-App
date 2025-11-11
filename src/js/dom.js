import { getUI } from "../index.js";

export function displayTabContent(tab) {
    const { content } = getUI();
    content.innerHTML = "";

    // list of tabs 
    const tabTitle = document.createElement('h2');
    tabTitle.id = 'tabTitle';
    tabTitle.textContent = tab.title;  // PLACEHOLDER

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

    content.append(tabTitle, counters);
    counters.append(progress, completed);
    progress.append(progressNumber, progressStatus);
    completed.append(completedNumber, completedStatus);

    // list of tasks 
    const taskContainer = document.createElement('div');
    taskContainer.id = 'tasks';
    tab.taskArray.forEach(t => {
        const task = document.createElement('div');
        task.classList.add('task');

        const buttonAndTitle = document.createElement('span');
        buttonAndTitle.id = 'button-and-title';

        const circle = document.createElement('button');
        const circleImg = document.createElement('img');
        circleImg.src = '../images/circle.png';
        circleImg.alt = 'A small circle';

        const title = document.createElement('p');
        title.id = 'taskTitle';
        title.textContent = 'Task 1'; // PLACEHOLDER 

        const important = document.createElement('img');
        important.src = '../images/important.png';
        important.alt = 'Two exclamation marks';

        const duedate = document.createElement('span');
        duedate.id = 'duedate';
        duedate.textContent = 'Sat, 12 Nov'; // PLACEHOLDER

        taskContainer.appendChild(task);
        task.append(buttonAndTitle, duedate);
        buttonAndTitle.append(circle, title, important);
    })

    content.appendChild(taskContainer);
}




