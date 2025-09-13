import React from "react";
import DummyCard from "./DummyCard";
const Shimmer = () => {
  const dummyArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="flex flex-wrap justify-center">
      {dummyArray.map(() => (
        <DummyCard />
      ))}
    </div>
  );
};

export default Shimmer;
