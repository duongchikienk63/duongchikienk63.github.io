const bgColorHeader = document.querySelector(".header");
const colorText = document.querySelector(".color1");
const colorText1 = document.querySelector(".color2");
const colorText2 = document.querySelector(".color3");
const colorText3 = document.querySelector(".color4");
const colorText4 = document.querySelector(".color5");
const colorText5 = document.querySelector(".color6");

const iconBars = document.querySelector("#menu_mb");
const menuBars = document.querySelector(".header-menu-mb");


iconBars.addEventListener('click', (e) => {
  if(menuBars.style.display == "none") {
    menuBars.style.display = "block"
  } else {
    menuBars.style.display = "none"
  }
})

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 780) {
    // colorText.style.color = "black";
    // colorText1.style.color = "black";
    // colorText2.style.color = "black";
    // colorText3.style.color = "black";
    // colorText4.style.color = "black";
    // colorText5.style.color = "black";
    bgColorHeader.style.backgroundColor = "white";
    bgColorHeader.style.borderColor =
      "transparent transparent black transparent";
    console.log(1);
  } else {
    // colorText.style.color  = "white";
    // colorText1.style.color  = "white";
    // colorText2.style.color  = "white";
    // colorText3.style.color  = "white";
    // colorText4.style.color  = "white";
    // colorText5.style.color  = "white";
    bgColorHeader.style.backgroundColor = "transparent";
    bgColorHeader.style.borderColor = "transparent";
    console.log(2);
  }
});
