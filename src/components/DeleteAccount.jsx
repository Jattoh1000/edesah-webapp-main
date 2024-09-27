import { useContext } from "react";
import AddContext from "../contex/AddContext";

function DeleteAccount() {
  const { setAccount } = useContext(AddContext);

  return (
    <div>
      <div className="w-full sm:w-[400px] p-3 rounded-2xl mx-auto bg-slate-50 shadow absolute top-0 right-0">
        <div
          onClick={() => setAccount("")}
          className=" text-3xl font-bold text-blue-800 cursor-pointer w-1 hover:scale-125 active:scale-90 duration-200"
        >
          x
        </div>
        <h1 className=" text-blue-700 text-2xl text-center font-semibold py-10">
          Before you go, can you help us understand why you're leaving?
        </h1>

        <p className="font-semibold text-gray-950 pb-5 pl-3">
          Choose an option
        </p>

        <form className=" flex flex-col gap-3 mx-auto w-[90%]">
          <label className="flex justify-between font-semibold text-gray-950">
            Problem with my application
            <input type="radio" name="gender" value="male" />
          </label>
          <label className="flex justify-between font-semibold text-gray-950">
            Problem with my savings
            <input type="radio" name="gender" value="female" />
          </label>
          <label className="flex justify-between font-semibold text-gray-950">
            Problem with my withdraw
            <input type="radio" name="gender" value="female" />
          </label>
          <label className="flex justify-between font-semibold text-gray-950">
            Other reasons
            <input type="radio" name="gender" value="female" />
          </label>

          <button
            className="bg-blue-700 text-white w-[100%] mx-auto mt-4 rounded h-[40px] my-10 hover:scale-105 hover:bg-blue-100  hover:text-blue-700 transition-all duration-500"
            type="button"
          >
            Delete account
          </button>
        </form>
      </div>
    </div>
  );
}

export default DeleteAccount;
