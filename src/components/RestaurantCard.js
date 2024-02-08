import { IMG_URL_CDN } from "../constants";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}) => {
  return (
    <div className="w-56 rounded-md shadow-lg p-6 mb-4">
      <img
        className="w-full h-40 object-cover rounded-md mb-4"
        src={IMG_URL_CDN + cloudinaryImageId}
      />
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <h4 className="text-gray-500 mb-2">{cuisines.join(", ")}</h4>
      <h4 className="text-gray-500 mb-2">{area}</h4>
      <div className="flex items-center space-x-2">
        {Array.from({ length: Math.floor(avgRating) }, (_, index) => (
          <span key={index} className="text-yellow-500">
            &#9733; {/* Unicode character for a solid star */}
          </span>
        ))}
        {avgRating % 1 !== 0 && (
          <span className="text-yellow-500">
            &#9733;&#189; {/* Unicode character for a half star */}
          </span>
        )}
        <h4 className="text-gray-700">{avgRating}</h4>
      </div>

      <h4 className="text-gray-700 mb-2">{lastMileTravelString}</h4>
      <h4 className="text-gray-700">{costForTwoString}</h4>
    </div>
  );
};

export default RestaurantCard;