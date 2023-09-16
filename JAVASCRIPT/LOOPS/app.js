console.log("Loops");

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// Write a loop that prints:
// 25
// 20
// 15
// 10
// 5
// 0

for (let i = 25; i >= 0; i -= 5) {
  console.log(i);
}

const animals = ["lions", "tigers", "bears"];

for (let i = 0; i < animals.length; i++) {
  console.log(i, animals[i]);
}

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}
//how can i print the elements of an array in uppercase?
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i].toUpperCase());
}
