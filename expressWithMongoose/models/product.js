// Initiate mongoose
const mongoose = require("mongoose");
// Connect to the database with a schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: String,
    lowercase: true,
    enum: ["fruit", "vegetable", "dairy"],
  },
});
//compiling the schema into a model
const product = mongoose.model("Product", productSchema);

module.exports = product;
