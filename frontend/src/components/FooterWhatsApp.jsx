import { FaWhatsapp } from "react-icons/fa";

export default function FooterWhatsApp() {
  const phoneNumber = "880123456789"; // ✅ Change to your WhatsApp number
  const message = "Hello! I want to inquire about your products.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition"
    >
      <FaWhatsapp size={24} />
    </a>
  );
}
