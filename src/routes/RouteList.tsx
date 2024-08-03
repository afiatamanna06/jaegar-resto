import { ReactNode } from "react";
import {
  HiOutlineCollection,
  HiOutlineReceiptTax,
  HiOutlineUserGroup,
  HiOutlineChartPie,
  HiOutlineDocumentText,
} from "react-icons/hi";
import Orders from "../pages/OrdersPage";

type RouteType = {
  name: string;
  path: string;
  element: ReactNode;
  icon?: ReactNode;
};

export const routes: RouteType[] = [
  {
    name: "Orders",
    path: "/",
    element: <Orders />,
    icon: <HiOutlineReceiptTax size={30} />,
  },
  {
    name: "Staff",
    path: "/staff",
    element: <Orders />,
    icon: <HiOutlineUserGroup size={30} />,
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
    icon: <HiOutlineDocumentText size={30} />,
  },
];
