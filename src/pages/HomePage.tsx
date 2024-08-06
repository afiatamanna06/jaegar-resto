import React from "react";
import { formatDate } from "../utils/formatDate";

const HomePage = () => {
  const date = new Date();
  return (
    <div className="h-screen w-full overflow-y-auto p-8 font-barlow">
      <div className="mb-2 font-barlow text-3xl font-semibold text-night-800">
        Jaegar Resto
      </div>
      <div className="mb-8 text-lighttext">{formatDate(date)}</div>
    </div>
  );
};

export default HomePage;
