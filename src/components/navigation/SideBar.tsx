import { Link, useLocation } from "react-router-dom";
import { routes } from "../../routes/RouteList";

function SideBar({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  return (
    <div className="relative flex w-full bg-[#252836]">
      <div className="flex flex-col justify-between items-center fixed w-[5rem] md:w-[6rem] bg-[#1F1D2B] min-h-screen">
        <div className="flex flex-col justify-start relative overflow-x-hidden mt-8 w-full pl-2">
          {routes.map(({ name, icon, path }, idx) => (
            <Link
              to={path}
              key={name}
              className={`w-full flex flex-row justify-center p-3 md:p-4 ${
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
        </div>
      </div>
      <div className="min-h-screen overflow-y-auto w-[calc(100vw-5rem)] ml-[5rem] md:w-[calc(100vw-6rem)] md:ml-[6rem] text-white">
        {children}
      </div>
    </div>
  );
}

export default SideBar;
