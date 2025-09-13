import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";
import ResturntCategory from "./ResturntCategory";
const ResturantMenu = () => {
  const { id } = useParams();

  const resInfo = useResturantMenu(id);
  if (!resInfo) {
    return <Shimmer />;
  }

  const info = resInfo?.cards?.[2]?.card?.card?.info || {};
  const { name, cuisines = [], costForTwo } = info;

  console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const catogries =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="p-4 m-4 text-center ">
      <h1 className="font-bold text-3xl">{name}</h1>
      <p>
        {cuisines.join(",")}-{costForTwo}
      </p>

      {catogries.map((catagory) => (
        <ResturntCategory data={catagory.card?.card} />
      ))}
    </div>
  );
};

export default ResturantMenu;
