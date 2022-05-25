const createProducts = (products) => {
  const div = document.createElement("div");

  div.classList.add("col-3");

  div.classList.add("px-5");

  div.innerHTML = `
  <a href="./chi-tiet.html?id=${products.id}">
  <span class = "title" >${products.title}</span>
  <div>
  <img src="${products.image}" alt="anh">
  </div>
  <span class = "price" >Giá: ${products.price}$</span></a>
     `;

  return div;
};

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => {
    const products = json.map(createProducts);

    document.querySelector(".container").after(...products);
  });

  // fetch('https://fakestoreapi.com/products')
  //           .then(res=>res.json())
  //           .then(json=>console.log(json))



