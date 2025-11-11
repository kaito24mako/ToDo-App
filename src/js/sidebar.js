import { getUI } from "../index.js";

export function toggleSidebar() {
    const { sidebar, sidebarBtn, logo } = getUI();
    sidebar.classList.add('open');

    sidebarBtn.addEventListener('click', () => {
        if (sidebar.classList.contains('open')) {   
            /* close sidebar */   
            sidebar.classList.replace('open', 'close');
            logo.style.left = '4rem';
        } else if (sidebar.classList.contains('close')) {
            /* open sidebar */
            sidebar.classList.replace('close', 'open');
            logo.style.left = '17.5rem';
        }
    })
}

export function toggleTheme() {
    const { root, themeBtn } = getUI();

    themeBtn.addEventListener('click', () => {
        const currentTheme = root.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', newTheme);
        // save to localStorage
        localStorage.setItem('theme', newTheme);
    })

    // load saved theme (via localstorage) on page load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        root.setAttribute('data-theme', savedTheme);
    }
}

export function checkViewportWidth() {
    const { sidebar, sidebarBtn, logo, themeBtn, content } = getUI();

    /* blur content on smaller viewports */
    if (window.innerWidth <= 665) {
        sidebar.classList.contains('open')
        ? (content.style.opacity = '0.2', logo.style.display = 'none', themeBtn.style.opacity = '0.2', themeBtn.style.right = '2rem')
        : (content.style.opacity = '1', logo.style.display = 'flex', themeBtn.style.opacity = '1', themeBtn.style.right = '2rem');
    } else {
        content.style.opacity = '1';
        logo.style.display = 'flex';
        themeBtn.style.opacity = '1';
        themeBtn.style.right = '1rem';
    }

    window.addEventListener('resize', checkViewportWidth);
    sidebarBtn.addEventListener('click', checkViewportWidth);
}









