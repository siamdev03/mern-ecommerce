import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [toast, setToast] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) setCartItems(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

const addToCart = (product) => {
setCartItems((prev) => {
  // check if product already exists
  const exist = prev.find((i) => i._id === product._id);
  if (exist) {
    return prev.map((i) =>
      i._id === product._id
        ? { ...i, quantity: i.quantity + 1 }
        : i
    );
  }
  // Add new product
  return [...prev, { ...product, quantity: 1 }];
});

  // 🔔 Show popup
  setToast("🛒 Product added to cart!");
  setTimeout(() => setToast(""), 2000);
};

  const removeFromCart = (id) =>
    setCartItems((prev) => prev.filter((i) => i._id !== id));

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, toast }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
}
