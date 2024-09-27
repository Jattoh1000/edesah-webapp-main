import { useContext } from "react";
import AddContext from "../contex/AddContext";

function AddBvn() {
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
        <h1 className="text-blue-700 text-2xl text-left font-semibold pb-4">
          Add NIN
        </h1>
        <p className="text-gray-500 text-left mb-6 text-sm">
          Securely enter your NIN
        </p>

        <form action="" className="flex flex-col gap-3 w-[90%]">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-500 font-semibold">
              Enter NIN
            </label>

            <input
              type="number"
              placeholder="123456789"
              className="bg-gray-300 rounded h-[40px] pl-3 w-full"
            />
          </div>

          <div className=" mb-5">
            <div className=" bg-blue-200 text-blue-600 w-[100%] sm:w-full text-sm font-semibold p-3 rounded">
              <p className=" w-[80%]">Why do we ask for your NIN</p>
              <p className=" text-gray-600 pt-5">
                We use your NIN to verify identity and ensure that your account
                with us is escure. Inputing your NIN will also help EDESAH
                create your unique account number that will enable you to
                transfer directly to your EDESAH Wallet and save. This does not
                mean that we will be able to acess your account.
              </p>
            </div>
          </div>

          <button className="bg-blue-700 text-white w-[100%] mx-auto mt-12 rounded h-[40px]">
            Validate
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddBvn;
