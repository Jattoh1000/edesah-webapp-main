import { useContext } from "react";
import MeetSarah from "../components/MeetSarah";
import Navbar from "../components/Navbar";
import { useAuth } from "../contex/AuthContext";
import AddContext from "../contex/AddContext";
import ProfileDetails from "../components/ProfileDetails";
import ChangePassword from "../components/ChangePassword";
import InviteFriend from "../components/InviteFriend";
import PrivacyPolicy from "../components/PrivacyPolicy";
import GeneralTerms from "../components/GeneralTerms";
import DeleteAccount from "../components/DeleteAccount";
import MobileNavbar from "../components/MobileNavBar";

const data = [
  { info: "Profile Details" },
  { info: "Change Password" },
  { info: "Invite Friends" },
  { info: "Privacy policy" },
  { info: "Terms & Conditions" },
  { info: "Log out" },
  { info: "Delete account" },
];

function AccountPage() {
  const { user } = useAuth();
  const { account, setAccount } = useContext(AddContext);
  const displaydata = data;
  console.log(user.msg.userDetails);
  return (
    <div className=" sm:flex w-[100vw] sm:w-[75vw] sm:ml-auto  bg-slate-100 pb-[80px] sm:pb-0">
      <div className="sm:block hidden">
        <Navbar />
      </div>

      <div className=" w-full flex-1 md:flex-row flex-col flex px-[2vw]  items-start gap-x-[2vw] pt-10">
        <div className=" w-[90%] md:w-[50%] px-5">
          <header>
            <h1 className="text-4xl font-medium  ">My Account</h1>
            <h2 className=" text-base pt-2 text-gray-600 font-normal pb-4">
              {user?.msg?.userDetails?.fullname}
            </h2>
          </header>
          <section className="fl">
            {/* ACCOUNT DETAILS */}
            <div className="  mt-9">
              <div className=" flex flex-col gap-3 ">
                {displaydata.map((item, index) => (
                  <button
                    onClick={() => setAccount(item.info)}
                    key={index}
                    className="py-4 pl-3  m-1 text-left border-[1px] border-gray-300 text-gray-600 text-sm rounded hover:scale-105 hover:bg-blue-700  hover:text-blue-100 transition-all  active:scale-90 duration-300"
                  >
                    {item.info}
                  </button>
                ))}
              </div>
            </div>

            {/*  */}
          </section>
        </div>
        <div className="hidden sm:block px-5">
          <MeetSarah />
        </div>
      </div>

      <div className="sm:hidden block">
        <MobileNavbar />
      </div>

      {account == "Profile Details" && <ProfileDetails />}
      {account == "Change Password" && <ChangePassword />}
      {account == "Invite Friends" && <InviteFriend />}
      {account == "Privacy policy" && <PrivacyPolicy />}
      {account == "Terms & Conditions" && <GeneralTerms />}
      {account == "Delete account" && <DeleteAccount />}
    </div>
  );
}

export default AccountPage;
