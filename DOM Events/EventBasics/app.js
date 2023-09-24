//SECOND CLASS EVENT MOUSE CLICK
const btn = document.querySelector("#v2");
btn.onclick = function () {
  console.log("You clicked me!");
  console.log("I hope this works!");
};

function scream() {
  console.log("AAAAHHHHHH!!");
}
btn.onmouseenter = scream;

document.querySelector("h1").onclick = () => {
  alert("YOu clicked me!");
};

const btn3 = document.querySelector("#v3");
btn3.addEventListener("click", function () {
  alert("YOu clicked me!");
});

function twist1() {
  console.log("twist");
}

function shout() {
  console.log("shout");
}

const twist = document.querySelector("#tas");
// twist.onclick = twist1;
// twist.onclick = shout;

twist.addEventListener("click", twist1);
twist.addEventListener("click", shout);
