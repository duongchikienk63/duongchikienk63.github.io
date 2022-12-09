//Các chức năng có trong ứng dụng
//1. Thêm công việc
//2. Lọc công việc
//3. Chọn công việc muốn chỉnh sửa
//4. Sửa tên công việc
//5. Xóa công việc
//6. Hiển thị danh sách công việc

//Thuộc tính công việc
//1. tên công việc
//2. Trạng thái công việc
//3. id riêng của từng công việc

//Random id
function randomId() {
  return Math.floor(Math.random() * 10000);
}

// Mockup data mẫu
let todos = [
  // {
  //   id: randomId(),
  //   title: "Làm bài tập",
  //   status: false,
  // },
  // {
  //   id: randomId(),
  //   title: "Ăn tối",
  //   status: false,
  // },
  // {
  //   id: randomId(),
  //   title: "Ăn trưa",
  //   status: true,
  // },
];

//Truy cập vào các thành phần
const todoListEl = document.querySelector(".todo-list");
const todoInputEl = document.getElementById("todo-input");
const btnAdd = document.getElementById("btn-add");
const btnUpdate = document.getElementById("btn-update");

const optionAll = document.getElementById("all");
const optionUnactive = document.getElementById("unactive");
const optionActive = document.getElementById("active");

//6. Hiển thị danh sách công việc
function renderTodo(arr) {
  //Xóa hết dữ liệu hiện có để thêm dữ liệu mới
  todoListEl.innerHTML = "";

  //Danh sách công việc trống
  if (arr.length == 0) {
    todoListEl.innerHTML = "<div class= pad-todo >Không có công việc nào trong danh sách</div>";
    return;
  }

  //Hiển thị danh sách công việc ra ngoài giao diện
  let content = "";
  for (let i = 0; i < arr.length; i++) {
    const t = arr[i];
    content += `
        <div class="todo-item ${t.status == true ? "active-todo" : ""}">
        <div class="todo-item-title">
            <input type="checkbox" ${t.status == true ? "checked" : ""} 
            onclick = "toggleStatus(${t.id})"/>
            <p>${t.title}</p>
        </div>
        <div class="option">
            <button class="btn btn-update">
                <img src="./img/pencil.svg" alt="icon" onclick="fixTodo(${
                  t.id
                })" />
            </button>
            <button class="btn btn-delete" onclick="deleteTodo(${t.id})">
                <img src="./img/remove.svg" alt="icon" />
            </button>
        </div>
    </div>
    `;
  }

  //Chèn dữ liệu mới để hiển thị
  todoListEl.innerHTML = content;
}

// renderTodo(todos);

//1. Thêm công việc
btnAdd.addEventListener("click", function () {
  //B1: Lấy dữ liệu trong ô input
  let title = todoInputEl.value;

  //B2: Kiểm tra dữ liệu có trống hay không
  if (title == "") {
    alert("Bạn chưa nhập tên công việc");
    return;
  }

  //B3: Tạo object todo mới
  let newTodo = {
    id: randomId(),
    title: title,
    status: false,
  };

  //B4: Thêm object todo mới vào trong mảng todos ban đầu
  todos.push(newTodo);
  setDataToLocalStorage()


  //B5: Hiển thị công việc mới ra ngoài giao diện
  todoInputEl.value = "";
});

//5. Xóa công việc
function deleteTodo(id) {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == id) {
      todos.splice(i, 1);
    }
  }
  setDataToLocalStorage()
}

//3. Thay đổi trạng thái công việc
function toggleStatus(id) {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == id) {
      if (todos[i].status == true) {
        todos[i].status = false;
      } else {
        todos[i].status = true;
      }
    }
  }
  setDataToLocalStorage()
}

//2. Lọc công việc
optionUnactive.addEventListener("click", function () {
  let newArr = [];
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].status == false) {
      newArr.push(todos[i]);
    }
  }
  renderTodo(newArr);
});

optionActive.addEventListener("click", function () {
  let newArr = [];
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].status == true) {
      newArr.push(todos[i]);
    }
  }
  renderTodo(newArr);
});

optionAll.addEventListener("click", function () {
  renderTodo(todos);
});

//4. Sửa tên công việc
function fixTodo(id) {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == id) {
      //Ấn vào nút sửa hiện lên nút cập nhật
      btnUpdate.classList.remove("hide");
      btnAdd.classList.add("hide");
      btnUpdate.onclick = function() {updateTodo()};

      function updateTodo() {
        if (todos[i].id == id) {
          //Lấy dữ liệu trong ô input
          let titleFix = todoInputEl.value;

          //Kiểm tra dữ liệu có trống hay không
          if (titleFix == "") {
            alert("Bạn chưa nhập tên công việc muốn thay thế");
            return;
          }

          //Thay đổi tên công việc
          todos[i].title = titleFix;

          setDataToLocalStorage()
          todoInputEl.value = "";
          btnUpdate.classList.add("hide");
          btnAdd.classList.remove("hide");
        }
      }
    }
  }
}

// localStorage.setItem("lastname", JSON.stringify();
// JSON.parse(lastname)


//Lấy dữ liệu từ localStorage
function getDataForomLocalStorage() {
  //Lấy data thông qua key "todos"
  let todosLocal = localStorage.getItem("todos");

  //Nếu có data trong localStorage thì parse, ko thì để arr rỗng
  if(todosLocal) {
    todos = JSON.parse(todosLocal);
  } else {
    todos = [];
  }

  renderTodo(todos);

}

//Lưu data vào localStorage
function setDataToLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todos))
  renderTodo(todos);
}

//Sự kiện xảy ra khi web load hết html css thì gọi vào function
window.onload = getDataForomLocalStorage;