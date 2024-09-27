import { useContext } from "react";
import AddContext from "../contex/AddContext";

function RequestApplication() {
  const { setAccount } = useContext(AddContext);
  return (
    <div className=" absolute top-0 right-0">
      <div className=""></div>
      <div className="w-full sm:w-[400px] p-6 rounded-2xl mx-auto bg-slate-50 shadow">
        <div
          onClick={() => setAccount(false)}
          className=" text-3xl font-bold text-blue-800 cursor-pointer"
        >
          x
        </div>
        <h1 className=" text-blue-700 text-2xl font-semibold py-3">
          Request application form
        </h1>

        <form action="" className=" flex flex-col gap-3 mx-auto w-[100%]">
          <div className="flex justify-between">
            <p className=" text-sm font-semibold text-gray-500 ">
              Choose service you want
            </p>
            <button className=" text-sm font-semibold text-blue-700 ">
              Select all
            </button>
          </div>
          <div className=" flex flex-col">
            <label className=" text-sm text-gray-500 ">
              What degree are you applying for(Master's/phD)
            </label>
            <select
              name=""
              id=""
              className=" bg-gray-300 rounded h-[40px] pl-3 text-black"
            >
              <option value="masters">Masters</option>
              <option value="phd">phD</option>
            </select>
          </div>

          <div className=" flex flex-col">
            <label className=" text-sm text-gray-500 ">
              What's your prospective field of study?
            </label>
            <input
              type="text"
              placeholder="Enter Text here"
              className=" bg-gray-300 rounded h-[40px] pl-3 text-black"
            />
          </div>

          <div className="flex items-center">
            <input type="checkbox" className="mr-2 h-4 w-4" />
            <label className=" text-base text-gray-900 font-semibold">
              Personalized List of Potential Schools
            </label>
          </div>

          <div className="flex items-center">
            <input type="checkbox" id="terms" className="mr-2 h-4 w-4" />
            <label className=" text-base text-gray-900 font-semibold">
              Academic CVs
            </label>
          </div>

          <div className="flex items-center">
            <input type="checkbox" id="terms" className="mr-2 h-4 w-4" />
            <label className=" text-base text-gray-900 font-semibold">
              SOP and/or Application Essays
            </label>
          </div>

          <div className="flex items-center">
            <input type="checkbox" id="terms" className="mr-2 h-4 w-4" />
            <label className=" text-base text-gray-900 font-semibold">
              Tailored Letters of Recommendation.
            </label>
          </div>

          <div className="flex items-center">
            <input type="checkbox" id="terms" className="mr-2 h-4 w-4" />
            <label className=" text-base text-gray-900 font-semibold">
              LinkedIn optimization
            </label>
          </div>

          <div className="flex items-center">
            <input type="checkbox" id="terms" className="mr-2 h-4 w-4" />
            <label className=" text-base text-gray-900 font-semibold">
              Guidance on Visa processing & Study permit
            </label>
          </div>

          <div className=" flex flex-col">
            <label className=" text-sm text-gray-500 ">
              Is there anything specific you're struggling with or concerned
              about in the application process?
            </label>
            <input
              type="text"
              placeholder=""
              className=" bg-gray-300 rounded h-[40px] pl-3 text-black"
            />
          </div>

          <div className=" flex flex-col">
            <label className=" text-sm text-gray-500 ">
              Would you love to correspond directly with our CEO during the
              application process?
            </label>
            <select
              name=""
              id=""
              className=" bg-gray-300 rounded h-[40px] pl-3 text-black"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div className=" flex flex-col">
            <label className=" text-sm text-gray-500 ">
              How can we exceed your expectation?
            </label>
            <input
              type="text"
              placeholder="Enter Text here"
              className=" bg-gray-300 rounded h-[40px] pl-3 text-black"
            />
          </div>

          <button className=" text-sm font-semibold bg-blue-700 text-white w-[70%] mx-auto mt-4 rounded h-[40px] hover:scale-105 hover:bg-blue-100  hover:text-blue-700 transition-all duration-500">
            Request Application
          </button>
        </form>
      </div>
    </div>
  );
}

export default RequestApplication;
