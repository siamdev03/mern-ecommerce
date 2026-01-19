import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cartItems, removeFromCart } = useCart();

  if (cartItems.length === 0)
    return <p className="text-center mt-10">Cart is empty</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Cart</h1>

      {cartItems.map((item) => (
        <div key={item._id} className="mb-3">
          <h2>{item.name}</h2>
          <p>Qty: {item.quantity}</p>
          <button
            onClick={() => removeFromCart(item._id)}
            className="btn btn-error btn-sm"
          >
            Remove
          </button>
        </div>
      ))}

      <Link to="/checkout" className="btn btn-primary mt-4">
        Go to Checkout
      </Link>
    </div>
  );
}
