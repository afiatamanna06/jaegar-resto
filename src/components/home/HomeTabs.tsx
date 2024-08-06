import React, { useState } from "react";
import HotDishesTab from "./HotDishesTab";

const HomeTabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div>
      <div className="flex flex-wrap md:flex-row border-b border-lightbg">
        <button
          className={`px-4 py-2 focus:outline-none font-medium ${
            activeTab === 1
              ? "text-primary border-b-2 border-primary"
              : "text-white hover:text-primary"
          }`}
          onClick={() => setActiveTab(1)}
        >
          Hot Dishes
        </button>
        <button
          className={`px-4 py-2 focus:outline-none font-medium ${
            activeTab === 2
              ? "text-primary border-b-2 border-primary"
              : "text-white hover:text-primary"
          }`}
          onClick={() => setActiveTab(2)}
        >
          Cold Dishes
        </button>
        <button
          className={`px-4 py-2 focus:outline-none font-medium ${
            activeTab === 3
              ? "text-primary border-b-2 border-primary"
              : "text-white hover:text-primary"
          }`}
          onClick={() => setActiveTab(3)}
        >
          Soup
        </button>
        <button
          className={`px-4 py-2 focus:outline-none font-medium ${
            activeTab === 4
              ? "text-primary border-b-2 border-primary"
              : "text-white hover:text-primary"
          }`}
          onClick={() => setActiveTab(4)}
        >
          Grill
        </button>
        <button
          className={`px-4 py-2 focus:outline-none font-medium ${
            activeTab === 5
              ? "text-primary border-b-2 border-primary"
              : "text-white hover:text-primary"
          }`}
          onClick={() => setActiveTab(5)}
        >
          Appetizer
        </button>
        <button
          className={`px-4 py-2 focus:outline-none font-medium ${
            activeTab === 6
              ? "text-primary border-b-2 border-primary"
              : "text-white hover:text-primary"
          }`}
          onClick={() => setActiveTab(6)}
        >
          Dessert
        </button>
      </div>
      <div className="p-4">{activeTab === 1 && <HotDishesTab />}</div>
    </div>
  );
};

export default HomeTabs;
