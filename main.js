const menuIcon = document.getElementById("menu-icon");
const nav = document.getElementById("nav");


nav.addEventListener('click', () => {
    menuIcon.classList.toggle("toggle")
    nav.classList.toggle("open");
})