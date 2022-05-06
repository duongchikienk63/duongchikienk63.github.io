let productsInCart = [];
const paymentList = document.querySelector(".payment-list");
const order = document.querySelector("#order");
const totalItems = document.querySelector(".total-item");
const totalItemsMobile = document.querySelector(".total-item-mb");

function renderProducts(arr) {
  //Xóa hết dữ liệu hiện có để thêm dữ liệu mới
  paymentList.innerHTML = "";

  //Danh sách công việc trống
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
const countTotals = document.querySelector("#count-total");

function updateTotalProducts(arr) {
  let totalProducts = 0;
  let totalPriceProducts = 0;
  for (let i = 0; i < arr.length; i++) {
    //Tính số lượng sản phẩm có trong giỏ
    totalProducts += arr[i].count;

    //Tính giá tiền bằng số lượng sản phẩm * giá tiền
    totalPriceProducts += arr[i].count * arr[i].price;

    countListProdust.innerHTML = totalPriceProducts.toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    });

    countTotals.innerHTML = (totalPriceProducts + 30000).toLocaleString("vi", {
        style: "currency",
        currency: "VND",
      });

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
