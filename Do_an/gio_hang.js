// Thêm, bớt sản phẩm
let btnAdd = document.querySelector("#add");
let btnMinus = document.querySelector("#minus");
let totalProduct = document.getElementById("total-products");

btnAdd.addEventListener("click", function () {
  totalProduct.innerText = Number(totalProduct.innerText) + 1;
});

btnMinus.addEventListener("click", function () {
  if (Number(totalProduct.innerText) > 1) {
    totalProduct.innerText = Number(totalProduct.innerText) - 1;
  }
});

// Xóa sản phẩm trong giỏ hàng
// let delEle = document.getElementById("detele");
// let productsCartEle = document.querySelector(".products-cart");

// delEle.addEventListener("click", function () {
//   productsCartEle.classList.add("display-none");
// });



const productsCartItem = document.querySelector(".products-cart");
let productsInCart = [];

function renderTodo(arr) {
  //Xóa hết dữ liệu hiện có để thêm dữ liệu mới
  productsCartItem.innerHTML = "";

  //Danh sách công việc trống
  if (arr.length == 0) {
    productsCartItem.innerHTML = "Không có công việc nào trong danh sách";
    return;
  }

  //Hiển thị danh sách công việc ra ngoài giao diện
  let content = "";
  for (let i = 0; i < arr.length; i++) {
    const t = arr[i];
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
            <button id="minus">
              <i class="fa-solid fa-minus"></i>
            </button>
            <span id="total-products"></span>
            <button id="add">
              <i class="fa-solid fa-plus">${t.count}</i>
            </button>
          </div>
        </div>  
        <p id="detele" onclick="deleteTodo(${t.id})">Xóa</p>
      </div>
      <div class="cart-item-price">
        <p>${t.price}đ</p>
      </div>
    </div>
  </div>
    `;
  }

  //Chèn dữ liệu mới để hiển thị
  productsCartItem.innerHTML = content;
}

renderTodo(productsInCart);


function deleteTodo(id) {
  for (let i = 0; i < productsInCart.length; i++) {
    if (productsInCart[i].id == id) {
      productsInCart.splice(i, 1);
    }
  }
  renderTodo(productsInCart);
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
