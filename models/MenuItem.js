const mongoose = require("mongoose");

const MenuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  price: {
    type: Number,
    required: true,
  },
  image: String, // Optionally store image URL
});

module.exports = mongoose.model("MenuItem", MenuItemSchema);
