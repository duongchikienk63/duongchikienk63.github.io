const data = [
  {
    title: "Chỉ số BMI dưới 18,5 là thiếu cân",
    content: "Bạn cần áp dụng chế độ ăn và thể thao để tăng cân.",
    image:
      "https://images.unsplash.com/photo-1541306912932-f6bed7f462eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  },
  {
    title: "Chỉ số BMI từ 18,5 đến 24,9 là bình thường",
    content: "Bạn có một cơ thể tốt.",
    image:
      "https://images.unsplash.com/photo-1579047440583-43a690fe2243?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  },
  {
    title: "Chỉ số BMI ở giữa 25,0 và 29,9 được coi là thừa cân",
    content:
      "Tuy nhiên, tình trạng chưa quá trầm trọng nên bạn có thể tìm ngay các phương pháp giảm cân hiệu quả tự nhiên và kết hợp luyện tập. Nếu áp dụng điều độ và kiên trì, chỉ cần tốn khoảng vài tháng là bạn có ngay vóc dáng rất ưng ý rồi đó.",
    image:
      "https://images.unsplash.com/photo-1573879541250-58ae8b322b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  },
  {
    title: "Chỉ số BMI bằng hoặc trên 30 được xem là béo phì",
    content:
      "Với mức cân nặng này, cơ thể của bạn phải gặp rất nhiều áp lực hàng ngày, đặc biệt trọng lượng mỡ tạo áp lực lên cơ xương và các cơ quan làm ảnh hưởng đến sinh hoạt và sức khỏe của bạn.",
    image:
      "https://images.unsplash.com/photo-1573879026263-0ae3b9599d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=620&q=80",
  },
];

let addIpt = document.getElementsByClassName("input");
let heightEl = document.querySelector("#height");
let weightEl = document.querySelector("#weight");
let btnSubmit = document.querySelector("#btn-submit");
let sayHelloEl = document.querySelector(".say-hello");
let resultContainerEl = document.querySelector(".result-container");
let resultNumEl = document.querySelector(".result-num");
let resultTitleEl = document.querySelector(".result-title");
let resultContentEl = document.querySelector(".result-content");
let imageBoxEl = document.querySelector(".image-box");

btnSubmit.addEventListener("click", function () {
  Array.from(addIpt).map((ele) => ele.classList.remove("success", "error"));
});

btnSubmit.addEventListener("click", function () {
  let isValid = checkValidate();

  if (isValid) {
    // //B1: Lấy value trong 2 ô input
    // heightElValue = heightEl.value;
    // weightElValue = weightEl.value;

      //B2: Kiểm tra value có hay ko
  //   if (heightElValue == "") {
  //     addIpt[0].classList.add("error");
  //     addIpt[0].classList.remove("success");
  //     return;
  //   }else {
  //     addIpt[0].classList.add("success")
  //     addIpt[0].classList.remove("error");
  //   }

  //   if (weightElValue == "") {
  //     addIpt[1].classList.add("error");
  //     addIpt[1].classList.remove("success");
  //     return;
  //   }else {
  //     addIpt[1].classList.add("success");
  //     addIpt[1].classList.remove("error");
  //   }

  //B3: Tính toán chỉ số BMI
  let totals = weightElValue / ((heightElValue / 100) * (heightElValue / 100));
  let total = Math.round(totals * 100) / 100;

  //B4: Hiển thị chỉ số ra ngoài
  renderContent(total);

  //Ẩn hiện class
  sayHelloEl.classList.add("hide");
  resultContainerEl.classList.remove("hide");
  }

});

function renderContent(total) {
  if (total < 18.5) {
    resultNumEl.innerHTML = total;
    resultTitleEl.innerHTML = data[0].title;
    resultContentEl.innerHTML = data[0].content;
    imageBoxEl.style.backgroundImage = `url(${data[0].image})`;
  } else if (total < 25) {
    resultNumEl.innerHTML = total;
    resultTitleEl.innerHTML = data[1].title;
    resultContentEl.innerHTML = data[1].content;
    imageBoxEl.style.backgroundImage = `url(${data[1].image})`;
  } else if (total < 30) {
    resultNumEl.innerHTML = total;
    resultTitleEl.innerHTML = data[2].title;
    resultContentEl.innerHTML = data[2].content;
    imageBoxEl.style.backgroundImage = `url(${data[2].image})`;
  } else {
    resultNumEl.innerHTML = total;
    resultTitleEl.innerHTML = data[3].title;
    resultContentEl.innerHTML = data[3].content;
    imageBoxEl.style.backgroundImage = `url(${data[3].image})`;
  }
}

function isNum(number) {
  return /^[0-9]*$/.test(number);
}

function checkValidate() {
    heightElValue = heightEl.value;
    weightElValue = weightEl.value;

    let isCheck = true;

    // Kiểm tra trường chiều cao
    if (heightElValue == '') {
        setError(heightEl, 'Chiều cao không được để trống');
        isCheck = false;
    } else if (!isNum(heightElValue)) {
        setError(heightEl, 'Chiều cao không đúng định dạng');
        isCheck = false;
    } else {
        setSuccess(heightEl);
    };

    // Kiểm tra trường chiều cao
    if (weightElValue == '') {
        setError(weightEl, 'Cân nặng không được để trống');
        isCheck = false;
    } else if (!isNum(weightElValue)) {
        setError(weightEl, 'Cân nặng không đúng định dạng');
        isCheck = false;
    } else {
        setSuccess(weightEl);
    }

    return isCheck;
}

function setError(ele, message) {
    let parentEle = ele.parentNode;
    parentEle.classList.add('error');
    parentEle.querySelector('small').innerText = message;
}

function setSuccess(ele) {
    ele.parentNode.classList.add('success');
}
