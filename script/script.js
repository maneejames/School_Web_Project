const toggleBtn = document.querySelector(".toggle-btn")
const toggleBtnIcon = document.querySelector(".toggle-btn i")
const sideBarMenu = document.querySelector(".sidebar-menu")

toggleBtn.onclick = function () {
        sideBarMenu.classList.toggle("open")
        const isOpen = sideBarMenu.classList.contains("open")

        toggleBtnIcon.classList = isOpen
        ? "fa-solid fa-x"
        : "fa-solid fa-bars"
}