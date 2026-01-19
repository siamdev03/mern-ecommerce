import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300">
      {/* Image */}
      <figure className="p-4">
        <img
          src={product.image}
          alt={product.name}
          className="h-40 object-contain"
        />
      </figure>

      {/* Content */}
      <div className="card-body pt-0">
        <h2 className="card-title text-lg">{product.name}</h2>

        <p className="text-primary font-bold text-xl">
          ৳ {product.price}
        </p>

        {/* Buttons */}
        <div className="card-actions mt-3 flex justify-between items-center">
          <Link
            to={`/product/${product._id}`}
            className="btn btn-outline btn-sm"
          >
            View
          </Link>

          <button
            onClick={() => addToCart(product)}
            className="btn btn-primary btn-sm flex items-center gap-2 hover:scale-105 transition"
          >
            🛒
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
