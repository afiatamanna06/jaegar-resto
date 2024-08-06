import React, { useState } from 'react';

const HomeTabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div>
      <div className="flex border-b border-lightbg">
        <button
          className={`px-4 py-2 focus:outline-none font-medium ${
            activeTab === 1 ? 'text-primary border-b-2 border-primary' : 'text-white hover:text-primary'
          }`}
          onClick={() => setActiveTab(1)}
        >
          Hot Dishes
        </button>
        <button
          className={`px-4 py-2 focus:outline-none font-medium ${
            activeTab === 2 ? 'text-primary border-b-2 border-primary' : 'text-white hover:text-primary'
          }`}
          onClick={() => setActiveTab(2)}
        >
          Cold Dishes
        </button>
        <button
          className={`px-4 py-2 focus:outline-none font-medium ${
            activeTab === 3 ? 'text-primary border-b-2 border-primary' : 'text-white hover:text-primary'
          }`}
          onClick={() => setActiveTab(3)}
        >
          Soup
        </button>
        <button
          className={`px-4 py-2 focus:outline-none font-medium ${
            activeTab === 4 ? 'text-primary border-b-2 border-primary' : 'text-white hover:text-primary'
          }`}
          onClick={() => setActiveTab(4)}
        >
          Grill
        </button>
        <button
          className={`px-4 py-2 focus:outline-none font-medium ${
            activeTab === 5 ? 'text-primary border-b-2 border-primary' : 'text-white hover:text-primary'
          }`}
          onClick={() => setActiveTab(5)}
        >
          Appetizer
        </button>
        <button
          className={`px-4 py-2 focus:outline-none font-medium ${
            activeTab === 6 ? 'text-primary border-b-2 border-primary' : 'text-white hover:text-primary'
          }`}
          onClick={() => setActiveTab(6)}
        >
          Dessert
        </button>
      </div>
      <div className="p-4">
        {activeTab === 1 && <div>Content for Tab 1</div>}
        {activeTab === 2 && <div>Content for Tab 2</div>}
        {activeTab === 3 && <div>Content for Tab 3</div>}
      </div>
    </div>
  );
};

export default HomeTabs;
