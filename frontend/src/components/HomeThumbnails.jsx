import homeThumbnails from "../data/homeThumbnails";
import ThumbnailCard from "./ThumbnailCard";

export default function HomeThumbnails() {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-8">
      <h2 className="text-xl font-bold mb-4">Shop by Category</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {homeThumbnails.map((item) => (
          <ThumbnailCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
