import { useContext } from "react";
import AddContext from "../contex/AddContext";

function SetFrequency() {
  const { setAccount } = useContext(AddContext);

  return (
    <div className=" absolute top-0 right-0">
      <div className="w-[100vw] sm:w-[400px] h-screen p-3 pl-8 rounded-2xl mx-auto  bg-slate-50 shadow">
        <div
          onClick={() => setAccount("")}
          className="text-3xl font-bold pb-5 text-blue-800 cursor-pointer"
        >
          x
        </div>
        <h1 className="text-blue-700 text-2xl text-left font-semibold">
          Set frequency
        </h1>
        <p className="text-gray-500 text-left mb-6 text-sm">
          Tailor your debit schedule to match your financial needs.
        </p>
        <div className=" mb-5">
          <h3 className="text-gray-500 text-left mb-10 text-sm font-semibold">
            Select Frequency
          </h3>
          <div className=" bg-blue-200 text-blue-600 w-[70%] sm:w-full text-sm font-semibold p-3 rounded">
            <p className=" w-[80%]">
              The standard amount for saving target is capped at 700,000
            </p>
          </div>
        </div>
        <form action="" className="flex flex-col gap-3 w-[90%]">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-500 font-semibold">
              How much do you want to save weekly?
            </label>

            <input
              type="number"
              placeholder="Min(4,000)"
              className="bg-gray-300 rounded h-[40px] pl-3 w-full"
            />
          </div>

          <div className="flex flex-col gap-1 pt-3">
            <label className="text-sm text-gray-500 font-semibold">
              Set start date
            </label>
            <input
              type="date"
              placeholder="Eg: Philosophy"
              className="bg-gray-300 rounded h-[40px] pl-3 w-full"
            />
          </div>

          <button className="bg-blue-700 text-white w-[100%] mx-auto mt-12 rounded h-[40px]">
            Finish
          </button>
        </form>
      </div>
    </div>
  );
}

export default SetFrequency;
