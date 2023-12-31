const button = document.querySelector("button");
const h1 = document.querySelector("h1");
button.addEventListener("click", function () {
  const newCOlor = randomCOlor();
  document.body.style.backgroundColor = newCOlor;
  h1.innerText = newCOlor;
});

const randomCOlor = function () {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};
