import React from "react";
import { dishesData } from "./DishesData";
import DishesCard from "./DishesCard";

const HotDishesTab = () => {
  return (
    <div>
      <div className="mb-2 font-barlow text-xl pt-2 font-semibold text-white">
        Choose Dishes
      </div>
      <div className="pt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dishesData.map(({ name, desc, price, image }, index) => (
          <DishesCard
            key={index}
            name={name}
            desc={desc}
            price={price}
            image={image}
          />
        ))}
      </div>
    </div>
  );
};

export default HotDishesTab;
