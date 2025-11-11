import { getUI } from "../index.js";

export function createTabContent() {
    const { content } = getUI();

    // LOOP THROUGH ARRAY OF TAB OBJECTS, CREATED BY CLASS

    const tabTitle = document.createElement('h2');
    tabTitle.id = 'tabTitle';
    tabTitle.textContent = 'Title';  // PLACEHOLDER

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

    // ANOTHER LOOP FOR DISPLAYING TASKS 
}
