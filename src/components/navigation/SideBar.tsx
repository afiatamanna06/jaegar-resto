import { Link, useLocation } from "react-router-dom";
import { routes } from "../../routes/RouteList";
import { IoLogOutOutline } from "react-icons/io5";

function SideBar({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  return (
    <div className="relative flex w-full bg-[#252836]">
      <div className="flex flex-col justify-between items-center fixed w-[5rem] md:w-[7rem] bg-[#1F1D2B] min-h-screen">
        <div className="flex flex-col justify-between h-screen relative overflow-x-hidden w-full pl-2">
          <div
            className={`flex flex-row justify-center m-4 p-2 rounded-xl bg-orange-400/20`}
          >
            <img src="/store.png" alt="" />
          </div>
          {routes.map(({ name, icon, path }, idx) => (
            <Link
              to={path}
              key={name}
              className={`w-full flex flex-row justify-center py-3 md:py-4 pl-3 md:pl-4 pr-4 md:pr-6 ${
                location.pathname.includes(path)
                  ? "bg-[#252836] rounded-l-xl"
                  : "bg-transparent"
              }`}
            >
              <div
                className={`w-full flex flex-row justify-center p-3 md:p-4 rounded-xl ${
                  location.pathname.includes(path)
                    ? "text-white bg-orange-500"
                    : "text-orange-500 bg-transparent"
                }`}
              >
                {icon}
              </div>
            </Link>
          ))}
          <div
            className={`w-full flex flex-row justify-center p-3 md:p-4 focus:bg-[#252836] focus:rounded-l-xl
                  bg-transparent
              `}
          >
            <button
              className={`w-full flex flex-row justify-center p-3 md:p-4 rounded-xl focus:text-white focus:bg-orange-500 text-orange-500 bg-transparent
                `}
            >
              <IoLogOutOutline size={30} />
            </button>
          </div>
        </div>
      </div>
      <div className="min-h-screen overflow-y-auto w-[calc(100vw-5rem)] ml-[5rem] md:w-[calc(100vw-7rem)] md:ml-[7rem] text-white">
        {children}
      </div>
    </div>
  );
}

export default SideBar;
