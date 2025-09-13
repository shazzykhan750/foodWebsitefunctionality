import React from "react";
import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import Shimmer from "./Shimmer";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  if (!cartItem) return <Shimmer />;
  return (
    <div className=" text-center">
      <h1>Cart</h1>
      <ItemList item={cartItem} />
    </div>
  );
};

export default Cart;
