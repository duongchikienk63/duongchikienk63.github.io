const iconBars = document.querySelector("#menu_mb");
const menuBars = document.querySelector(".header-menu-mb");


iconBars.addEventListener('click', (e) => {
  if(menuBars.style.display == "none") {
    menuBars.style.display = "block"
  } else {
    menuBars.style.display = "none"
  }
})