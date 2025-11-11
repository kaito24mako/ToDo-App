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
    // default tabs 
    createTab('All').addTask({ title: 'Work on ToDo App', completed: false, important: true }); 
    createTab('Today');
    createTab('This Week');
    createTab('Not Scheduled');
    createTab('Important');
    createTab('Completed');

    // new missions
    createTab('to buy');
}

