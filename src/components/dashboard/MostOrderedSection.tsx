import React from "react";

const dishes = [
  {
    name: "Spicy seasoned seafood noodles",
    image: "/image2.png",
    desc: "200 dishes ordered",
  },
  {
    name: "Grilled chicken with salad",
    image: "/image2.png",
    desc: "150 dishes ordered",
  },
  {
    name: "Vegetarian pasta",
    image: "/image2.png",
    desc: "100 dishes ordered",
  },
];

const MostOrderedSection = () => {
  return (
    <div className="flex relative flex-col bg-darkbg rounded-lg p-5 gap-2 w-full">
      <div className="text-xl font-semibold mb-2">Most Ordered</div>
      <div>
        {dishes.map(({ name, image, desc }) => (
          <div className="flex flex-row p-3 gap-4">
            <img
              alt={""}
              src={image}
              className="w-14 h-14 flex-none rounded-full bg-gray-100 object-cover object-center"
            />
            <div className="flex-auto space-y-1">
              <p className="font-medium">{name}</p>
              <p className="text-sm text-lighttext">{desc}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className={`w-full flex flex-row font-medium justify-center mt-4 p-3 rounded-xl text-primary bg-transparent border border-primary`}
      >
        View All
      </button>
    </div>
  );
};

export default MostOrderedSection;
