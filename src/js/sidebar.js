export function toggleSidebar() {
    const sidebar = document.querySelector('#sidebar-container');
    const sidebarBtn = document.querySelector('#sidebarToggle');
    const logo = document.querySelector('#logo-and-title');
    sidebar.classList.add('open');

    sidebarBtn.addEventListener('click', () => {
        if (sidebar.classList.contains('open')) {   
            /* close sidebar */   
            sidebar.classList.replace('open', 'close');
            logo.style.position = 'relative';
            logo.style.top = '2rem';
            logo.style.left = '4rem';
        } else {
            /* open sidebar */
            sidebar.classList.replace('close', 'open');
            logo.style.position = 'relative';
            logo.style.top = '2rem';
            logo.style.left = '1rem';
        }
    })
}




