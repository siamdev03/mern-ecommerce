import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cartItems } = useCart();

  const totalQty = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <div className="navbar bg-base-100 shadow-md px-6">
      {/* Logo */}
      <div className="flex-1">
        <Link to="/" className="text-xl font-bold">
          DreamSync Electronic Shop
        </Link>
      </div>

      {/* Menu */}
      <div className="flex items-center gap-6">
        <Link to="/shop">Shop</Link>
        <Link to="/login">Login</Link>

        {/* 🛒 Cart Icon */}
        <Link to="/cart" className="relative">
          {/* Icon */}
          <span className="text-2xl">🛒</span>

          {/* Badge */}
          {totalQty > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {totalQty}
            </span>
          )}
          
        </Link>
      </div>
    </div>
  );
}
