const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
//require the product model
const Product = require("./models/product");
const { log } = require("console");
const methodOverride = require("method-override");

mongoose
  .connect("mongodb://localhost:27017/farmStand", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MONGO CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log("OH NO MONGO CONNECTION ERROR!!!!");
    console.log(err);
  });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//When a client sends a POST or PUT request with a URL-encoded body, the express.urlencoded() middleware parses the body and adds the resulting key-value pairs to the req.body object.
app.use(express.urlencoded({ extended: true }));
//parse the body of a JSON request
app.use(methodOverride("_method"));

app.get("/products", async (req, res) => {
  const products = await Product.find({}); //find all products
  res.render("products/index", { products });
});

app.get("/products/new", (req, res) => {
  res.render("products/new");
});
app.post("/products", async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  console.log(newProduct);
  res.redirect(`/products/${newProduct._id}`);
});

app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render("products/show", { product });
});

app.get("/products/:id/edit", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render("products/edit", { product });
});

app.put("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(id, req.body, {
    runValidators: true,
    new: true,
  });
  res.redirect(`/products/${product._id}`);
});

app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  const deletedProduct = await Product.findByIdAndDelete(id);
  res.redirect("/products");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
