axios
  .get("https://swapi.dev/api/people/1/")
  .then((resp) => {
    console.log("response", resp);
  })
  .catch((e) => {
    console.log("error", e);
  });

const getStarWarsPerson = async () => {
  try {
    const res = await axios.get("https://swapi.dev/api/people/1/");
    console.log(res.data);
  } catch (e) {
    console.log("error", e);
  }
};

getStarWarsPerson(5);
getStarWarsPerson(10);

// //   .then((res) => {
// //     console.log("RESPONSE: ", res);
// //   })
// //   .catch((e) => {
// //     console.log("ERROR! ", e);
// //   });

// const getStarWarsPerson = async (id) => {
//   try {
//     const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//     console.log(res.data);
//   } catch (e) {
//     console.log("ERROR", e);
//   }
// };

// getStarWarsPerson(5);
// getStarWarsPerson(10);
