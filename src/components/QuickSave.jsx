import { useContext } from "react";
import AddContext from "../contex/AddContext";

function QuickSave() {
  const { setAccount } = useContext(AddContext);

  return (
    <div className=" absolute top-0 right-0">
      <div className="w-full sm:w-[400px] p-3 rounded-2xl mx-auto bg-slate-50 shadow h-screen">
        <div
          onClick={() => setAccount("")}
          className=" text-3xl font-bold text-blue-800 cursor-pointer w-1 hover:scale-125 active:scale-90 duration-200"
        >
          x
        </div>
        <h1 className=" text-blue-700 text-2xl text-left font-semibold pt-4">
          Quick Save
        </h1>

        <form action="">
          <div>
            <label className=" text-gray-500 text-sm font-bold">
              You can view all your cards here
            </label>
            <input
              type="number"
              placeholder=""
              className="bg-gray-300 rounded h-[40px] pl-3 w-full"
            />
          </div>
        </form>

        <div className=" text-center text-gray-400  mt-8 p-2 rounded block w-[60%] mx-auto border border-gray-300 cursor-pointer">
          Add new card
        </div>

        <div className=" w-[20px] mx-auto py-5">Or</div>

        <div className=" bg-blue-200 text-blue-600 w-[100%] sm:w-full text-sm font-semibold p-3 rounded">
          <p>
            Make transfer directly to your Edesah account by copying your unique
            account number on the bottom right of the card on your target screen
          </p>
        </div>

        <button className="bg-blue-700 text-white w-[100%] mx-auto mt-8 rounded h-[40px]">
          Quick Save
        </button>
      </div>
    </div>
  );
}

export default QuickSave;
