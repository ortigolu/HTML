function makeMystery(min, max) {}

function is_between(num) {
  return num >= 50 && num <= 100;
}

function makebetweenfunc(num1, num2) {
  return function (num) {
    return num >= num1 && num <= num2;
  };
}

const myMath = {
  pi: 3.14,
  square: function (num) {
    return num * num;
  },
  cube(num) {
    return num * num * num;
  },
};

//Define an object called square, which will hold methods square.area() and square.perimeter(). Both methods should accept a single argument and return the area and perimeter of a square, respectively.
const square = {
  area(side) {
    return side * side;
  },
  perimeter(side) {
    return side * 4;
  },
};

const cat = {
  name: "Blue Steele",
  color: "grey",
  breed: "scottish fold",
  meow() {
    console.log("THIS IS:", this);
    console.log(`${this.name} says MEOWWWW`);
  },
};

const hen = {
  name: "Helen",
  eggCount: 0,
  layAnEgg() {
    this.eggCount += 1;
    return "EGG";
  },
};

try {
  hello.toUpperCase();
} catch (error) {
  console.log("ERROR!!!");
}

function yell(msg) {
  try {
    console.log(msg.toUpperCase());
  } catch (e) {
    console.log(e);
    console.log("Please pass a string next time!");
  }
}

const lucas = {
  name: "Lucas",
  lastname: "Ortigoza",
};
