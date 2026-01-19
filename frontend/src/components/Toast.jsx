import { useCart } from "../context/CartContext";

export default function Toast() {
  const { toast } = useCart();

  if (!toast) return null;

  return (
    <div className="fixed top-5 right-5 z-50">
      <div className="bg-green-600 text-white px-4 py-2 rounded shadow-lg">
        {toast}
      </div>
    </div>
  );
}
