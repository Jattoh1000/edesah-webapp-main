import { useContext } from "react";
import MeetSarah from "../components/MeetSarah";
import Navbar from "../components/Navbar";
import TargetComponent from "../components/TargetComponent";
import addContext, { AddContext } from "../contex/AddContext";
import RecentTransaction from "../components/RecentTransaction";
import SchoolDetails from "../components/SchoolDetails";
import SetFrequency from "../components/SetFrequency";
import MobileNavbar from "../components/MobileNavBar";
import AddBvn from "../components/AddBvn";
import SaveCard from "../components/SaveCard";
import { useAuth } from "../contex/AuthContext";

const data = [
  { info: "Enter School Details" },
  { info: "Set Frequency for Auto Save" },
  { info: "Add BVN" },
  { info: "Add Card" },
];

function HomePage() {
  // const { data: user } = useContext(addContext);
  const {user} = useAuth()
  const { account, setAccount } = useContext(AddContext);
  const displaydata = data;

  console.log(user)

  return (
    <div className="bg-slate-100 w-[100vw] sm:w-[75vw] sm:h-full sm:ml-auto sm:flex pb-[60px] sm:pb-0">
      {" "}
      {/* Add padding to bottom */}
      <div className="sm:block hidden">
        <Navbar />
      </div>
      <div className="w-full p-5 sm:p-0">
        <header className="sm:px-[2vw] pt-5 pb-8">
          <h1 className="text-3xl font-medium pt-9 ">
            Hey {user?.userDetails?.fullname} 👋
          </h1>
        </header>
        <div className="sm:w-[100%] sm:px-[2vw] gap-x-[2vw] sm:flex sm:items-start">
          <div className="w-full sm:w-[60%]">
            <section>
              <div>
                <div>
                  <h3 className="text-gray-600 font-semibold pb-5 w-full">
                    Ongoing Target
                  </h3>
                  <TargetComponent />
                </div>
              </div>
            </section>
          </div>
          <div className="hidden sm:block">
            <MeetSarah />
          </div>
        </div>

        <div className="w-[100%] px-[2vw] gap-x-[2vw] sm:flex sm:items-start">
          {/* To  do list*/}
          <div className="sm:w-[60%] mt-[40px] sm:mt-[-90px]">
            <h2 className="text-gray-600 font-semibold mb-4">To do list</h2>
            <div className="flex flex-col gap-3 w-[100%] sm:w-[90%]">
              {displaydata.map((item, index) => (
                <button
                  onClick={() => setAccount(item.info)}
                  key={index}
                  className="flex justify-between text-gray-950 p-3 border border-gray-300"
                >
                  <div className="flex gap-3">
                    <input type="radio" name="gender" value="male" />
                    <span>{item.info}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div className="hidden sm:block sm:w-[40%]">
            <RecentTransaction />
          </div>
        </div>
      </div>
      <div className="sm:hidden block">
        <MobileNavbar />
      </div>
      {account === "Enter School Details" && <SchoolDetails />}
      {account === "Add BVN" && <AddBvn />}
      {account === "Set Frequency for Auto Save" && <SetFrequency />}
      {account === "Add Card" && <SaveCard />}
    </div>
  );
}

export default HomePage;
