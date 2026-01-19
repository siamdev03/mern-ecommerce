import { Link } from "react-router-dom";

const quickLinks = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Shop", path: "/shop" },
  { id: 3, title: "Cart", path: "/cart" },
  { id: 4, title: "Checkout", path: "/checkout" },
  { id: 5, title: "Login", path: "/login" },
  { id: 6, title: "Register", path: "/register" },
  { id: 7, title: "Blog", path: "/blog" },
  { id: 8, title: "Contact", path: "/contact" }, // optional
];

export default function FooterQuickLinks() {
  return (
    <div className="bg-gray-800 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-6">
        {quickLinks.map((link) => (
          <div key={link.id}>
            <h4 className="text-white font-semibold mb-2">{link.title}</h4>
            <ul>
              <li>
                <Link
                  to={link.path}
                  className="hover:text-yellow-400 transition"
                >
                  Go
                </Link>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
