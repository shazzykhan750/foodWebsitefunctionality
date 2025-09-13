import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ item }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {item?.map((item) => (
        <>
          <div
            key={item.card.info.id}
            className=" flex justify-between border-b-2 my-5 p-2"
          >
            <div lassName="text-left">
              <span c>{item.card.info.name}</span>
              <span> - ₹ {item.card.info.price / 100}</span>
              <div>{item.card.info.description}</div>
            </div>
            <div className="relative">
              <img
                className="w-44"
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/" +
                  item.card.info.imageId
                }
                alt=""
              />
              <button
                className="absolute bottom-2 right-2 bg-amber-50 text-black px-2 py-1 rounded shadow"
                onClick={() => handleAddItem(item)}
              >
                + Add
              </button>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default ItemList;
