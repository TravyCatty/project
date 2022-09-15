let showBtn = document.querySelector('.show-sidebar')
let sidebar = document.querySelector('.sidebar')

showBtn.onclick = () => {
    sidebar.classList.toggle('active')
}