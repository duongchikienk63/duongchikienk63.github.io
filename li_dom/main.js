let listEle = document.getElementById("list");
let liList = listEle.getElementsByTagName("li");

//Tạo ra 3 thẻ li và add vào cuối danh sách
for (let i = 0; i < 3; i++) {
  let li = document.createElement("li");
  listEle.append(li);
}

//Thay đổi nội dung cho thẻ li vừa đc add
liList[7].innerHTML = "Item 8";
liList[8].innerHTML = "Item 9";
liList[9].innerHTML = "Item 10";

//Thay đổi nội dung cho thẻ li 1 thành màu đỏ
liList[0].style.color = "red";

//Sửa bg cho li3 thành màu xanh
liList[2].style.backgroundColor = "blue";

//Xóa đi thẻ li 4
liList[3].remove();

//Thêm thẻ li mới thay thế cho thẻ li 4 và thêm nội dung bất kì
let li4 = document.createElement("li");
liList[2].after(li4);
li4.innerHTML = "Thẻ li 4 đã bị thay thế";

//Thêm 1 nút add và 1 ô input để nhập nội dung
let btnAdd = document.createElement("button");
let iptText = document.createElement("input");

btnAdd.id = "btnadd";
listEle.after(btnAdd);
btnAdd.innerHTML = "add";
listEle.after(iptText);

//Gọi sự kiện khi bấm vào nút add sẽ thêm một thẻ li chứa nội dung trong ô input vào cuối danh sách
btnAdd.addEventListener("click", function () {
  let iptValue = iptText.value;
  if (iptValue != "") {
    let liAdd = document.createElement("li");
    listEle.append(liAdd);
    liAdd.innerHTML = iptValue;
    iptText.value = "";
  } else {
    alert("Bạn chưa nhập nội dung cần thêm!");
  }
});

//Thêm 1 nút remove
let btnRemove = document.createElement("button");
btnRemove.id = "btnremove";
btnRemove.innerHTML = "Remove";
btnAdd.after(btnRemove);

//Gọi sự kiện khi bấm vào nút remove sẽ xóa đi thẻ li cuối cùng
btnRemove.addEventListener("click", function () {
  removeLi(liList);
});

function removeLi(arr) {
  arr[arr.length - 1].remove();
}

//Thêm 1 nút hide trên đầu list
let hideEl = document.createElement("button");
hideEl.id = "hide";
hideEl.innerHTML = "Hide";
listEle.before(hideEl);

function hideList() {
  if (hideEl.innerHTML == "Hide") {
    listEle.classList.add("show");
    hideEl.innerHTML = "Show";
  } else {
    listEle.classList.remove("show");
    hideEl.innerHTML = "Hide";
  }
}

hideEl.addEventListener("click", function () {
  hideList();
});
