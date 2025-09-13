import React, { useEffect, useState } from "react";

const useResturantMenu = (id) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchResturantMenu();
  }, []);
  const fetchResturantMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9521781&lng=77.7221725&restaurantId=${id}&catalog_qa=undefined&query=Biryani&submitAction=ENTER`
    );
    const json = await data.json();
    // console.log(json?.data);
    setResInfo(json?.data);
  };
  return resInfo;
};
export default useResturantMenu;
