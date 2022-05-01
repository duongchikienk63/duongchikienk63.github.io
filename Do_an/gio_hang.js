const productsCartItem = document.querySelector(".products-cart");
let productsInCart = [];

// function getUnique(arr, comp) {

//   const unique = arr
//   .map(e => e[comp])

//   // store the keys of the unique objects
//   .map((e, i, final) => final.indexOf(e) === i && i)

//   // eliminate the dead keys & store unique objects
//   .filter(e => arr[e]).map(e => arr[e]);
//   setLocalStorage();
//   return unique;
//  }

//  getUnique(productsInCart,'id')

let subtotalEl = document.querySelector(".subtotal");
let totalCount = document.querySelector(".count");
const totalItems = document.querySelector(".total-item");

function renderTodo(arr) {
  //Xóa hết dữ liệu hiện có để thêm dữ liệu mới
  productsCartItem.innerHTML = "";

  //Danh sách công việc trống
  if (arr.length == 0) {
    productsCartItem.innerHTML = "Không có sản phẩm nào trong giỏ hàng";
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
    <div class="produts-cart-item">
    <div class="cart-item-img">
      <img
        src=${t.image}
        alt="anh sp"
      />
    </div>
    <div class="cart-item-infor">
      <div class="cart-item-total">
        <h3>${t.name}</h3>
        <p>${t.type} / XL</p>
        <div class="total_product">
          <div class="number_product">
            <button id="minus" onclick="changeTotalProductMinus(${t.id})">
              <i class="fa-solid fa-minus"></i>
            </button>
            <span id="total-products">${t.count}</span>
            <button id="add" onclick="changeTotalProduct(${t.id})">
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>  
        <p id="detele" onclick="deleteTodo(${t.id})">Xóa</p>
      </div>
      <div class="cart-item-price">
        <p>${VNDD}</p>
      </div>
    </div>
  </div>
    `;
    totalCount.innerHTML = "GIỎ HÀNG CỦA BẠN " + `(${arr.length})`;
    totalItems.innerHTML = arr.length;
  }

  //Chèn dữ liệu mới để hiển thị
  productsCartItem.innerHTML = content;
  updateTotalProducts(productsInCart);
}
renderTodo(productsInCart);

const payTotal = document.querySelector("#pay-total");

function updateTotalProducts(arr) {
  let totalProducts = 0;
  let totalPriceProducts = 0;
  for (let i = 0; i < arr.length; i++) {
    //Tính số lượng sản phẩm có trong giỏ
    totalProducts += arr[i].count;

    //Tính giá tiền bằng số lượng sản phẩm * giá tiền
    totalPriceProducts += arr[i].count * arr[i].price;

    payTotal.innerHTML = totalPriceProducts.toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    });

    //Hiển thị số lượng sản phẩm có trong giỏ hàng lên trên góc bên phải
  }
  totalCount.innerHTML = "GIỎ HÀNG CỦA BẠN " + `(${totalProducts})`;
  totalItems.innerHTML = totalProducts;
  payTotal.innerHTML = totalPriceProducts.toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  });
}
updateTotalProducts(productsInCart);

function deleteTodo(id) {
  for (let i = 0; i < productsInCart.length; i++) {
    if (productsInCart[i].id == id) {
      productsInCart.splice(i, 1);
      totalCount.innerHTML = "GIỎ HÀNG CỦA BẠN " + `(${productsInCart.length})`;
    }
  }
  updateTotalProducts(productsInCart);
  renderTodo(productsInCart);
  setLocalStorage();
}

function changeTotalProduct(id) {
  for (let i = 0; i < productsInCart.length; i++) {
    if (productsInCart[i].id == id) {
      productsInCart[i].count += 1;
    }
  }
  renderTodo(productsInCart);
  updateTotalProducts(productsInCart);
  setLocalStorage();
}

function changeTotalProductMinus(id) {
  for (let i = 0; i < productsInCart.length; i++) {
    if ((productsInCart[i].id == id) & (productsInCart[i].count > 1)) {
      productsInCart[i].count -= 1;
    }
  }
  renderTodo(productsInCart);
  updateTotalProducts(productsInCart);
  setLocalStorage();
}

function setLocalStorage() {
  localStorage.setItem("productsInCart", JSON.stringify(productsInCart));
}

// localStorage.setItem("lastname", JSON.stringify();
// JSON.parse(lastname)

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
  renderTodo(productsInCart);
}

//Sự kiện xảy ra khi web load hết html css thì gọi vào function
window.onload = getDataForomLocalStorage;
