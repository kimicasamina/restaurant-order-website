// const MenuItem = require('../models/MenuItem');
// const Order = require('../models/Order');
import MenuItem from "../src/api/models/MenuItem.js";
import Order from "../src/api/models/Order.js";

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

export async function getMenuItem(req, res) {
  try {
    const menus = await MenuItem.find({});
    res.status(201).json(menus);
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
}

// TODO: update menu, delete menu
export async function updateMenuItem(req, res) {
  const { menuItemId, name, description, price, image } = req.body;
  try {
    const menu = await MenuItem.findByIdAndUpdate(
      { _id: menuItemId },
      {
        name,
        description,
        price,
        image,
      }
    );
    res.status(201).json(menu);
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
}

export async function viewOrders(req, res) {
  try {
    const orders = await Order.find()
      .populate("items.menuItem")
      .populate("user", "-password");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
}
