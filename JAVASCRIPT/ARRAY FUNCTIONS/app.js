const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubles = numbers.map(function (num) {
  return num * 2;
});

function print(element) {
  console.log(element);
}

numbers.forEach(function (el) {
  if (el % 2 === 0) {
    console.log(el);
  }
});

const movies = [
  {
    title: "Amadeus",
    score: 99,
  },
  {
    title: "Stand By Me",

    score: 85,
  },
  {
    title: "Parasite",
    score: 95,
  },
  {
    title: "Alien",
    score: 90,
  },
];

movies.forEach(function (movie) {
  console.log(`${movie.title} - ${movie.score}/100`);
});

const tittles = movies.map(function (movie) {
  return `${movie.title} - ${movie.score / 10}`;
});

// Arrow Functions
const add = function (x, y) {
  return x + y;
};

const add2 = (x, y) => {
  return x + y;
};

const square = (x) => {
  return x * x;
};

const rollDie = () => {
  return Math.floor(Math.random() * 6) + 1;
};

//write an arrow function expression called greet. It should accept a single string argument, representing a person's name. It should return a greeting string that person's name, included in the string.
const greet = (name) => {
  return `Hey ${name}!`;
};

const rollDie2 = () => Math.floor(Math.random() * 6) + 1;

const add3 = (a, b) => a + b;
// Implicit Return
const newmovies = movies.map(function (movie) {
  return `${movie.title} - ${movie.score / 10}`;
});
// Arrow Function
const newmovies2 = movies.map(
  (movie) => `${movie.title} - ${movie.score / 10}`
);

//Set timeout function
console.log("Hello!");
setTimeout(() => {
  console.log("... are you still there?");
}, 3000);
//setInterval function
const id = setInterval(() => {
  console.log(Math.random());
}, 2000);
//stop the set interval
clearInterval(id);

//filter function
const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
nums.filter((n) => {
  return n <= 10;
});

const goodmovies = movies.filter((movies) => movies.score >= 90);

const badmovies = movies.filter((movies) => movies.score < 90);

const newmovies4 = movies.filter((moves) => moves.year > 2000);

movies.filter((m) => m.score >= 90).map((m) => m.title);

//write a function called validUserNames that accepts an array of usernames(strings). It should return a new array, containing only the usernames that are less than 10 characters.
const validUserNames = (usernames) => {
  return usernames.filter((user) => user.length < 10);
};

//every function checks if all the elements in an array pass a test
const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77];

exams.every((score) => score >= 75);

//some function checks if some of the elements in an array pass a test
exams.some((score) => score >= 75);

//checks if there is a movie that was made after 2015
movies.some((move) => move.year > 2015);

//Define a function called allevens that accepts a single parameter, an array of numbers. It should return true if all the values in the array are even, false otherwise.
const allevens = (arr) => {
  return arr.every((num) => num % 2 === 0);
};

//reduce function
const prices = [9.99, 1.5, 19.99, 49.99, 30.5];

const total = prices.reduce((total, price) => total + price);

const minprice = prices.reduce((min, price) => {
  if (price < min) {
    return price;
  }
  return min;
});

movies.reduce((bestMovie, currMovie) => {
  if (currMovie.score > bestMovie.score) {
    return currMovie;
  }
  return bestMovie;
});

const person = {
  firstName: "Viggo",
  lastName: "Mortensen",
  fullname: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

//arrow function and this
