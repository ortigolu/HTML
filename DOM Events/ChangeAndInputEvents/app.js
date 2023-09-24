const input = document.querySelector("input");
const h1 = document.querySelector("h1");
// input.addEventListener("change", function (e) {
//   console.log(e);
// });

input.addEventListener("input", function (e) {
  h1.innerText = input.value;
  //if the input goes back to being empty, update the h1 to the original message
  if (input.value === "") {
    h1.innerText = "Enter Your Username";
  }
});
