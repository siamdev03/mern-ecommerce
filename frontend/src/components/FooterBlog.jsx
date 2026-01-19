// src/components/FooterBlog.jsx
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "How to choose the best product online",
    excerpt:
      "Learn smart tips to choose quality products while shopping online.",
    image:
      "https://ambitbiomedix.com/wp-content/uploads/2019/05/how-to-choose-products.jpg",
  },
  {
    id: 2,
    title: "Top 10 gadgets you should buy in 2025",
    excerpt:
      "A curated list of trending gadgets that give the best value.",
    image:
      "https://1000logos.net/wp-content/uploads/2023/11/Top-50-Must-Have-Tech-Gadgets.jpg",
  },
  {
    id: 3,
    title: "Online shopping safety tips",
    excerpt:
      "Protect yourself from scams with these essential safety tips.",
    image:
      "https://www.microsoft.com/en-us/security/blog/wp-content/uploads/2021/11/Shopping.jpg",
  },
];

export default function FooterBlog() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">
          From Our Blog
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {blog.excerpt}
                </p>

                <Link
                  to={`/blog/${blog.id}`}
                  className="inline-block mt-4 text-blue-600 font-medium hover:underline"
                >
                  Read more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
