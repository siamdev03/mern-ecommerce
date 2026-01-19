import express from "express";
import Order from "../models/Order.js";
import { createOrder } from "../controllers/order.controller.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", createOrder);
router.post("/", protect, async (req, res) => {
  const { cartItems, totalAmount } = req.body;

  if (!cartItems || cartItems.length === 0) {
    return res.status(400).json({ message: "Cart is empty" });
  }

  try {
    const order = await Order.create({
      user: req.user._id,
      items: cartItems.map((item) => ({
        product: item._id,
        quantity: item.quantity,
      })),
      total: totalAmount,
    });

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: "Order failed" });
  }
});

export default router;
