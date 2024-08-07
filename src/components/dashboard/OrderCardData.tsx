import React from "react"
import { HiOutlineCurrencyDollar, HiOutlineUsers } from "react-icons/hi"
import { LuBookmarkMinus } from "react-icons/lu"

export const orderData = [
    {
        title: "Total Revenue",
        amount: "$10,243.00",
        rate: "32.40%",
        up: true,
        icon: <HiOutlineCurrencyDollar size={20} />,
        color: "purple",
    },
    {
        title: "Total Dish Ordered",
        amount: "23,456",
        rate: "12.40%",
        up: false,
        icon: <LuBookmarkMinus size={20} />,
        color: "orange",
    },
    {
        title: "Total Customer",
        amount: "1,234",
        rate: "2.40%",
        up: true,
        icon: <HiOutlineUsers size={20} />,
        color: "blue",
    },
]