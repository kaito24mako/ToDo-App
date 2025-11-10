export function toggleSidebar() {
    const sidebar = document.querySelector('#sidebar-container');
    const sidebarBtn = document.querySelector('#sidebarBtn');
    const logo = document.querySelector('#logo');
    sidebar.classList.add('open');

    sidebarBtn.addEventListener('click', () => {
        if (sidebar.classList.contains('open')) {   
            /* close sidebar */   
            sidebar.classList.replace('open', 'close');
            logo.style.left = '4rem';
        } else {
            /* open sidebar */
            sidebar.classList.replace('close', 'open');
            logo.style.left = '19.5rem';
        }
    })
}




