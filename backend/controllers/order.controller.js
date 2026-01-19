import Order from "../models/Order.js";

export const createOrder = async (req, res) => {
  try {
    const { items, totalPrice, address, paymentMethod } = req.body;

    if (!items || items.length === 0) return res.status(400).json({ message: "Cart is empty" });

    const order = new Order({
      user: req.user._id,
      items,
      totalPrice,
      address,
      paymentMethod
    });
    
    const savedOrder = await order.save();
    res.status(201).json(savedOrder);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
