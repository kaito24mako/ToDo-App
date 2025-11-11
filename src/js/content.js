import { getUI } from "../index.js";

export function displayTabContent(tab) {
    const { content } = getUI();
    content.innerHTML = "";

    // List of tabs 
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

    // Structure 
    content.append(tabTitle, counters);
    counters.append(progress, completed);
    progress.append(progressNumber, progressStatus);
    completed.append(completedNumber, completedStatus);

    // List of tasks 
}


let tabArray = [];

class Tab {
    constructor(title) {
        this.title = title;
        this.progress = 0;
        this.completed = 0;
        this.taskArr = [];
        this.id = crypto.randomUUID();
    }
    addTask(task) {
        this.taskArr.push(task);
        this.updateCounts();
    }
    updateCounts() {
        this.completed = this.taskArr.filter(task => task.completed).length;
        this.progress = this.taskArr.length - this.completed;
    }
}

function createTab(title) {
    let newTab = new Tab(title);
    tabArray.push(newTab);
    return newTab;
}

function createDefaultTabs() {
    const allTab = createTab('All');
    allTab.addTask({ title: 'Work on ToDo App', completed: false, important: true });

    createTab('Today');
    createTab('This Week');
    createTab('Not Scheduled');
    createTab('Important');
    createTab('Completed');
}

createDefaultTabs();
console.log(tabArray);

/* Display tab content on click */ 

const allBtn = document.querySelector('#allBtn');

allBtn.addEventListener('click', () => {
    const allTab = tabArray.find(tab => tab.title === 'All');
    if (allTab) {
        displayTabContent(allTab);
    }
})



