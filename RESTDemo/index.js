const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/tacos", (req, res) => {
  res.send("Hello World!");
});

app.post("/tacos", (req, res) => {
  const { meat, qty } = req.body;
  res.send(`You ordered ${qty} ${meat} tacos`);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
