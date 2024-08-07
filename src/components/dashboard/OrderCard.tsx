import {
  HiArrowCircleDown,
  HiArrowCircleUp,
  HiArrowDown,
  HiArrowUp,
  HiOutlineTrendingDown,
  HiOutlineTrendingUp,
} from "react-icons/hi";

interface propTypes {
  title?: string;
  amount?: string;
  rate?: string;
  up?: boolean;
  icon?: any;
  color?: string;
}

function OrderCard({ title, rate, amount, up, icon, color }: propTypes) {
  return (
    <div className="flex relative flex-col bg-darkbg rounded-lg p-5 gap-2 h-[12.5rem] md:h-[100%] flex-1 lg:min-w-[16rem]">
      <div className="flex flex-row items-center gap-3">
        {color === "purple" && (
          <div className="p-2 sm:p-3 text-purple bg-bg rounded-lg w-min">
            {icon}
          </div>
        )}
        {color === "orange" && (
          <div className="p-2 sm:p-3 text-orange bg-bg rounded-lg w-min">
            {icon}
          </div>
        )}
        {color === "blue" && (
          <div className="p-2 sm:p-3 text-blue bg-bg rounded-lg w-min">
            {icon}
          </div>
        )}
        <div className="flex flex-col lg:flex-row lg:items-end text-lg gap-1 font-medium text-gray-500 dark:text-gray-400">
          {up ? (
            <div className="flex items-center text-lightgreen gap-1 leading-5">
              +{rate}
              <div className="ml-1 p-1 bg-lightgreen/10 rounded-full w-min">
                <HiArrowUp />
              </div>
            </div>
          ) : (
            <div className="flex items-center text-red gap-1 leading-5">
              -{rate}
              <div className="ml-1 p-1 bg-red/10 rounded-full w-min">
                <HiArrowDown />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="mb-2 mt-2 text-2xl md:text-3xl font-medium text-gray-700 dark:text-white leading-5">
        {amount}
      </div>

      <div className="md:text-lg leading-5 font-medium text-lighttext">
        {title}
      </div>
    </div>
  );
}

export default OrderCard;
