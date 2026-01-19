import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1612831455545-7c6d31f982a0?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          All Kinds of Electronics E-commerce Shop
        </h1>

        <p className="text-gray-200 max-w-xl mx-auto mb-8 text-lg">
          Fully responsive shopping experience built with React, Node, MongoDB
          and Tailwind CSS.
        </p>

        <Link
          to="/shop"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg text-lg transition"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}
