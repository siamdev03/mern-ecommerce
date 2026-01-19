import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  description: String,
  category: {
    type: String,
    required: true,
  },
}, { timestamps: true });

export default mongoose.model("Product", productSchema);
