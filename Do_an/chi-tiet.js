let locationWeb = window.location.href.split("=");
let idItem = locationWeb[1];

let products = [
  {
    name: "Quần jeans nam",
    price: 895000,
    image:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-11x900x900x4.jpg",
    image1:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-10x90x90x4.jpg",
    image2:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-08x90x90x4.jpg",
    image3:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-07x90x90x4.jpg",
    image4:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-09x90x90x4.jpg",
    image5:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-11x50x50x4.jpg",
    count: 1,
    id: 0,
    type: "Xám",
  },
  {
    name: "Áo sơ mi dài tay nam",
    price: 695000,
    image:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-dai-tay/als03502/ao-so-mi-nam-aristino-ALS03502-03x900x900x4.jpg",
    image1:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-dai-tay/als03502/ao-so-mi-nam-aristino-ALS03502-06x90x90x4.jpg",
    image2:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-dai-tay/als03502/ao-so-mi-nam-aristino-ALS03502-04x90x90x4.jpg",
    image3:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-dai-tay/als03502/ao-so-mi-nam-aristino-ALS03502-02x90x90x4.jpg",
    image4:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-dai-tay/als03502/ao-so-mi-nam-aristino-ALS03502-07x90x90x4.jpg",
    image5:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-dai-tay/als03502/ao-so-mi-nam-aristino-ALS03502-03x50x50x4.jpg",
    count: 1,
    id: 1,
    type: "Trắng",
  },
  {
    name: "Áo Polo Nam",
    price: 695000,
    image:
      "https://aristino.com/Data/ResizeImage/images/product/ao-polo/aps001s2/ao-polo-nam-APS001S2-03x500x500x4.jpg",
    image1:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-10x90x90x4.jpg",
    image2:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-08x90x90x4.jpg",
    image3:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-07x90x90x4.jpg",
    image4:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-09x90x90x4.jpg",
    image5:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-11x50x50x4.jpg",
    count: 1,
    id: 2,
    type: "Xám",
  },
  {
    name: "Áo Sơmi Ngắn Tay Nam",
    price: 695000,
    image:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-ngan-tay/ass212s2/ao-so-mi-nam-aristino-ASS212S2-02x500x500x4.jpg",
    image1:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-10x90x90x4.jpg",
    image2:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-08x90x90x4.jpg",
    image3:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-07x90x90x4.jpg",
    image4:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-09x90x90x4.jpg",
    image5:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-11x50x50x4.jpg",
    count: 1,
    id: 3,
    type: "Xám",
  },
  {
    name: "Quần Short Nam",
    price: 695000,
    image:
      "https://aristino.com/Data/ResizeImage/images/product/quan-short/aso052s2/quan-short-nam-aristino-ASO052S2-04x500x500x4.jpg",
    image1:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-10x90x90x4.jpg",
    image2:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-08x90x90x4.jpg",
    image3:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-07x90x90x4.jpg",
    image4:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-09x90x90x4.jpg",
    image5:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-11x50x50x4.jpg",
    count: 1,
    id: 4,
    type: "Xám",
  },
  {
    name: "Áo Polo Nam",
    price: 695000,
    image:
      "https://aristino.com/Data/ResizeImage/images/product/ao-polo/aps001s2/ao-polo-nam-APS001S2-03x500x500x4.jpg",
    image1:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-10x90x90x4.jpg",
    image2:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-08x90x90x4.jpg",
    image3:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-07x90x90x4.jpg",
    image4:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-09x90x90x4.jpg",
    image5:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-11x50x50x4.jpg",
    count: 1,
    id: 5,
    type: "Xám",
  },
  {
    name: "Áo Sơmi Ngắn Tay Nam",
    price: 695000,
    image:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-ngan-tay/ass212s2/ao-so-mi-nam-aristino-ASS212S2-02x500x500x4.jpg",
    image1:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-10x90x90x4.jpg",
    image2:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-08x90x90x4.jpg",
    image3:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-07x90x90x4.jpg",
    image4:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-09x90x90x4.jpg",
    image5:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-11x50x50x4.jpg",
    count: 1,
    id: 6,
    type: "Xám",
  },
  {
    name: "Quần Short Nam",
    price: 695000,
    image:
      "https://aristino.com/Data/ResizeImage/images/product/quan-short/aso052s2/quan-short-nam-aristino-ASO052S2-04x500x500x4.jpg",
    image1:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-10x90x90x4.jpg",
    image2:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-08x90x90x4.jpg",
    image3:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-07x90x90x4.jpg",
    image4:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-09x90x90x4.jpg",
    image5:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-11x50x50x4.jpg",
    count: 1,
    id: 7,
    type: "Xám",
  },
  {
    name: "Áo Polo Nam",
    price: 695000,
    image:
      "https://aristino.com/Data/ResizeImage/images/product/ao-polo/aps001s2/ao-polo-nam-APS001S2-03x500x500x4.jpg",
    image1:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-10x90x90x4.jpg",
    image2:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-08x90x90x4.jpg",
    image3:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-07x90x90x4.jpg",
    image4:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-09x90x90x4.jpg",
    image5:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-11x50x50x4.jpg",
    count: 1,
    id: 8,
    type: "Xám",
  },
  {
    name: "Áo Sơmi Ngắn Tay Nam",
    price: 695000,
    image:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-ngan-tay/ass212s2/ao-so-mi-nam-aristino-ASS212S2-02x500x500x4.jpg",
    image1:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-10x90x90x4.jpg",
    image2:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-08x90x90x4.jpg",
    image3:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-07x90x90x4.jpg",
    image4:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-09x90x90x4.jpg",
    image5:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-11x50x50x4.jpg",
    count: 1,
    id: 9,
    type: "Xám",
  },
  {
    name: "Quần Short Nam",
    price: 695000,
    image:
      "https://aristino.com/Data/ResizeImage/images/product/quan-short/aso052s2/quan-short-nam-aristino-ASO052S2-04x500x500x4.jpg",
    image1:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-10x90x90x4.jpg",
    image2:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-08x90x90x4.jpg",
    image3:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-07x90x90x4.jpg",
    image4:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-09x90x90x4.jpg",
    image5:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-11x50x50x4.jpg",
    count: 1,
    id: 10,
    type: "Xám",
  },
  {
    name: "Áo Polo Nam",
    price: 695000,
    image:
      "https://aristino.com/Data/ResizeImage/images/product/ao-polo/aps001s2/ao-polo-nam-APS001S2-03x500x500x4.jpg",
    image1:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-10x90x90x4.jpg",
    image2:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-08x90x90x4.jpg",
    image3:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-07x90x90x4.jpg",
    image4:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-09x90x90x4.jpg",
    image5:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-11x50x50x4.jpg",
    count: 1,
    id: 11,
    type: "Xám",
  },
  {
    name: "Áo Sơmi Ngắn Tay Nam",
    price: 695000,
    image:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-ngan-tay/ass212s2/ao-so-mi-nam-aristino-ASS212S2-02x500x500x4.jpg",
    image1:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-10x90x90x4.jpg",
    image2:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-08x90x90x4.jpg",
    image3:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-07x90x90x4.jpg",
    image4:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-09x90x90x4.jpg",
    image5:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-11x50x50x4.jpg",
    count: 1,
    id: 12,
    type: "Xám",
  },
  {
    name: "Quần Short Nam",
    price: 695000,
    image:
      "https://aristino.com/Data/ResizeImage/images/product/quan-short/aso052s2/quan-short-nam-aristino-ASO052S2-04x500x500x4.jpg",
    image1:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-10x90x90x4.jpg",
    image2:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-08x90x90x4.jpg",
    image3:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-07x90x90x4.jpg",
    image4:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-09x90x90x4.jpg",
    image5:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-11x50x50x4.jpg",
    count: 1,
    id: 13,
    type: "Xám",
  },
  {
    name: "Áo Polo Nam",
    price: 695000,
    image:
      "https://aristino.com/Data/ResizeImage/images/product/ao-polo/aps001s2/ao-polo-nam-APS001S2-03x500x500x4.jpg",
    image1:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-10x90x90x4.jpg",
    image2:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-08x90x90x4.jpg",
    image3:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-07x90x90x4.jpg",
    image4:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-09x90x90x4.jpg",
    image5:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-11x50x50x4.jpg",
    count: 1,
    id: 14,
    type: "Xám",
  },
  {
    name: "Áo Polo Nam",
    price: 695000,
    image:
      "https://aristino.com/Data/ResizeImage/images/product/ao-polo/aps001s2/ao-polo-nam-APS001S2-03x500x500x4.jpg",
    image1:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-10x90x90x4.jpg",
    image2:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-08x90x90x4.jpg",
    image3:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-07x90x90x4.jpg",
    image4:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-09x90x90x4.jpg",
    image5:
      "https://aristino.com/Data/ResizeImage/images/product/quan-jeans/ajnr02/quan-jean-nam-aristino-AJNR02-11x50x50x4.jpg",
    count: 1,
    id: 15,
    type: "Xám",
  },
];

const nameProduct = document.querySelector("#name-product");
const addItem = document.querySelector("#add_product");
function fixItem(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id == idItem) {
      const t = arr[i];
      nameProduct.innerHTML = `${t.name}`;
      addItem.innerHTML = `
        <div class="col-lg-8">
        <div class="img-group">
          <div class="img-list">
            <div class="img-list-item">
              <img
                src=${t.image}
                alt="anh"
              />
            </div>
            <div class="img-list-item">
              <img
                src="${t.image1}"
                alt="anh"
              />
            </div>
            <div class="img-list-item">
              <img
                src=${t.image2}
                alt="anh"
              />
            </div>
            <div class="img-list-item">
              <img
                src=${t.image3}
                alt="anh"
              />
            </div>
            <div class="img-list-item">
              <img
                src=${t.image4}
                alt="anh"
              />
            </div>
          </div>
          <div class="img-grow">
            <img
              src=${t.image}
              alt="anh"
            />
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <h1>${t.name}</h1>
        <p>${t.price}</p>
        <div class="option_product">
          <p>${t.type}</p>
          <img
            src=${t.image5}
            alt="anh"
          />
        </div>
        <div class="size_product">
          <p>Chọn Size <a href="#">(Hướng dẫn chọn size)</a></p>
          <ul>
            <li>S</li>
            <li>M</li>
            <li>L</li>
            <li>XL</li>
            <li>XXL</li>
          </ul>
        </div>
        <div class="total_product">
          <p>Số lượng</p>
          <div class="number_product">
            <button id="minus">
              <i class="fa-solid fa-minus"></i>
            </button>
            <span id="total-products">1</span>
            <button id="add">
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
        <button class="add-cart">
          <i class="fa-solid fa-cart-plus"></i>
          Thêm vào giỏ hàng
        </button>
        <button class="btn-buy" onclick="location.href='gio_hang.html';">Mua ngay</button>
        <a class="list_store" href="#">Xem store còn hàng</a>
        <ul class="policy">
          <li>
            <i class="fa-solid fa-truck"></i>
            Miễn phí ship cho đơn hàng từ 1 triệu
            <i class="fa-solid fa-angle-down"></i>
          </li>
          <li>
            <i class="fa-solid fa-credit-card"></i>
            Đa dạng phương thức thanh toán
            <i class="fa-solid fa-angle-down"></i>
          </li>
          <li>
            <i class="fa-solid fa-repeat"></i>
            Đổi trả hàng miễn phí trong 30 ngày
            <i class="fa-solid fa-angle-down"></i>
          </li>
        </ul>
      </div>
        `;
    }
  }
}

fixItem(products);

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
