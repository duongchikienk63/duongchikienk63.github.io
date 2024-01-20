let products = [
  {
    name: "Áo kiểu nữ cam đất phối cổ trắng dập ly",
    price: 250000,
    description: "bla bla",
    image:
      "https://product.hstatic.net/1000406613/product/134598326_843943736438802_4583672680956729671_n_21c066c7bee9423294bd5d3ee02e9c64.jpg",
    count: 1,
    id: 0,
  },
  {
    name: "Áo kiểu nữ cam đất tay loe dễ thương",
    price: 350000,
    description: "bla bla",
    image: "https://muaonlinevn.com/wp-content/uploads/2021/03/1914666_L.jpg",
    count: 1,
    id: 1,
  },
  {
    name: "Áo trắng bèo lé đen tay loe dễ thương",
    price: 450000,
    description: "bla bla",
    image:
      "https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/p843x403/273764428_2239494646197495_1386422505213726153_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=5cd70e&_nc_ohc=j_eJgthxq8sAX_11i6s&_nc_ht=scontent.fhan3-3.fna&oh=00_AT9kDoEc3v1dI5SpzNooarnY2LbclAImODM34oZ8G2hsZg&oe=620A3FAC",
    count: 2,
    id: 2,
  },
];

const productsEl = document.querySelector(".products");
const subtotalEl = document.querySelector(".subtotal");
const vatEl = document.querySelector(".vat");
const totalEl = document.querySelector(".total");

//1. Hiển thị sản phẩm ra ngoài giao diện
function renderProducts(arr) {
  //Xóa giao diện cũ ban đầu demo
  productsEl.innerHTML = "";

  //Kiểm tra giỏ hàng nếu trống thì hiện thị thông báo
  if (arr.length == 0) {
    productsEl.innerHTML = "Không có sản phẩm nào trong giỏ hàng";
    return;
  }

  //Thêm sản phẩm và hiển thị giao diện mới
  let content = "";
  for (let i = 0; i < arr.length; i++) {
    const t = arr[i];
    content += `
    <li class="row">
    <div class="col left">
        <div class="thumbnail">
            <a href="#">
                <img src= ${t.image}  alt=${t.name}>
            </a>
        </div>
        <div class="detail">
            <div class="name"><a href="#">${t.name}</a></div>
            <div class="description">
            ${t.description}
            </div>
            <div class="price">${t.price}</div>
        </div>
    </div>

    <div class="col right">
        <div class="quantity">
            <input type="number" class="quantity" value=${t.count} onchange="changeTotalProduct(${t.id}, event)">
        </div>

        <div class="remove">
            <span class="close" onclick= "deleteProducts(${t.id})">
                <i class="fa fa-times" aria-hidden="true"></i>
            </span>
        </div>
    </div>
</li>
    `;
  }
  productsEl.innerHTML = content;
}

renderProducts(products);

//2. Chỉnh sửa số lượng sản phẩm hiển thị trên góc và tính tiền theo sản phẩm
function updateTotalProducts(arr) {
  let totalProducts = 0;
  let totalPriceProducts = 0;
  for (let i = 0; i < arr.length; i++) {
    //Tính số lượng sản phẩm có trong giỏ
    totalProducts += arr[i].count;

    //Tính giá tiền bằng số lượng sản phẩm * giá tiền
    totalPriceProducts += arr[i].count * arr[i].price;
  }

  //Hiển thị tổng số tiền ban đầu ra ngoài giao diện
  subtotalEl.innerHTML = `Subtotal <span> ${totalPriceProducts.toLocaleString(
    "vi",
    { style: "currency", currency: "VND" }
  )}</span>`;

  //Tính số tiền VAT dựa trên tổng số tiền ban đầu và hiển thị ra ngoài giao diện
  vatEl.innerHTML = `VAT<span> ${(totalPriceProducts * 0.05).toLocaleString(
    "vi",
    { style: "currency", currency: "VND" }
  )}</span>`;

  //Tính tổng số tiền cuối cùng và hiện thị ra ngoài giao diện
  totalEl.innerHTML = `Total <span> ${(
    totalPriceProducts +
    totalPriceProducts * 0.05
  ).toLocaleString("vi", { style: "currency", currency: "VND" })}</span>`;

  //Hiển thị số lượng sản phẩm có trong giỏ hàng lên trên góc bên phải
  let totalCount = document.querySelector(".count");
  totalCount.innerHTML = totalProducts + " items in the bag";
}

updateTotalProducts(products);

//3. Xóa sản phẩm
function deleteProducts(id) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id == id) {
      products.splice(i, 1);
    }
  }
  updateTotalProducts(products);
  renderProducts(products);
}

//4. Chỉnh sửa số lượng sản phẩm, kiểm tra qua id và qua biến e(event)
function changeTotalProduct(id, e) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id == id) {
      //Thay đổi số lượng sản phẩm bằng cách lấy giá trị target.value của biến e và đổi nó sang thành dạng số
      products[i].count = Number(e.target.value);
    }
  }
  renderProducts(products);
  updateTotalProducts(products);
}

//5. Mã giảm giá
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
let btnPromotion = document.querySelector(".promotion button");
let discount = document.querySelector(".discount");
let discountEle = document.querySelector(".discount span");
let subtotalCtn = document.querySelector(".subtotal span").innerHTML;

//Viết function duyệt qua mảng promotionCode
function updateTotalMoney(arrs) {
  //Lấy ra giá trị người dùng nhập vào trong ô input
  let valueipts = inputPromotion.value;
  for (let i = 0; i < arrs.length; i++) {
    //Kiểm tra giá trị nhập vào có đúng là mã giảm giá
    if (valueipts == arrs[i].code) {
      //Xóa đi class hide để hiện lên phần discount đã bị ẩn
      discount.classList.remove("hide");

      //Viết function duyệt qua mảng products giống phần 2
      function updateTotalProductss(arr) {
        let totalProductss = 0;
        let totalPriceProductss = 0;
        for (let j = 0; j < arr.length; j++) {
          totalProductss += arr[j].count;

          totalPriceProductss += arr[j].count * arr[j].price;
        }

        //Tính số tiền được giảm và hiển thị ra ngoài giao diện
        discountEle.innerHTML = `${(
          totalPriceProductss *
          (arrs[i].code / 100)
        ).toLocaleString("vi", { style: "currency", currency: "VND" })}`;

        //Cập nhật lại tổng số tiền cuối cùng sau khi có mã giảm giá
        totalEl.innerHTML = `Total <span> ${(
          totalPriceProductss +
          totalPriceProductss * 0.05 -
          totalPriceProductss * (arrs[i].code / 100)
        ).toLocaleString("vi", { style: "currency", currency: "VND" })}</span>`;
      }
      updateTotalProductss(products);
      return;
    }
  }
  discount.classList.add("hide");
  updateTotalProducts(products);
  alert("Mã giảm giá bạn nhập chưa chính xác!");
}

//Click vào nút btnPromotion thì chạy function updateTotalMoney
btnPromotion.addEventListener("click", function () {
  updateTotalMoney(promotionCode);
});


let xaaa = document.getElementsByClassName('price')

let u = 0;

for(let i = 0; i < xaaa.length; i++) {
  u += Number(xaaa[i].innerHTML)
}

