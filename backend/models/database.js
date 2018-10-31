const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test");

let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  // we're connected!
});

let RecipeSchema = mongoose.Schema({
  id: Number,
  name: String
});

let Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;
