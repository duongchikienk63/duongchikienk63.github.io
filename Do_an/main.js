//Sự kiện tắt mở mục đăng nhập
const dangNhap = document.getElementById("login");
const loginPage = document.querySelector(".login");
const loginClose = document.querySelector(".close");
const loginSubmit = document.querySelector("login-submit");
const nextReg = document.getElementById("next-reg");
const nextLog = document.getElementById("next-log");
const loginEle = document.querySelector(".login-content");
const regEle = document.querySelector(".registration-content");
const fixedMenu = document.querySelector(".header-menu");
const fixedMenuMB = document.querySelector(".header-menu-moblie");
const backTop = document.querySelector(".back_top");
const menuMB = document.getElementById("menu-mobile");
const menuMbList = document.getElementById("menu-list-moblie");

dangNhap.addEventListener("click", function () {
  loginPage.classList.remove("display-none");
});

loginClose.addEventListener("click", function () {
  loginPage.classList.add("display-none");
});

nextReg.addEventListener("click", function () {
  loginEle.classList.add("display-none");
  regEle.classList.remove("display-none");
});

nextLog.addEventListener("click", function () {
  regEle.classList.add("display-none");
  loginEle.classList.remove("display-none");
});

// Sự kiện cuộn màn hình
window.addEventListener("scroll", (e) => {
  if (window.scrollY >= 35) {
    fixedMenu.classList.add("fixed-menu");
    fixedMenuMB.classList.add("fixed-menu");
  } else {
    fixedMenu.classList.remove("fixed-menu");
    fixedMenuMB.classList.remove("fixed-menu");
  }
});

window.addEventListener("scroll", (e) => {
  if (window.scrollY < 1200) {
    backTop.classList.add("display-none");
  } else {
    backTop.classList.remove("display-none");
  }
});

const phoneUser = document.querySelector("#phone-user");
const btnLogin = document.querySelector(".login-submit");

// btnLogin.addEventListener("click", function() {
//   if(phoneUser.value == "") {
//     alert("Thông tin tài khoản chưa chính xác");
//   } else {
//     loginEle.classList.add("display-none");
//   }
// })

const downTh = document.getElementById("down-th");
const upTh = document.getElementById("up-th");
const thList = document.querySelector("#thuong_hieu");
const downCs = document.getElementById("down-cs");
const upCs = document.getElementById("up-cs");
const csList = document.querySelector("#chinh_sach");
const downTv = document.getElementById("down-tv");
const upTv = document.getElementById("up-tv");
const tvList = document.querySelector("#tu_van");

//Đóng mở mục thương hiệu
downTh.addEventListener("click", function () {
  thList.classList.add("display-block");
  upTh.classList.remove("display-none");
  downTh.classList.add("display-none");
});

upTh.addEventListener("click", function () {
  thList.classList.remove("display-block");
  downTh.classList.remove("display-none");
  upTh.classList.add("display-none");
});

//Đóng mở mục chính sách
downCs.addEventListener("click", function () {
  csList.classList.add("display-block");
  upCs.classList.remove("display-none");
  downCs.classList.add("display-none");
});

upCs.addEventListener("click", function () {
  csList.classList.remove("display-block");
  downCs.classList.remove("display-none");
  upCs.classList.add("display-none");
});

//Đóng mở mục tư vấn
downTv.addEventListener("click", function () {
  tvList.classList.add("display-block");
  upTv.classList.remove("display-none");
  downTv.classList.add("display-none");
});

upTv.addEventListener("click", function () {
  tvList.classList.remove("display-block");
  downTv.classList.remove("display-none");
  upTv.classList.add("display-none");
});

