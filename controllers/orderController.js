// import Order, { find } from '../models/Order';
// import { findById } from '../models/MenuItem';
import Order from "../models/Order";
import MenuItem from "../models/MenuItem";

export async function placeOrder(req, res) {
  const { items } = req.body;
  try {
    const orderItems = [];
    let totalAmount = 0;

    for (let item of items) {
      const menuItem = await MenuItem.findById(item.menuItemId);
      totalAmount += menuItem.price * item.quantity;
      orderItems.push({ menuItem: menuItem._id, quantity: item.quantity });
    }

    const order = new Order({
      user: req.user.userId,
      items: orderItems,
      totalAmount,
    });

    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
}

export async function getOrders(req, res) {
  try {
    const orders = await Order.find({ user: req.user.userId }).populate(
      "items.menuItem"
    );
    res.json(orders);
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
}
