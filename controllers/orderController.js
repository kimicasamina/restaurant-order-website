// import Order, { find } from '../models/Order';
// import { findById } from '../models/MenuItem';
import Order from "../models/Order.js";
import MenuItem from "../models/MenuItem.js";
import User from "../models/User.js";

export async function placeOrder(req, res) {
  const { items } = req.body;
  try {
    const orderItems = [];
    let totalAmount = 0;

    const user = await User.findById(req.user.userId);

    for (let item of items) {
      const menuItem = await MenuItem.findById(item.menuItemId);
      totalAmount += menuItem.price * item.quantity;
      orderItems.push({ menuItem: menuItem._id, quantity: item.quantity });
    }

    const order = new Order({
      user: req.user.userId,
      items: orderItems,
      totalAmount,
      userAddress: user.address,
    });

    await order.save();
    res.status(201).json({
      orderDetails: {
        items: order.items,
        totolAmount: order.totalAmount,
        address: order.userAddress,
        userId: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
      },
    });
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
}

export async function getOrders(req, res) {
  try {
    const userId = req.user.userId;
    const user = await User.findById({ _id: userId });
    const orders = await Order.find({ user: userId }).populate(
      "items",
      "totalAmount",
      "userAddress"
    );
    res.json({
      orders,
    });
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
}
