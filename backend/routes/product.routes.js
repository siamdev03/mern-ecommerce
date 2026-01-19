import express from "express";
import Product from "../models/Product.js";
import { protect} from "../middleware/authMiddleware.js";

const router = express.Router();

// Get all products (Public)
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Get single product
router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
});

// Create product (Admin)
router.post("/", protect, async (req, res) => {
  const product = new Product(req.body);
  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

// Update product (Admin)
router.put("/:id", protect,  async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  Object.assign(product, req.body);
  const updatedProduct = await product.save();

  res.json(updatedProduct);
});

// Delete product (Admin)
router.delete("/:id", protect,  async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  await product.deleteOne();
  res.json({ message: "Product removed" });
});

export default router;
