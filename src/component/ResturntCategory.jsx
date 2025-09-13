import React from "react";
import ItemList from "./ItemList";

const ResturntCategory = ({ data = {} }) => {
  const [menuToggle, setMenuToggle] = React.useState(false);

  const handleToggle = () => setMenuToggle((s) => !s);

  return (
    <div className="w-6/12 mx-auto my-4 p-4 bg-green-200">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold">{data?.title || "Category"}</h1>

        <button
          onClick={handleToggle}
          aria-expanded={menuToggle}
          className="text-xl"
        >
          {menuToggle ? "🔼" : "🔽"}
        </button>
      </div>

      {menuToggle && (
        <div className="mt-4">
          <ItemList item={data?.itemCards || []} />
        </div>
      )}
    </div>
  );
};

export default ResturntCategory;
