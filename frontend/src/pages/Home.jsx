import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import HomeThumbnails from "../components/HomeThumbnails";
export default function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("featured"); // featured / low-high / high-low

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/products`);
        setProducts(res.data);
        setFilteredProducts(res.data);
        setCategories(["All", ...new Set(res.data.map((p) => p.category))]);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProducts();
  }, []);

  const handleCategory = (category) => {
    setSelectedCategory(category);
    filterProducts(category, sortOption);
  };

  const handleSort = (option) => {
    setSortOption(option);
    filterProducts(selectedCategory, option);
  };

  const filterProducts = (category, sort) => {
    let temp = [...products];

    // Category filter
    if (category !== "All") temp = temp.filter((p) => p.category === category);

    // Sort
    switch (sort) {
      case "featured":
        temp = temp.filter((p) => p.featured);
        break;
      case "low-high":
        temp = temp.sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        temp = temp.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilteredProducts(temp);
  };

  return (
    <>
      {/* Hero section */}
      <div className="bg-gray-100 h-56 flex items-center justify-center">
        <h1 className="text-3xl font-bold">Welcome to DreamSync Electronic Shop.</h1>
      </div>

      {/* Thumbnails */}
      <HomeThumbnails />

      <div className="flex flex-col md:flex-row gap-6 p-6">

        {/* Sidebar Categories */}
        <div className="w-full md:w-1/5 bg-gray-400 p-4 rounded-lg">
          <h2 className="font-bold mb-4 text-lg">Categories</h2>
          <ul className="flex flex-col gap-2">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  className={`w-full text-left px-3 py-2 rounded ${
                    selectedCategory === cat
                      ? "bg-blue-600 text-black"
                      : "hover:bg-blue-400"
                  }`}
                  onClick={() => handleCategory(cat)}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Products + Sort Dropdown */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Products</h2>

            {/* Amazon-style Sort Dropdown */}
            <select
              value={sortOption}
              onChange={(e) => handleSort(e.target.value)}
              className="select select-bordered w-48"
            >
              <option value="featured">Featured</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))
            ) : (
              <p className="text-center text-gray-500 mt-10">
                No products found
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
