import { orders } from "./OrderData";

const OrderTable = () => {
  return (
    <div className="bg-darkbg no-scrollbar overflow-y-auto w-full rounded-lg p-5">
      <div className="text-xl">Order Report</div>
      <div className="w-full overflow-x-auto no-scrollbar">
        <div className="inline-block min-w-full align-middle">
          <table className="min-w-full divide-y divide-gray-700 dark:divide-gray-600">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-lg font-medium text-gray-600 dark:text-gray-300 sm:pl-0"
                >
                  Customer
                </th>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-lg font-medium text-gray-600 dark:text-gray-300 sm:pl-0"
                >
                  Menu
                </th>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-lg font-medium text-gray-600 dark:text-gray-300 sm:pl-0"
                >
                  Total Payment
                </th>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-lg font-medium text-gray-600 dark:text-gray-300 sm:pl-0"
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
              {orders.map((item) => (
                <tr key={item.customer} className="">
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 font-medium text-gray-600 dark:text-gray-300 sm:pl-0">
                    {item.customer}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-gray-500 dark:text-gray-400">
                    {item.menu}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-gray-500 dark:text-gray-400">
                    ${item.payment}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4">
                    {item.status === "Completed" && (
                      <div className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                        {item.status}
                      </div>
                    )}
                    {item.status === "Preparing" && (
                      <div className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                        {item.status}
                      </div>
                    )}
                    {item.status === "Pending" && (
                      <div className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                        {item.status}
                      </div>
                    )}
                    {/* {item.status === "Paid" && (
                      <div className="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
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
