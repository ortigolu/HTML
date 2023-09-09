//array of students
let students = [];

//array of colors
let colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink"];

//array of numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//exammple of array index
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);

//modify an array
colors[0] = "black";

//push method
colors.push("white");

//pop method
colors.pop();

//shift method remove from the start
colors.shift();

//unshift method add to the start
colors.unshift("brown");

//concat method
let colors2 = ["grey", "gold"];
let allColors = colors.concat(colors2);

//includes method
console.log(colors.includes("red"));

//indexOf method
console.log(colors.indexOf("red"));

//join method
console.log(colors.join(" "));
