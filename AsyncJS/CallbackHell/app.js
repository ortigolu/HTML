// setTimeout(() => {
//   document.body.style.backgroundColor = "red";
//   setTimeout(() => {
//     document.body.style.backgroundColor = "yellow";
//     setTimeout(() => {
//       document.body.style.backgroundColor = "orange";
//       setTimeout(() => {
//         document.body.style.backgroundColor = "green";
//         setTimeout(() => {
//           document.body.style.backgroundColor = "blue";
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

const delay = (newColor, delay, doNext) => {
  setTimeout(() => {
    document.body.style.backgroundColor = newColor;
    doNext();
  }, delay);
};

delay("olive", 3000, () => {
  delay("orange", 1000, () => {
    delay("red", 1000, () => {});
  });
});

searchMoviesAPI("AMADEUS", () => {
  saveToMyDB(MOVIES, () => {
    //IF IT WORKS, RUN THIS:
  }),
    () => {
      //IF API DOWN, REQUEST FAILED
    };
});
