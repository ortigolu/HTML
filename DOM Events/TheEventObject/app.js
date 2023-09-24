document.querySelector("button").addEventListener("click", function (evt) {
  console.log(evt);
});

const input = document.querySelector("input");

// input.addEventListener("keydown", function () {
//   console.log("KEYDOWN");
// });

// input.addEventListener("keydown", function () {
//   console.log("keyup");
// });

window.addEventListener("click", function (e) {
  switch (e.code) {
    case "ArrowUp":
      console.log("up");
      break;
    case "ArrowRight":
      console.log("right");
      break;
    case "ArrowDown":
      console.log("down");
      break;
  }
});
