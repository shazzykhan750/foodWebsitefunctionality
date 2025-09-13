import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const cartLength = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between items-center border-b-2 border-gray-200 p-4">
      <div>
        <img
          className="w-32"
          src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png"
          alt="swiggy logo"
        />
      </div>
      <div>
        <ul className="flex gap-10 text-lg font-medium">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/grocery">
            <li>Grocery</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/cart">
            <li>
              Cart <span className=" font-bold">({cartLength.length})</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
