import React from "react";
import OrderTable from "../components/dashboard/OrderTable";

export const formatDate = (date: Date): string => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dayName = days[date.getDay()];
  const day = date.getDate();
  const monthName = months[date.getMonth()];
  const year = date.getFullYear();

  return `${dayName} ${day} ${monthName}, ${year}`;
};

const DashboardPage = () => {
  const date = new Date();
  return (
    <div className="h-screen w-full overflow-y-auto p-8 font-barlow">
      <div className="mb-2 font-barlow text-3xl font-semibold text-night-800">
        Dashboard
      </div>
      <div className="mb-8 text-lighttext">{formatDate(date)}</div>

      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="flex flex-col lg:w-[65%] xl:w-[70%]">
          <OrderTable />
        </div>
        <div className="flex flex-col gap-8 lg:w-[35%] xl:w-[30%]"></div>
      </div>
    </div>
  );
};

export default DashboardPage;
