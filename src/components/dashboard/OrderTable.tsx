import { orders } from "./OrderData";

const OrderTable = () => {
  return (
    <div className="bg-darkbg no-scrollbar overflow-y-auto w-full rounded-lg p-5">
      <div className="text-xl font-semibold">Order Report</div>
      <div className="w-full overflow-x-auto no-scrollbar">
        <div className="inline-block min-w-full align-middle">
          <table className="min-w-full divide-y divide-lightbg">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left font-medium text-white sm:pl-0"
                >
                  Customer
                </th>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left font-medium text-white sm:pl-0"
                >
                  Menu
                </th>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left font-medium text-white sm:pl-0"
                >
                  Total Payment
                </th>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left font-medium text-white sm:pl-0"
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="">
              {orders.map((item) => (
                <tr key={item.customer} className="">
                  <td className="whitespace-nowrap flex flex-row items-center py-2 pl-4 pr-3 text-light-text sm:pl-0">
                    <div
                      className={`flex flex-row justify-center m-4 p-1 w-[2.8rem] h-[2.8rem] rounded-full bg-orange`}
                    >
                      <img src="/order.png" alt="" className="object-cover" />
                    </div>
                    {item.customer}
                  </td>
                  <td className="whitespace-nowrap py-2 text-light-text">
                    {item.menu}
                  </td>
                  <td className="whitespace-nowrap py-2 text-light-text">
                    ${item.payment}
                  </td>
                  <td className="whitespace-nowrap py-2">
                    {item.status === "Completed" && (
                      <div className="inline-flex items-center rounded-full bg-green/10 px-3 py-1 text-sm font-medium text-green ring-1 ring-inset ring-green/10">
                        {item.status}
                      </div>
                    )}
                    {item.status === "Preparing" && (
                      <div className="inline-flex items-center rounded-full bg-purple/10 px-3 py-1 text-sm font-medium text-purple ring-1 ring-inset ring-purple/10">
                        {item.status}
                      </div>
                    )}
                    {item.status === "Pending" && (
                      <div className="inline-flex items-center rounded-full bg-orange/10 px-3 py-1 text-sm font-medium text-orange ring-1 ring-inset ring-orange/10">
                        {item.status}
                      </div>
                    )}
                    {/* {item.status === "Paid" && (
                      <div className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                        {item.status}
                      </div>
                    )} */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderTable;
