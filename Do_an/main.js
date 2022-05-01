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

const clickTh = document.querySelector("#click-th");
const clickSp = document.querySelector("#click-sp");
const clickPk = document.querySelector("#click-pk");
const clickBst = document.querySelector("#click-bst");
const indexMenu = document.querySelector(".index-menu");
const thMenu = document.querySelector(".th-menu");
const spMenu = document.querySelector(".sp-menu");
const pkMenu = document.querySelector(".pk-menu");
const bstMenu = document.querySelector(".bst-menu");
const offcanvasExampleLabel = document.querySelector("#offcanvasExampleLabel");
const backHomeTh = document.querySelector(".back-home-th");
const backHomeSp = document.querySelector(".back-home-sp");
const backHomePk = document.querySelector(".back-home-pk");
const backHomeBst = document.querySelector(".back-home-bst");

clickSp.addEventListener("click", function() {
  indexMenu.classList.add("display-none");
  thMenu.classList.add("display-none");
  spMenu.classList.remove("display-none");
  pkMenu.classList.add("display-none");
  bstMenu.classList.add("display-none");
  offcanvasExampleLabel.innerText = "SẢN PHẨM";
})

clickTh.addEventListener("click", function() {
  indexMenu.classList.add("display-none");
  thMenu.classList.remove("display-none");
  spMenu.classList.add("display-none");
  pkMenu.classList.add("display-none");
  bstMenu.classList.add("display-none");
  offcanvasExampleLabel.innerText = "THƯƠNG HIỆU";
})

clickPk.addEventListener("click", function() {
  indexMenu.classList.add("display-none");
  thMenu.classList.add("display-none");
  spMenu.classList.add("display-none");
  pkMenu.classList.remove("display-none");
  bstMenu.classList.add("display-none");
  offcanvasExampleLabel.innerText = "PHỤ KIỆN";
})

clickBst.addEventListener("click", function() {
  indexMenu.classList.add("display-none");
  thMenu.classList.add("display-none");
  spMenu.classList.add("display-none");
  pkMenu.classList.add("display-none");
  bstMenu.classList.remove("display-none");
  offcanvasExampleLabel.innerText = "BỘ SƯU TẬP";
})

backHomeTh.addEventListener("click", function() {
  indexMenu.classList.remove("display-none");
  thMenu.classList.add("display-none");
  spMenu.classList.add("display-none");
  pkMenu.classList.add("display-none");
  bstMenu.classList.add("display-none");
  offcanvasExampleLabel.innerText = "TRANG CHỦ";
})

backHomeSp.addEventListener("click", function() {
  indexMenu.classList.remove("display-none");
  thMenu.classList.add("display-none");
  spMenu.classList.add("display-none");
  pkMenu.classList.add("display-none");
  bstMenu.classList.add("display-none");
  offcanvasExampleLabel.innerText = "TRANG CHỦ";
})

backHomePk.addEventListener("click", function() {
  indexMenu.classList.remove("display-none");
  thMenu.classList.add("display-none");
  spMenu.classList.add("display-none");
  pkMenu.classList.add("display-none");
  bstMenu.classList.add("display-none");
  offcanvasExampleLabel.innerText = "TRANG CHỦ";
})

backHomeBst.addEventListener("click", function() {
  indexMenu.classList.remove("display-none");
  thMenu.classList.add("display-none");
  spMenu.classList.add("display-none");
  pkMenu.classList.add("display-none");
  bstMenu.classList.add("display-none");
  offcanvasExampleLabel.innerText = "TRANG CHỦ";
})


// let productsInCart = [];

// const totalItems = document.querySelector(".total-item");
// function renderTodos(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     const t = arr[i];
//     totalItems.innerHTML = `${arr.length}`;
//   }
// }
// renderTodos(productsInCart);


function setLocalStorage() {
  localStorage.setItem("productsInCart", JSON.stringify(productsInCart));
}

//Lấy dữ liệu từ localStorage
function getDataForomLocalStorage() {
  //Lấy data thông qua key "todos"
  let todosLocal = localStorage.getItem("productsInCart");

  //Nếu có data trong localStorage thì parse, ko thì để arr rỗng
  if (todosLocal) {
    productsInCart = JSON.parse(todosLocal);
  } else {
    productsInCart = [];
  } 
  renderTodos(productsInCart);
}

//Sự kiện xảy ra khi web load hết html css thì gọi vào function
window.onload = getDataForomLocalStorage;