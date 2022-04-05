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
const backTop = document.querySelector(".back_top");

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
  } else {
    fixedMenu.classList.remove("fixed-menu");
  }
});

window.addEventListener("scroll", (e) => {
  if (window.scrollY < 1200) {
    backTop.classList.add("display-none");
  } else {
    backTop.classList.remove("display-none");
  }
});

// Thêm, bớt sản phẩm
let btnAdd = document.querySelector("#add");
let btnMinus = document.querySelector("#minus");
let totalProduct = document.getElementById("total-products");

btnAdd.addEventListener("click", function () {
  totalProduct.innerText = Number(totalProduct.innerText) + 1;
});

btnMinus.addEventListener("click", function () {
  if ( Number(totalProduct.innerText) > 1) {
    totalProduct.innerText = Number(totalProduct.innerText) - 1;
  }
});

// Xóa sản phẩm trong giỏ hàng
let delEle = document.getElementById("detele");
let productsCartEle = document.querySelector(".products-cart");

delEle.addEventListener("click", function() {
  productsCartEle.classList.add("display-none");
})
