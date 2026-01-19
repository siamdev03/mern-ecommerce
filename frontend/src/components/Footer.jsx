import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import FooterQuickLinks from "./FooterQuickLinks";
import FooterBlog from "./FooterBlog";
import FooterWhatsApp from "./FooterWhatsApp";
export default function Footer() {
  return (
    <>
      <FooterQuickLinks />   {/* ✅ Quick Links */}
      <FooterBlog />
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold">DreamSync electronics Shop.</h2>
          <p className="mt-2 text-sm">
            Best quality products at affordable prices.
          </p>
        </div>

        

        {/* Payment Methods */}
        <div>
          <h3 className="font-semibold mb-3">Payment Methods</h3>
          <div className="flex items-center gap-3 flex-wrap">
            <img src="/src/assets/payments/bkash.png" alt="bkash" className="h-8" />
            <img src="/src/assets/payments/nagad.png" alt="nagad" className="h-8" />
            
            <img src="/src/assets/payments/mastercard.png" alt="mastercard" className="h-8" />
            <img src="/src/assets/payments/paypal.png" alt="paypal" className="h-8" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t text-center py-4 text-sm">
        © {new Date().getFullYear()} DreamSync Shop. All rights reserved.
      </div>

      <footer className="bg-base-200 text-base-content mt-10">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Logo / Brand */}
          <div className="flex flex-col items-start">
            <h1 className="text-2xl font-bold mb-2">DreamSync Electronics Shop</h1>
            <p className="text-gray-600">Your favorite ecommerce store</p>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-start">
            <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
            <div className="flex gap-3 mt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                <FaFacebookF size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-600">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700">
                <FaInstagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-start">
            <h2 className="text-lg font-semibold mb-2">Contact</h2>
            <p>Email: support@DreamSync Electronics Shop.com</p>
            <p>Phone: +880 1234 567890</p>
          </div>

        </div>

        <div className="text-center py-4 border-t border-gray-300 text-gray-500">
          &copy; {new Date().getFullYear()} DreamSync Electronics Shop. All rights reserved.
        </div>
      </footer>
      <FooterWhatsApp /> {/* ✅ WhatsApp floating button */}
    </>
  );
}
