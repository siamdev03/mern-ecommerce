import { useNavigate } from "react-router-dom";

export default function ThumbnailCard({ item }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/category/${item.category}`)}
      className="cursor-pointer bg-white rounded-lg shadow hover:shadow-lg transition p-3"
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-36 object-cover rounded"
      />
      <h3 className="mt-2 font-semibold text-center">{item.title}</h3>
    </div>
  );
}
