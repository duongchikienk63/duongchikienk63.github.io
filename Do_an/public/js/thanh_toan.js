let productsInCart = [];
const paymentList = document.querySelector(".payment-list");
const order = document.querySelector("#order");
const totalItems = document.querySelector(".total-item");
const totalItemsMobile = document.querySelector(".total-item-mb");

function renderProducts(arr) {
  //Xóa hết dữ liệu hiện có để thêm dữ liệu mới
  paymentList.innerHTML = "";

  //Danh sách giỏ trống
  if (arr.length == 0) {
    paymentList.innerHTML = "Bạn chưa có sản phẩm nào để thanh toán";
    return;
  }

  //Hiển thị danh sách công việc ra ngoài giao diện
  let content = "";
  for (let i = 0; i < arr.length; i++) {
    const t = arr[i];
    const VNDD = t.price.toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    });
    content += `               
    <div class="confirm-product">
    <div class="confirm-product_img">
      <img
        src="${t.image}"
        alt="anh"
      />
    </div>
    <div class="confirm-product-infor">
      <h3>${t.name}</h3>
      <p>Màu: ${t.type}</p>
      <p>Số lượng: ${t.count}</p>
    </div>
  </div>
  <div class="confirm-price">
  <p>${VNDD}</p>
  </div>
      `;
    order.innerHTML = "ĐƠN HÀNG " + `(${arr.length})`;
    totalItems.innerHTML = arr.length;
    totalItemsMobile.innerHTML = arr.length;
  }

  //Chèn dữ liệu mới để hiển thị
  paymentList.innerHTML = content;
  updateTotalProducts(productsInCart);
}
renderProducts(productsInCart);

const countListProdust = document.querySelector("#count-list-produst");
const countTotal = document.querySelector("#count-total");
const ship = document.querySelector("#ship");

function updateTotalProducts(arr) {
  let totalProducts = 0;
  let totalPriceProducts = 0;
  let freeShip = 0;
  for (let i = 0; i < arr.length; i++) {
    //Tính số lượng sản phẩm có trong giỏ
    totalProducts += arr[i].count;

    //Tính giá tiền bằng số lượng sản phẩm * giá tiền
    totalPriceProducts += arr[i].count * arr[i].price;

    countListProdust.innerHTML = totalPriceProducts.toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    });

    if (totalPriceProducts > 500000) {
      ship.innerHTML = freeShip.toLocaleString("vi", {
        style: "currency",
        currency: "VND",
      });
      countTotal.innerHTML = totalPriceProducts.toLocaleString("vi", {
        style: "currency",
        currency: "VND",
      });
    } else {
      ship.innerHTML = (freeShip + 30000).toLocaleString("vi", {
        style: "currency",
        currency: "VND",
      });
      countTotal.innerHTML = (totalPriceProducts + 30000).toLocaleString("vi", {
        style: "currency",
        currency: "VND",
      });
    }

    //Hiển thị số lượng sản phẩm có trong giỏ hàng lên trên góc bên phải
  }
  order.innerHTML = "GIỎ HÀNG CỦA BẠN " + `(${totalProducts})`;
  totalItems.innerHTML = totalProducts;
  totalItemsMobile.innerHTML = totalProducts;
  countListProdust.innerHTML = totalPriceProducts.toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  });
}
updateTotalProducts(productsInCart);

let promotionCode = [
  {
    code: 10,
  },
  {
    code: 20,
  },
  {
    code: 50,
  },
  {
    code: 100,
  },
];

let inputPromotion = document.querySelector("#promo-code");
let btnPromotion = document.querySelector(".voucher button");
let discount = document.querySelector("#vat");

//Viết function duyệt qua mảng promotionCode
function updateTotalMoney(arrs) {
  //Lấy ra giá trị người dùng nhập vào trong ô input
  let valueipts = inputPromotion.value;
  for (let i = 0; i < arrs.length; i++) {
    //Kiểm tra giá trị nhập vào có đúng là mã giảm giá
    if (valueipts == arrs[i].code) {
      //Viết function duyệt qua mảng products
      function updateTotalProductss(arr) {
        let totalProductss = 0;
        let totalPriceProductss = 0;
        for (let j = 0; j < arr.length; j++) {
          totalProductss += arr[j].count;

          totalPriceProductss += arr[j].count * arr[j].price;
        }

        //Tính số tiền được giảm và hiển thị ra ngoài giao diện
        discount.innerHTML = `${(
          totalPriceProductss *
          (arrs[i].code / 100)
        ).toLocaleString("vi", { style: "currency", currency: "VND" })}`;

        //Cập nhật lại tổng số tiền cuối cùng sau khi có mã giảm giá
        countTotal.innerHTML = (
          totalPriceProductss -
          totalPriceProductss * (arrs[i].code / 100)
        ).toLocaleString("vi", { style: "currency", currency: "VND" });
      }
      updateTotalProductss(productsInCart);
      return;
    }
  }
  updateTotalProducts(productsInCart);
  alert("Mã giảm giá bạn nhập chưa chính xác!");
}

btnPromotion.addEventListener("click", function () {
  updateTotalMoney(promotionCode);
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
  renderProducts(productsInCart);
}

//Sự kiện xảy ra khi web load hết html css thì gọi vào function
window.onload = getDataForomLocalStorage;

const numberPhoneUser = document.querySelector("#number-phone-user");
const NameUserTT = document.querySelector("#name-user-tt");

function isNum(number) {
  return /^[0-9]*$/.test(number);
}

function isText(name) {
  return /^[a-zA-Z ]{2,}$/g.test(removeAscent(name));
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

function checkValidate(e) {
  e.preventDefault();
  numberPhoneUserValue = numberPhoneUser.value;
  NameUserTTValue = NameUserTT.value;
  if (NameUserTTValue == "") {
    alert("Bạn chưa nhập tên người nhận");
  }else if (!isText(NameUserTTValue)) {
    alert("Họ và tên bạn nhập chưa đúng");
  } else if (numberPhoneUserValue == "") {
    alert("Bạn chưa nhập số điện thoại");
  } else if (!isNum(numberPhoneUserValue)) {
    alert("Số điện thoại bạn nhập chưa đúng");
  } else if (numberPhoneUserValue.length != 10) {
    alert("Số điện thoại bạn nhập chưa đúng");
  } else if (numberPhoneUserValue[0] != 0) {
    alert("Số điện thoại bạn nhập chưa đúng");
  }else {
    window.location.href = "./index.html";
    alert("Cảm ơn quý khách đã tin tưởng đặt hàng")
  }

}
