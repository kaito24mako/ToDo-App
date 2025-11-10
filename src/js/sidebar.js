export function toggleSidebar() {
    const sidebar = document.querySelector('#sidebar-container');
    const sidebarBtn = document.querySelector('#sidebarToggle');
    sidebar.classList.add('open');

    sidebarBtn.addEventListener('click', () => {
        sidebar.classList.contains('open') 
        ? sidebar.classList.replace('open', 'close')
        : sidebar.classList.replace('close', 'open')
    })
}




