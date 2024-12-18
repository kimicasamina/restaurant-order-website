// const MenuItem = require('../models/MenuItem');
// const Order = require('../models/Order');
import MenuItem from "../models/MenuItem";
import Order from "../models/Order";

export async function addMenuItem(req, res) {
  const { name, description, price } = req.body;
  try {
    const newItem = new MenuItem({
      name,
      description,
      price,
    });

    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
}

export async function viewOrders(req, res) {
  try {
    const orders = await Order.find()
      .populate("items.menuItem")
      .populate("user");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
}
