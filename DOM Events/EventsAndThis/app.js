const makeRandColor = function () {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", colorize);
}

const h1 = document.querySelectorAll("h1");
for (const h11 of h1) {
  h11.addEventListener("click", colorize);
}

function colorize() {
  this.style.backgroundColor = makeRandColor();
  this.style.color = makeRandColor();
}
