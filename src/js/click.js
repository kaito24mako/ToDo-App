import { getUI } from "../index.js";
import { tabArray } from "./tabs.js";
import { displayTasksContent } from "./dom.js";

export function displayTasksContentOnClick() {
    const { tabButtons, content } = getUI();

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const dataTitle = btn.dataset.title;
            const selectedTab = tabArray.find(tab => tab.title === dataTitle);

            if (selectedTab) {
                content.innerHTML = "";
                displayTasksContent(selectedTab);
            }
        })
    })
}