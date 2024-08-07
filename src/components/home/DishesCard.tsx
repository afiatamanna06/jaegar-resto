import React from "react";
import { Dish } from "./DishesData";

const DishesCard = ({ name, image, desc, price }: Dish) => {
  return (
    <div className="max-w-sm relative rounded-xl p-5 shadow-lg my-6 bg-darkbg">
      <div className="relative">
        <img
          className="mx-auto -mt-10 h-40 w-auto"
          src={image}
          alt={name}
          style={{ position: "relative", top: "-20px" }}
        />
      </div>

      <div className="px-6 py-2 flex flex-col items-center">
        <div className="font-bold text-lg text-center mb-2">{name}</div>

        <p className="text-base text-center">${price.toFixed(2)}</p>
        <p className="text-base text-center text-lighttext">{desc}</p>
      </div>
    </div>
  );
};

export default DishesCard;
