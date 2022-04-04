//Sự kiện tắt mở mục đăng nhập
const dangNhap = document.getElementById("login");
const loginPage = document.querySelector(".login");
const loginClose = document.querySelector(".close");
const loginSubmit = document.querySelector("login-submit");
// const nextReg = document.getElementsByClassName("next_reg");
// const nextLog = document.getElementsByClassName("next_log");
// const loginEle = document.querySelector(".login-content");
// const regEle = document.querySelector(".registration-content");
const fixedMenu = document.querySelector(".header-menu");
const backTop = document.querySelector(".back_top");

dangNhap.addEventListener("click", function () {
  loginPage.classList.remove("display-none");
});

loginClose.addEventListener("click", function () {
  loginPage.classList.add("display-none");
});

window.addEventListener('scroll', (e) => {
  if(window.scrollY >= 35) {
    fixedMenu.classList.add("fixed-menu");
  } else {
    fixedMenu.classList.remove("fixed-menu")
  }
})

window.addEventListener('scroll', (e) => {
  if(window.scrollY < 1200) {
    backTop.classList.add("display-none");
  } else {
    backTop.classList.remove("display-none");
  }
})