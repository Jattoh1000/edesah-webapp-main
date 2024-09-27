import { useContext } from "react";
import AddContext from "../contex/AddContext";

function SaveCard() {
  const { setAccount } = useContext(AddContext);

  return (
    <div className=" absolute top-0 right-0">
      <div className="w-[95vw] sm:w-[400px] p-3 rounded-2xl mx-auto bg-slate-50 shadow h-screen">
        <div
          onClick={() => setAccount("")}
          className=" text-3xl font-bold text-blue-800 cursor-pointer w-1 hover:scale-125 active:scale-90 duration-200"
        >
          x
        </div>
        <h1 className=" text-blue-700 text-2xl text-left font-semibold py-4">
          Saved Cards
        </h1>
        <h2 className=" text-gray-500 text-sm font-bold">
          You can view all your cards here
        </h2>

        <div className=" text-center text-gray-400  mt-8 p-2 rounded block w-[60%] mx-auto border border-gray-300 cursor-pointer">
          Add new card
        </div>
      </div>
    </div>
  );
}

export default SaveCard;
