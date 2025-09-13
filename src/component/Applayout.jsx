import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";

const Applayout = () => {
  return (
    <Provider store={appStore}>
      <div>
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

export default Applayout;
