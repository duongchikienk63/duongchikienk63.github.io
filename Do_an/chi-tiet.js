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