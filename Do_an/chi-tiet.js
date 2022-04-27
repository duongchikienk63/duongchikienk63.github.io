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
    price: 850000,
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
    name: "Áo sơ mi ngắn tay nam",
    price: 695000,
    image:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-ngan-tay/ass206s2/ao-so-mi-nam-aristino-ASS206S2-05x900x900x4.jpg",
    image1:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-ngan-tay/ass206s2/ao-so-mi-nam-aristino-ASS206S2-06x90x90x4.jpg",
    image2:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-ngan-tay/ass206s2/ao-so-mi-nam-aristino-ASS206S2-03x90x90x4.jpg",
    image3:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-ngan-tay/ass206s2/ao-so-mi-nam-aristino-ASS206S2-04x90x90x4.jpg",
    image4:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-ngan-tay/ass206s2/ao-so-mi-nam-aristino-ASS206S2-01x90x90x4.jpg",
    image5:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-ngan-tay/ass206s2/ao-so-mi-nam-aristino-ASS206S2-05x50x50x4.jpg",
    count: 1,
    id: 2,
    type: "Trắng in kẻ",
  },
  {
    name: "Áo Sơmi Ngắn Tay Nam",
    price: 750000,
    image:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-ngan-tay/ass230s2/ao-so-mi-nam-aristino-ASS230S2x900x900x4.jpg",
    image1:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-ngan-tay/ass223s2/ao-so-mi-nam-aristino-ASS223s2-05x90x90x4.jpg",
    image2:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-ngan-tay/ass223s2/ao-so-mi-nam-aristino-ASS223s2x90x90x4.jpg",
    image3:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-ngan-tay/ass223s2/ao-so-mi-nam-aristino-ASS223s2-04x90x90x4.jpg",
    image4:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-ngan-tay/ass223s2/ao-so-mi-nam-aristino-ASS223s2-03x90x90x4.jpg",
    image5:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-ngan-tay/ass230s2/ao-so-mi-nam-aristino-ASS230S2x50x50x4.jpg",
    count: 1,
    id: 3,
    type: "Xanh kẻ caro",
  },
  {
    name: "Áo sơ mi dài tay nam",
    price: 900000,
    image:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-dai-tay/als42802/ao-so-mi-nam-aristino-ALS42802-01x900x900x4.jpg",
    image1:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-dai-tay/als42802/ao-so-mi-nam-aristino-ALS42802-02x90x90x4.jpg",
    image2:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-dai-tay/als42802/ao-so-mi-nam-aristino-ALS42802-07x90x90x4.jpg",
    image3:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-dai-tay/als42802/ao-so-mi-nam-aristino-ALS42802x90x90x4.jpg",
    image4:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-dai-tay/als42802/ao-so-mi-nam-aristino-ALS42802-06x90x90x4.jpg",
    image5:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-dai-tay/als42802/ao-so-mi-nam-aristino-ALS42802-01x50x50x4.jpg",
    count: 1,
    id: 4,
    type: "Xanh kẻ trắng",
  },
  {
    name: "Áo sơ mi dài tay nam",
    price: 850000,
    image:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-dai-tay/als36502/ao-so-mi-nam-aristino-ALS36502x900x900x4.jpg",
    image1:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-dai-tay/als36502/ao-so-mi-nam-aristino-ALS36502x900x900x4.jpg",
    image2:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-dai-tay/als36502/ao-so-mi-nam-aristino-ALS36502x900x900x4.jpg",
    image3:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-dai-tay/als36502/ao-so-mi-nam-aristino-ALS36502x900x900x4.jpg",
    image4:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-dai-tay/als36502/ao-so-mi-nam-aristino-ALS36502x900x900x4.jpg",
    image5:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-dai-tay/als36502/ao-so-mi-nam-aristino-ALS36502x50x50x4.jpg",
    count: 1,
    id: 5,
    type: "Đen kẻ xanh",
  },
  {
    name: "Áo sơ mi dài tay nam",
    price: 795000,
    image:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-dai-tay/als35602/ao-so-mi-nam-aristino-ALS35602x900x900x4.jpg",
    image1:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-dai-tay/als35602/ao-so-mi-nam-aristino-ALS35602x900x900x4.jpg",
    image2:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-dai-tay/als35602/ao-so-mi-nam-aristino-ALS35602x900x900x4.jpg",
    image3:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-dai-tay/als35602/ao-so-mi-nam-aristino-ALS35602x900x900x4.jpg",
    image4:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-dai-tay/als35602/ao-so-mi-nam-aristino-ALS35602x900x900x4.jpg",
    image5:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-dai-tay/als35602/ao-so-mi-nam-aristino-ALS35602x50x50x4.jpg",
    count: 1,
    id: 6,
    type: "Trắng kẻ xanh",
  },
  {
    name: "Áo sơ mi ngắn tay nam",
    price: 695000,
    image:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-ngan-tay/ass228s2/ao-so-mi-nam-aristino-ASS228S2x900x900x4.jpg",
    image1:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-ngan-tay/ass228s2/ao-so-mi-nam-aristino-ASS228S2-06x90x90x4.jpg",
    image2:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-ngan-tay/ass228s2/ao-so-mi-nam-aristino-ASS228S2-05x90x90x4.jpg",
    image3:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-ngan-tay/ass228s2/ao-so-mi-nam-aristino-ASS228S2-04x90x90x4.jpg",
    image4:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-ngan-tay/ass228s2/ao-so-mi-nam-aristino-ASS228S2-03x90x90x4.jpg",
    image5:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-ngan-tay/ass228s2/ao-so-mi-nam-aristino-ASS228S2x50x50x4.jpg",
    count: 1,
    id: 7,
    type: "Xanh tím than in",
  },
  {
    name: "Áo sơ mi ngắn tay nam",
    price: 695000,
    image:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-ngan-tay/ass216s2/ao-so-mi-nam-aristino-ASS216S2-04x900x900x4.jpg",
    image1:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-ngan-tay/ass216s2/ao-so-mi-nam-aristino-ASS216S2-05x90x90x4.jpg",
    image2:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-ngan-tay/ass216s2/ao-so-mi-nam-aristino-ASS216S2-03x90x90x4.jpg",
    image3:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-ngan-tay/ass216s2/ao-so-mi-nam-aristino-ASS216S2-02x90x90x4.jpg",
    image4:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-ngan-tay/ass216s2/ao-so-mi-nam-aristino-ASS216S2-01x90x90x4.jpg",
    image5:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-ngan-tay/ass216s2/ao-so-mi-nam-aristino-ASS216S2-04x50x50x4.jpg",
    count: 1,
    id: 8,
    type: "Xanh tím than in",
  },
  {
    name: "Áo polo nam",
    price: 585000,
    image:
      "https://aristino.com/Data/ResizeImage/images/product/ao-polo/aps193s2/ao-polo-nam-aristino-APS193S2-05x900x900x4.jpg",
    image1:
      "https://aristino.com/Data/ResizeImage/images/product/ao-polo/aps193s2/ao-polo-nam-aristino-APS193S2-06x90x90x4.jpg",
    image2:
      "https://aristino.com/Data/ResizeImage/images/product/ao-polo/aps193s2/ao-polo-nam-aristino-APS193S2-07x90x90x4.jpg",
    image3:
      "https://aristino.com/Data/ResizeImage/images/product/ao-polo/aps193s2/ao-polo-nam-aristino-APS193S2-04x90x90x4.jpg",
    image4:
      "https://aristino.com/Data/ResizeImage/images/product/ao-polo/aps193s2/ao-polo-nam-aristino-APS193S2-02x90x90x4.jpg",
    image5:
      "https://aristino.com/Data/ResizeImage/images/product/ao-polo/aps193s2/ao-polo-nam-aristino-APS193S2-05x50x50x4.jpg",
    count: 1,
    id: 9,
    type: "Xanh tím than",
  },
  {
    name: "Áo thun nam",
    price: 350000,
    image:
      "https://aristino.com/Data/ResizeImage/images/product/ao-tshirt/ats041s2/ao-thun-nam-aristino-ATS041S2-12x900x900x4.jpg",
    image1:
      "https://aristino.com/Data/ResizeImage/images/product/ao-tshirt/ats041s2/ao-thun-nam-aristino-ATS041S2-11x90x90x4.jpg",
    image2:
      "https://aristino.com/Data/ResizeImage/images/product/ao-tshirt/ats041s2/ao-thun-nam-aristino-ATS041S2-13x90x90x4.jpg",
    image3:
      "https://aristino.com/Data/ResizeImage/images/product/ao-tshirt/ats041s2/ao-thun-nam-aristino-ATS041S2-09x90x90x4.jpg",
    image4:
      "https://aristino.com/Data/ResizeImage/images/product/ao-tshirt/ats041s2/ao-thun-nam-aristino-ATS041S2-10x90x90x4.jpg",
    image5:
      "https://aristino.com/Data/ResizeImage/images/product/ao-tshirt/ats041s2/ao-thun-nam-aristino-ATS041S2-12x50x50x4.jpg",
    count: 1,
    id: 10,
    type: "Xám 32 kẻ",
  },
  {
    name: "Quần short nam",
    price: 695000,
    image:
      "https://aristino.com/Data/ResizeImage/images/product/quan-short/aso042s2/quan-short-nam-aristino-ASO042S2-02x900x900x4.jpg",
    image1:
      "https://aristino.com/Data/ResizeImage/images/product/quan-short/aso042s2/quan-short-nam-aristino-ASO042S2x90x90x4.jpg",
    image2:
      "https://aristino.com/Data/ResizeImage/images/product/quan-short/aso042s2/quan-short-nam-aristino-ASO042S2-01x90x90x4.jpg",
    image3:
      "https://aristino.com/Data/ResizeImage/images/product/quan-short/aso042s2/quan-short-nam-aristino-ASO042S2x90x90x4.jpg",
    image4:
      "https://aristino.com/Data/ResizeImage/images/product/quan-short/aso042s2/quan-short-nam-aristino-ASO042S2-03x90x90x4.jpg",
    image5:
      "https://aristino.com/Data/ResizeImage/images/product/quan-short/aso042s2/quan-short-nam-aristino-ASO042S2-02x50x50x4.jpg",
    count: 1,
    id: 11,
    type: "Xám 288 kẻ",
  },
  {
    name: "Áo sơ mi dài tay nam",
    price: 850000,
    image:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-dai-tay/als03602/ao-so-mi-nam-aristino-ALS03602-03x900x900x4.jpg",
    image1:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-dai-tay/als03602/ao-so-mi-nam-aristino-ALS03602-04x90x90x4.jpg",
    image2:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-dai-tay/als03602/ao-so-mi-nam-aristino-ALS03602x90x90x4.jpg",
    image3:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-dai-tay/als03602/ao-so-mi-nam-aristino-ALS03602-02x90x90x4.jpg",
    image4:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-dai-tay/als03602/ao-so-mi-nam-aristino-ALS03602-01x900x900x4.jpg",
    image5:
      "https://aristino.com/Data/ResizeImage/images/product/so-mi-dai-tay/als03602/ao-so-mi-nam-aristino-ALS03602-03x50x50x4.jpg",
    count: 1,
    id: 12,
    type: "Trắng",
  },
  {
    name: "Áo tank-top nam",
    price: 275000,
    image:
      "https://aristino.com/Data/ResizeImage/images/product/ao-tanktop/att019s2/ao-tank-top-nam-aristino-ATT019S2-02x900x900x4.jpg",
    image1:
      "https://aristino.com/Data/ResizeImage/images/product/ao-tanktop/att019s2/ao-tank-top-nam-aristino-ATT019S2-01x90x90x4.jpg",
    image2:
      "https://aristino.com/Data/ResizeImage/images/product/ao-tanktop/att019s2/ao-tank-top-nam-aristino-ATT019S2-03x90x90x4.jpg",
    image3:
      "https://aristino.com/Data/ResizeImage/images/product/ao-tanktop/att019s2/ao-tank-top-nam-aristino-ATT019S2-14x90x90x4.jpg",
    image4:
      "https://aristino.com/Data/ResizeImage/images/product/ao-tanktop/att019s2/ao-tank-top-nam-aristino-ATT019S2x90x90x4.jpg",
    image5:
      "https://aristino.com/Data/ResizeImage/images/product/ao-tanktop/att019s2/ao-tank-top-nam-aristino-ATT019S2-02x50x50x4.jpg",
    count: 1,
    id: 13,
    type: "Xanh biển",
  },
  {
    name: "Áo polo nam",
    price: 650000,
    image:
      "https://aristino.com/Data/ResizeImage/images/product/ao-polo/aps131s2/ao-polo-nam-aristino-APS131S2-01x900x900x4.jpg",
    image1:
      "https://aristino.com/Data/ResizeImage/images/product/ao-polo/aps131s2/ao-polo-nam-aristino-APS131S2-02x90x90x4.jpg",
    image2:
      "https://aristino.com/Data/ResizeImage/images/product/ao-polo/aps131s2/ao-polo-nam-aristino-APS131S2-03x90x90x4.jpg",
    image3:
      "https://aristino.com/Data/ResizeImage/images/product/ao-polo/aps131s2/ao-polo-nam-aristino-APS131S2-04x90x90x4.jpg",
    image4:
      "https://aristino.com/Data/ResizeImage/images/product/ao-polo/aps131s2/ao-polo-nam-aristino-APS131S2x90x90x4.jpg",
    image5:
      "https://aristino.com/Data/ResizeImage/images/product/ao-polo/aps131s2/ao-polo-nam-aristino-APS131S2-01x50x50x4.jpg",
    count: 1,
    id: 14,
    type: "Trắng 6 kẻ",
  },
  {
    name: "Áo polo nam",
    price: 595000,
    image:
      "https://aristino.com/Data/ResizeImage/images/product/ao-polo/aps091s2/ao-polo-nam-aristino-APS091S2-11x900x900x4.jpg",
    image1:
      "https://aristino.com/Data/ResizeImage/images/product/ao-polo/aps091s2/ao-polo-nam-aristino-APS091S2-12x90x90x4.jpg",
    image2:
      "https://aristino.com/Data/ResizeImage/images/product/ao-polo/aps091s2/ao-polo-nam-aristino-APS091S2-13x90x90x4.jpg",
    image3:
      "https://aristino.com/Data/ResizeImage/images/product/ao-polo/aps091s2/ao-polo-nam-aristino-APS091S2-09x90x90x4.jpg",
    image4:
      "https://aristino.com/Data/ResizeImage/images/product/ao-polo/aps091s2/ao-polo-nam-aristino-APS091S2-10x90x90x4.jpg",
    image5:
      "https://aristino.com/Data/ResizeImage/images/product/ao-polo/aps091s2/ao-polo-nam-aristino-APS091S2-11x50x50x4.jpg",
    count: 1,
    id: 15,
    type: "Xanh Aqua",
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

const btnBuy = document.querySelector(".btn-buy");
let productsInCart = [];

btnBuy.addEventListener("click", function () {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id == idItem) {
      productsInCart.push(products[i]);
    };
  }
  setLocalStorage();
});

function setLocalStorage() {
  localStorage.setItem('productsInCart', JSON.stringify(productsInCart));
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