import React, { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const ResturantContainer = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const fetchRestaurants = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4595&lng=77.0266&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    const restArray =
      json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    console.log(restArray);

    setRestaurants(restArray);
    setFilteredRestaurants(restArray);
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);
  if (restaurants.length === 0) {
    return <Shimmer />;
  }

  if (restaurants.length === 0) return <div>No restaurants found</div>;
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search for restaurant, cuisine or a dish"
          className="w-1/2 border-2 border-gray-300 p-2 rounded-lg mt-4 mb-4"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
        />
        <button
          className="ml-4 bg-green-500 text-white px-4 py-2 rounded-lg"
          onClick={() => {
            const filteredRestaurants = restaurants.filter((restaurant) =>
              restaurant.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(filteredRestaurants);
          }}
        >
          Search
        </button>
        <button
          className="ml-4 bg-purple-500 text-white px-4 py-2 rounded-lg"
          onClick={() => {
            const filteredList = restaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4.5
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredRestaurants.map(({ info }) => (
          <Link to={"/resturant/" + info.id} key={info.id}>
            <ResturantCard restaurant={info} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default ResturantContainer;
