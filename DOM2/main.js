document.addEventListener("keydown", function (event) {
    const square = document.createElement("div");
    square.classList.add("square");
    const circle = document.createElement("div");
    circle.classList.add("circle");
  
    let x = event.offsetX;
    let y = event.offsetY;
  
    square.style.top = `${y - 50}px`;
    square.style.left = `${x - 50}px`;
    if (event.keyCode == 40) {
      document.body.appendChild(square);
    }
    else if (event.keyCode == 32) {
      document.body.appendChild(circle);
    }
    else {
     document.body.style.backgroundColor = "red"
    }
  });