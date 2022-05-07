//Sự kiện tắt mở mục đăng nhập
const dangNhap = document.getElementById("login");
const loginPage = document.querySelector(".login");
const loginPageMb = document.querySelector(".login-mb-menu");
const loginClose = document.querySelector(".close");
const loginCloseMb = document.querySelector(".close-mb");
const nextReg = document.getElementById("next-reg");
const nextRegAccuracy = document.getElementById("next-reg-accuracy");
const nextRegAccuracyMb = document.getElementById("next-reg-accuracy-mb");
const nextLog = document.getElementById("next-log");
const nextRegMb = document.getElementById("next-reg-mb");
const nextLogMb = document.getElementById("next-log-mb");
const loginEle = document.querySelector(".login-user");
const accuracyEle = document.querySelector(".accuracy");
const accuracyEleMb = document.querySelector(".accuracy-mb");
const regEle = document.querySelector(".registration-content");
const loginEleMb = document.querySelector(".login-user-mb");
const regEleMb = document.querySelector(".registration-content-mb");
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

const loginMobileBtn = document.querySelector("#login-mb");
const loginMobile = document.querySelector(".login-mb");
const fixMenuMobile = document.querySelector(".offcanvas-start");

loginMobileBtn.addEventListener("click", function () {
  loginMobile.classList.remove("display-none");
  // loginPageMb.classList.remove("display-none");
  fixMenuMobile.style.width = "100%";
});

loginCloseMb.addEventListener("click", function () {
  fixMenuMobile.style.width = "80%";
  loginMobile.classList.add("display-none");
});

nextReg.addEventListener("click", function () {
  loginEle.classList.add("display-none");
  regEle.classList.remove("display-none");
  accuracyEle.classList.add("display-none");
});

nextRegAccuracy.addEventListener("click", function () {
  loginEle.classList.add("display-none");
  accuracyEle.classList.add("display-none");
  regEle.classList.remove("display-none");
});

nextLog.addEventListener("click", function () {
  regEle.classList.add("display-none");
  loginEle.classList.remove("display-none");
  accuracyEle.classList.add("display-none");
});

nextRegMb.addEventListener("click", function () {
  loginEleMb.classList.add("display-none");
  regEleMb.classList.remove("display-none");
  accuracyEleMb.classList.add("display-none");
});

nextRegAccuracyMb.addEventListener("click", function () {
  loginEleMb.classList.add("display-none");
  accuracyEleMb.classList.add("display-none");
  regEleMb.classList.remove("display-none");
});

nextLogMb.addEventListener("click", function () {
  regEleMb.classList.add("display-none");
  loginEleMb.classList.remove("display-none");
  accuracyEleMb.classList.add("display-none");
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

// const phoneUser = document.querySelector("#phone-user").value;

// function checkInput() {
//   if (isNaN(phoneUser)) {
//     alert("hợp lệ");
//   } else {
//     alert("Không hợp lệ");
//   }
// }

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

clickSp.addEventListener("click", function () {
  indexMenu.classList.add("display-none");
  // thMenu.classList.add("display-none");
  spMenu.classList.remove("display-none");
  pkMenu.classList.add("display-none");
  bstMenu.classList.add("display-none");
  offcanvasExampleLabel.innerText = "SẢN PHẨM";
});

// clickTh.addEventListener("click", function () {
//   indexMenu.classList.add("display-none");
//   thMenu.classList.remove("display-none");
//   spMenu.classList.add("display-none");
//   pkMenu.classList.add("display-none");
//   bstMenu.classList.add("display-none");
//   offcanvasExampleLabel.innerText = "THƯƠNG HIỆU";
// });

clickPk.addEventListener("click", function () {
  indexMenu.classList.add("display-none");
  // thMenu.classList.add("display-none");
  spMenu.classList.add("display-none");
  pkMenu.classList.remove("display-none");
  bstMenu.classList.add("display-none");
  offcanvasExampleLabel.innerText = "PHỤ KIỆN";
});

clickBst.addEventListener("click", function () {
  indexMenu.classList.add("display-none");
  // thMenu.classList.add("display-none");
  spMenu.classList.add("display-none");
  pkMenu.classList.add("display-none");
  bstMenu.classList.remove("display-none");
  offcanvasExampleLabel.innerText = "BỘ SƯU TẬP";
});

// backHomeTh.addEventListener("click", function() {
//   indexMenu.classList.remove("display-none");
//   thMenu.classList.add("display-none");
//   spMenu.classList.add("display-none");
//   pkMenu.classList.add("display-none");
//   bstMenu.classList.add("display-none");
//   offcanvasExampleLabel.innerText = "TRANG CHỦ";
// })

backHomeSp.addEventListener("click", function () {
  indexMenu.classList.remove("display-none");
  // thMenu.classList.add("display-none");
  spMenu.classList.add("display-none");
  pkMenu.classList.add("display-none");
  bstMenu.classList.add("display-none");
  offcanvasExampleLabel.innerText = "TRANG CHỦ";
});

backHomePk.addEventListener("click", function () {
  indexMenu.classList.remove("display-none");
  // thMenu.classList.add("display-none");
  spMenu.classList.add("display-none");
  pkMenu.classList.add("display-none");
  bstMenu.classList.add("display-none");
  offcanvasExampleLabel.innerText = "TRANG CHỦ";
});

backHomeBst.addEventListener("click", function () {
  indexMenu.classList.remove("display-none");
  // thMenu.classList.add("display-none");
  spMenu.classList.add("display-none");
  pkMenu.classList.add("display-none");
  bstMenu.classList.add("display-none");
  offcanvasExampleLabel.innerText = "TRANG CHỦ";
});

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

const phoneUserLogin = document.querySelector("#phone-user-login");
const phoneUserLoginMb = document.querySelector("#phone-user-login-mb");
const nameUserRegist = document.querySelector("#name-user-registration");
const phoneUserRegist = document.querySelector("#phone-user-registration");
const emailUserRegist = document.querySelector("#email-user-registration");
const nameUserRegistMb = document.querySelector("#name-user-registration-mb");
const phoneUserRegistMb = document.querySelector("#phone-user-registration-mb");
const emailUserRegistMb = document.querySelector("#email-user-registration-mb");
const accuracyUser = document.querySelector("#accuracy-user");
const userActive = document.querySelector("#user-active");

function isNum(number) {
  return /^[0-9]*$/.test(number);
}

function removeAscent (str) {
  if (str === null || str === undefined) return str;
   str = str.toLowerCase();
   str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
   str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
   str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
   str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
   str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
   str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
   str = str.replace(/đ/g, "d");
   return str;
}

function isText(name) {
  return /^[a-zA-Z ]{2,}$/g.test(removeAscent(name));
}

function checkInputLogin() {
  phoneUserLoginValue = phoneUserLogin.value;

  if (!isNum(phoneUserLoginValue)) {
    alert("Số điện thoại bạn nhập chưa đúng");
  } else if (phoneUserLoginValue.length != 10) {
    alert("Số điện thoại bạn nhập chưa đúng");
  } else if (phoneUserLoginValue[0] != 0) {
    alert("Số điện thoại bạn nhập chưa đúng");
  } else {
    loginEle.classList.add("display-none");
    accuracyEle.classList.remove("display-none");
  }
}

function checkInputLoginMb() {
  phoneUserLoginMbValue = phoneUserLoginMb.value;

  if (!isNum(phoneUserLoginMbValue)) {
    alert("Số điện thoại bạn nhập chưa đúng");
  } else if (phoneUserLoginMbValue.length != 10) {
    alert("Số điện thoại bạn nhập chưa đúng");
  } else if (phoneUserLoginMbValue[0] != 0) {
    alert("Số điện thoại bạn nhập chưa đúng");
  } else {
    loginEleMb.classList.add("display-none");
    accuracyEleMb.classList.remove("display-none");
  }
}

function checkInputRegist() {
  phoneUserRegistValue = phoneUserRegist.value;
  nameUserRegistValue = nameUserRegist.value;
  emailUserRegistValue = emailUserRegist.value;

  if (nameUserRegistValue == "") {
    alert("Tên khách hàng không được để trống");
  } else if (!isText(nameUserRegistValue)) {
    alert("Tên khách hàng bạn nhập chưa đúng");
  } else if (!isNum(phoneUserRegistValue)) {
    alert("Số điện thoại bạn nhập chưa đúng");
  } else if (phoneUserRegistValue.length != 10) {
    alert("Số điện thoại bạn nhập chưa đúng");
  } else if (phoneUserRegistValue[0] != 0) {
    alert("Số điện thoại bạn nhập chưa đúng");
  } else if (emailUserRegistValue == "") {
    alert("email không được để trống");
  } else {
    loginEle.classList.remove("display-none");
    accuracyEle.classList.add("display-none");
    regEle.classList.add("display-none");
    alert("Đăng ký thành công mời bạn đăng nhập");
  }
}

function checkInputRegistMb() {
  phoneUserRegistMbValue = phoneUserRegistMb.value;
  nameUserRegistMbValue = nameUserRegistMb.value;
  emailUserRegistMbValue = emailUserRegistMb.value;

  if (nameUserRegistMbValue == "") {
    alert("Tên khách hàng không được để trống");
  } else if (!isText(nameUserRegistValue)) {
    alert("Tên khách hàng bạn nhập chưa đúng");
  } else if (!isNum(phoneUserRegistMbValue)) {
    alert("Số điện thoại bạn nhập chưa đúng");
  } else if (phoneUserRegistMbValue.length != 10) {
    alert("Số điện thoại bạn nhập chưa đúng");
  } else if (phoneUserRegistMbValue[0] != 0) {
    alert("Số điện thoại bạn nhập chưa đúng");
  } else if (emailUserRegistMbValue == "") {
    alert("email không được để trống");
  } else {
    loginEleMb.classList.remove("display-none");
    accuracyEleMb.classList.add("display-none");
    regEleMb.classList.add("display-none");
    alert("Đăng ký thành công mời bạn đăng nhập");
  }
}

function accuracy() {
  userActive.classList.add("display-none");
  dangNhap.innerHTML = "Hi, Dương Chí Kiên"
}
