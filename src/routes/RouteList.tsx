import { ReactNode } from "react";
import {
  HiOutlineCollection,
  HiOutlineReceiptTax,
  HiOutlineUserGroup,
  HiOutlineChartPie,
  HiOutlineDocumentText,
  HiOutlineHome,
} from "react-icons/hi";
import { GoHome } from "react-icons/go";
import { LuBadgePercent, LuSettings } from "react-icons/lu";
import { IoMailOutline } from "react-icons/io5";
import { FiBell } from "react-icons/fi";
import Orders from "../pages/OrdersPage";
import SettingsPage from "../pages/SettingsPage";

type RouteType = {
  name: string;
  path: string;
  element: ReactNode;
  icon?: ReactNode;
};

export const routes: RouteType[] = [
  {
    name: "Home",
    path: "/",
    element: <></>,
    icon: <GoHome size={30} />,
  },
  {
    name: "Staff",
    path: "/staff",
    element: <Orders />,
    icon: <LuBadgePercent size={30} />,
  },
  {
    name: "Analytics",
    path: "/analytics",
    element: <Orders />,
    icon: <HiOutlineChartPie size={30} />,
  },
  {
    name: "Records",
    path: "/records",
    element: <Orders />,
    icon: <IoMailOutline size={30} />,
  },
  {
    name: "Records",
    path: "/records",
    element: <Orders />,
    icon: <FiBell size={30} />,
  },
  {
    name: "Settings",
    path: "/settings",
    element: <SettingsPage />,
    icon: <LuSettings size={30} />,
  },
];
