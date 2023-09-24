//select the div with the id of container Using javascript set its text alignment to center
//select the image and use javascript to give it a width of 150px and a border radius of 50%
const container = document.querySelector("#container");
container.style.textAlign = "center";
const image = document.querySelector("img");
image.style.width = "150px";
image.style.borderRadius = "50%";

//YOur task is to select all spans, iterate over them and assign them each one of the colors from the colors array.
const colors = ["red", "blue", "green", "yellow", "pink", "purple"];
const spans = document.querySelectorAll("span");
spans.forEach((span, i) => {
  span.style.color = colors[i];
});

for (const link of allLinks) {
  link.style.color = "magenta";
  link.style.textDecorationColor = "green";
  link.style.textDecorationStyle = "wavy";
}

//without touching index.html, please use javascript to create exactly 100 new button elements and append them to the div container.
const container = document.querySelector("#container");
for (let i = 0; i < 100; i++) {
  const btn = document.createElement("button");
  btn.innerText = "Hey";
  container.appendChild(btn);
}
