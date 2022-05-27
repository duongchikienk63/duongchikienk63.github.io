let locationWeb = window.location.href.split("=");
let idItem = locationWeb[1];

const productEle = document.querySelector(".product");

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => {
      for (let i = 0; i < json.length; i++) {
          if(json[i].id == idItem) {
              productEle.innerHTML = `
              <span class = "name" >${json[i].title}</span>
              <div>
              <img class = "img" src="${json[i].image}" alt="anh">
              </div>
              <p>${json[i].description}</p>
              <span class = "price-product" >Price: ${json[i].price}$</span>
              <div class = "back">
              <a href = "./index.html"> Quay Lại </a> 
              </div>
              `
          }
      }
  });
