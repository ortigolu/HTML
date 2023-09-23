function rollDie(numSide = 6) {
  return Math.floor(Math.random() * numSide) + 1;
}

function greet(msg = "HEy there!", person) {
  console.log(`${msg}, ${person}!`);
}
