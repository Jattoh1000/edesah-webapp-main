import { useContext } from "react";
import AddContext from "../contex/AddContext";

function RecentTransaction() {
  const { transaction } = useContext(AddContext);

  return (
    <div className="mt-10 w-[100%]">
      <h2 className=" text-gray-500 font-semibold">Recent Transaction</h2>
      <div className="h-[300px] overflow-auto mt-5">
        {transaction.map((cur, index) => (
          <div
            key={index}
            className=" mb-4 flex gap-4 sm:w-[80%] justify-between items-center"
          >
            <div className="flex gap-5 items-center">
              <div className="h-[50px] w-[50px] bg-pink-300 rounded-full"></div>
              <div className=" flex flex-col">
                <p className=" text-sm font-semibold text-gray-700">
                  {cur.methodOfDeposit}
                </p>
                <p className=" text-sm text-gray-400">16-03-2024</p>
              </div>
            </div>
            <div className=" text-blue-600 font-semibold pr-4">
              &#8358; {cur.depositedAmount}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentTransaction;
