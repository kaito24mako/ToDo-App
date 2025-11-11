const ui = {
    sidebar: document.querySelector('#sidebar-container'),
    sidebarBtn: document.querySelector('#sidebarBtn'),
    logo: document.querySelector('#logo'),
    content: document.querySelector('#content-container'),
}

export function toggleSidebar() {
    const { sidebar, sidebarBtn, logo } = ui;
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

export function checkViewportWidth() {
    const { sidebar, sidebarBtn, logo, content } = ui;

    /* blur content on smaller viewports */
    if (window.innerWidth <= 665) {
        sidebar.classList.contains('open')
        ? (content.style.opacity = '0.2', logo.style.display = 'none')
        : (content.style.opacity = '1', logo.style.display = 'flex');
    } else {
        content.style.opacity = '1';
        logo.style.display = 'flex';
    }

    window.addEventListener('resize', checkViewportWidth);

    sidebarBtn.addEventListener('click', checkViewportWidth);
}








