import { useCart } from "../context/CartContext";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

export default function Checkout() {
  const { cartItems, clearCart } = useCart();
  const { isSignedIn, user } = useUser();
  const navigate = useNavigate();

  // 🔐 Redirect if not logged in
  useEffect(() => {
  if (!isSignedIn) {
    navigate("/login", {
      state: { from: "/checkout" },
    });
  }
}, [isSignedIn, navigate]);

  if (!isSignedIn) return null; // avoid flash message

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const placeOrder = async () => {
    const orderData = {
      items: cartItems.map(item => ({
        product: item.product._id,
        name: item.product.name,
        price: item.product.price,
        quantity: item.quantity,
      })),
      total: totalPrice,
      userId: user.id,
      email: user.emailAddresses[0].emailAddress,
    };

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/orders`,
        orderData,
        { withCredentials: true }
      );

      alert("✅ Order placed successfully!");
      clearCart();
      navigate("/checkout");
    } catch (err) {
      console.error(err);
      alert("❌ Order failed");
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        Checkout ({user.firstName})
      </h1>

      {cartItems.map(item => (
        <div
          key={item.product._id}
          className="flex justify-between border-b py-2"
        >
          <span>
            {item.product.name} × {item.quantity}
          </span>
          <span>
            ৳ {item.product.price * item.quantity}
          </span>
        </div>
      ))}

      <div className="mt-4 font-bold text-lg">
        Total: ৳ {totalPrice}
      </div>

      <button
        onClick={placeOrder}
        className="btn btn-primary w-full mt-6"
      >
        Place Order
      </button>
    </div>
  );
}
