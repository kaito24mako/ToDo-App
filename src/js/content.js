import { getUI } from "../index.js";

export function createTabContent() {
    const { content } = getUI();

    // LOOP THROUGH ARRAY OF TAB OBJECTS, CREATED BY CLASS

    const tabTitle = document.createElement('h2');
    tabTitle.id = 'tabTitle';
    tabTitle.textContent = 'All';  // PLACEHOLDER

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

    const todayTab = createTab('Today');
    const weekTab = createTab('This Week');
    const notScheduledTab = createTab('Not Scheduled');
    const importantTab = createTab('Important');
    const completedTab = createTab('Completed');
}

createDefaultTabs();

console.log(tabArray);
