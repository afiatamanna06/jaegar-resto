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
import SettingsPage from "../pages/SettingsPage";
import DashboardPage from "../pages/DashboardPage";

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
    name: "Offers",
    path: "/offers",
    element: <></>,
    icon: <LuBadgePercent size={30} />,
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    element: <DashboardPage />,
    icon: <HiOutlineChartPie size={30} />,
  },
  {
    name: "Messages",
    path: "/messages",
    element: <></>,
    icon: <IoMailOutline size={30} />,
  },
  {
    name: "Notifications",
    path: "/notifications",
    element: <></>,
    icon: <FiBell size={30} />,
  },
  {
    name: "Settings",
    path: "/settings",
    element: <SettingsPage />,
    icon: <LuSettings size={30} />,
  },
];
