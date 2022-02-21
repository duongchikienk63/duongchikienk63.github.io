let colors = ["#3498db", "#9b59b6", "#e74c3c", "#2c3e50", "#d35400"];

//function tạo, thêm, chỉnh background theo màu và hiển thị
function renderListBox(arr) {
  for (let i = 0; i < arr.length; i++) {
    $(".boxes").append("<div class='box'></div>");
    $(".box").eq(length - 1).css("background-color", arr[i]);

    //   //Thêm event xóa box khi nhấn vào box
    $(".box").eq(i).click(function () {
      $(".box").eq(i).remove();
      $(".points").html(" " + $(".box").length);
    });
  }
  // //Hiện thị số lượng box ra ngoài
  $(".points").html(" " + $(".box").length);
}

renderListBox(colors);

//Bấm vào box nào xóa box đó
function removeBox(arr) {
  for (let i = 0; i < arr.length; i++) {
    // $(".box").eq(i).click(function () {
      // $(".box").eq(i).remove();
      // $(".points").html(" " + $(".box").length);
    // });
  }
}

// removeBox($(".box"));

$(".box").click(function () {
  removeBox($(".box"));
})

// Bấm vào nút More boxes thì thêm 5 box
$("#btn").click(function () {
  renderListBox(colors);
});
