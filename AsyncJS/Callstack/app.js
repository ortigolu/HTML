const multiply = (x, y) => x * y;

const square = (x) => multiply(x, y);

const isRightTriangle = (a, b, c) => {
  return square(a) + square(b) === square(c);
};
