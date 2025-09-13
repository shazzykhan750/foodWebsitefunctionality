import React from "react";

const ResturantCard = ({ restaurant }) => {
  const { name, cuisines, cloudinaryImageId, avgRating } = restaurant;
  return (
    <div className="w-64 h-72 border-2 border-gray-200 m-4 p-4 rounded-lg hover:shadow-lg">
      <img
        className="w-full h-36 rounded-lg"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="restaurant"
      />
      <h3 className="font-bold text-lg mt-2">{name}</h3>
      <p className="text-sm text-gray-600 mt-1">{cuisines}</p>
      <p className="text-sm text-gray-600 mt-1">Rating: {avgRating} ⭐</p>
    </div>
  );
};

export default ResturantCard;
