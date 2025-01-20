import { Schema, model } from "mongoose";

const MenuItemSchema = new Schema({
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

const MenuItem = model("MenuItem", MenuItemSchema);
export default MenuItem;

// export default model("MenuItem", MenuItemSchema);
// const taskModel = mongoose.model("task", taskSchema);
// export default taskModel;
