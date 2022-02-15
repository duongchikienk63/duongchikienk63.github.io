let colors = ["#3498db", "#9b59b6", "#e74c3c", "#2c3e50", "#d35400"];

//Khai báo các biến gọi các node
let boxes = document.querySelector(".boxes");
let pointsEl = document.querySelector(".points");
let listBoxEl = document.getElementsByClassName("box");
let btnAdd = document.querySelector("#btn");

//function tạo, thêm, chỉnh background theo màu và hiển thị
function renderListBox(arr) {
  for (let i = 0; i < arr.length; i++) {
    let listBox = document.createElement("div");
    listBox.classList.add("box");
    boxes.append(listBox);
    listBox.style.backgroundColor = arr[i];
  }
}

renderListBox(colors);

//Hiện thị số lượng box ra ngoài
pointsEl.innerHTML = " " + listBoxEl.length;

//Ấn vào box nào thì xóa box đó
function remove(arr) {
  for (let i = 0; i < arr.length; i++) {
    listBoxEl[i].addEventListener("click", function () {
      listBoxEl[i].remove();
      pointsEl.innerHTML = " " + listBoxEl.length;
    });
  }
}

remove(listBoxEl);

//Bấm vào nút More boxes thì thêm 5 box
btnAdd.addEventListener("click", function () {
  renderListBox(colors);
  pointsEl.innerHTML = " " + listBoxEl.length;
});
