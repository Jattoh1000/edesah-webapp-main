import { useContext } from "react";
import AddContext from "../contex/AddContext";

function SchoolDetails() {
  const { setAccount } = useContext(AddContext);

  return (
    <div className=" absolute top-0 right-0">
      <div className=" w-[100vw] sm:w-[400px] h-screen p-3 pl-8 rounded-2xl mx-auto  bg-slate-50 shadow">
        <div
          onClick={() => setAccount("")}
          className="text-3xl font-bold pb-10 text-blue-800 cursor-pointer"
        >
          x
        </div>
        <h1 className="text-blue-700 text-2xl text-left font-semibold">
          Enter school details
        </h1>
        <p className="text-gray-500 text-left mb-10 text-sm w-[50%] sm:w-full">
          We'd love to know more about you. Please fill the form below
        </p>
        <form action="" className="flex flex-col gap-3 sm:w-[90%]">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-500 font-semibold">
              What university are you in?
            </label>

            <input
              type="text"
              placeholder="Eg: University of Benin"
              className="bg-gray-300 rounded h-[40px] pl-3 w-full"
            />
          </div>

          <div className="flex flex-col gap-1 pt-3">
            <label className="text-sm text-gray-500 font-semibold">
              What university is your Course of Study?
            </label>
            <input
              type="text"
              placeholder="Eg: Philosophy"
              className="bg-gray-300 rounded h-[40px] pl-3 w-full"
            />
          </div>

          <div className="flex flex-col gap-1 pt-3">
            <label className="text-sm text-gray-500 font-semibold">
              What is the duration of your course?
            </label>

            <select className="bg-gray-300 rounded h-[40px] pl-3 w-full">
              <option value="4 years">4 years</option>
              <option value="5 years">5 years</option>
              <option value="6 years">6 years</option>
            </select>
          </div>

          <button className="bg-blue-700 text-white w-[100%] mx-auto mt-12 rounded h-[40px]">
            Finish
          </button>
        </form>
      </div>
    </div>
  );
}

export default SchoolDetails;
