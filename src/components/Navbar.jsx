import Logo from "/bgimg.png";
import { NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { LuTarget } from "react-icons/lu";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { GrRefresh } from "react-icons/gr";

function Navbar() {
  return (
    <div
      className={` h-screen fixed top-0 left-0 w-[25vw] pt-10 flex flex-col justify-start bg-blue-700 `}
    >
      <div className="border-b-[1px] border-gray-300 pb-4 mb-4 w-[90%] mx-auto flex justify-between items-center">
        <NavLink to={"/login"}>
          <img className="" src={Logo} alt="" />
        </NavLink>
        <div className=" text-gray-100 text-xl cursor-pointer">
          <GrRefresh />
        </div>
      </div>
      <ul className="flex flex-col w-[90%] justify-start mx-auto">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? " text-gray-100 font-semibold bg-gray-200 bg-opacity-30  flex items-center gap-2 w-[80%] p-2 m-2 rounded"
                : "text-gray-100 font-semibold  flex items-center gap-2 w-[80%] p-2 m-2 rounded"
            }
          >
            <IoHomeOutline />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/targetpage"}
            className={({ isActive }) =>
              isActive
                ? "text-gray-100 font-semibold bg-gray-200 bg-opacity-30  flex items-center gap-2 w-[80%] p-2 m-2 rounded"
                : "text-gray-100 font-semibold  flex items-center gap-2 w-[80%] p-2 m-2 rounded"
            }
          >
            <LuTarget />
            Target
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/applicationpage"}
            className={({ isActive }) =>
              isActive
                ? "text-gray-100 font-semibold bg-gray-200 bg-opacity-30  flex items-center gap-2 w-[80%] p-2 m-2 rounded"
                : "text-gray-100 font-semibold  flex items-center gap-2 w-[80%] p-2 m-2 rounded"
            }
          >
            <HiOutlineAcademicCap />
            Application
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/accountpage"}
            className={({ isActive }) =>
              isActive
                ? "text-gray-100 font-semibold bg-gray-200 bg-opacity-30 flex items-center gap-2 w-[80%] p-2 m-2 rounded"
                : "text-gray-100 font-semibold  flex items-center gap-2 w-[80%] p-2 m-2 rounded"
            }
          >
            <MdOutlineAccountCircle />
            Account
          </NavLink>
        </li>
      </ul>
      <div className="mt-[55%] text-gray-100 font-semibold w-[90%] mx-auto pt-4 border-t border-gray-400 flex justify-between">
        <div>Logout</div>
        <div className=" text-3xl cursor-pointer">
          <IoIosLogOut />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
