import { IMG_URL_CDN } from "../constants";

const FoodItem = ({
  imageId,
  name,
  description,
  category,
  price,
}) => {
  return (
    <div className="w-56 rounded-md shadow-lg p-6 mb-4">
      <img
        className="w-full h-40 object-cover rounded-md mb-4"
        src={IMG_URL_CDN + imageId}
      />
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <h4 className="text-gray-500 mb-2">{category}</h4>
      <h4 className="text-gray-500 mb-2">Price : Rs.{price / 100} /-</h4>
      
    </div>
  );
};

export default FoodItem;