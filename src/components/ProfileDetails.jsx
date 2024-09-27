import { useContext, useState } from "react";
import AddContext from "../contex/AddContext";

function ProfileDetails() {
  const [error, setErrors] = useState({});
  const { setAccount } = useContext(AddContext);

  const [formdata, setFormdata] = useState({
    email: "",
    fullname: "",
    username: "",
    dateofbirth: "",
    country: "",
  });

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const validate = (data) => {
    let errors = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(data.email)) {
      errors.email = "Invalid email format";
    }

    // Full name validation
    if (!data.fullname) {
      errors.fullname = "Full name is required";
    } else if (data.fullname.length < 3) {
      errors.fullname = "Full name must be at least 3 characters";
    }

    // Username validation
    if (!data.username) {
      errors.username = "Username is required";
    } else if (data.username.length < 3) {
      errors.username = "Username must be at least 3 characters";
    }

    // Date of Birth validation
    if (!data.dateofbirth) {
      errors.dateofbirth = "Date of birth is required";
    } else if (new Date(data.dateofbirth) > new Date()) {
      errors.dateofbirth = "Date of birth cannot be in the future";
    }

    // Country validation
    if (!data.country) {
      errors.country = "Country is required";
    } else if (data.country === "Others") {
      errors.country = "Please select a valid country";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const valid = validate(formdata);
    setErrors(valid);

    if (Object.keys(valid).length === 0) {
      console.log("Form is valid, submitting...", formdata);
    } else {
      console.log("Validation errors", valid);
    }
  };

  const closeModal = () => {
    setAccount("");
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-end">
        <div
          className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm"
          onClick={closeModal}
        ></div>

        <div className="relative bg-white w-full sm:w-[400px] p-6 rounded-2xl shadow-lg z-10">
          <div
            onClick={closeModal}
            className="text-3xl font-bold text-blue-800 cursor-pointer absolute top-4 right-4 hover:scale-125 active:scale-90 duration-200"
          >
            x
          </div>
          <h1 className="text-gray-700 text-2xl text-center font-semibold">
            Profile details
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 pt-10">
            {/* Username */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-500">User Name</label>
              <input
                onChange={handleChange}
                name="username"
                type="text"
                placeholder="User Name"
                className="bg-gray-300 rounded h-[40px] pl-3"
              />
              {error.username && (
                <p className="text-[12px] text-red-500 mt-[-5px]">
                  {error.username}
                </p>
              )}
            </div>

            {/* Fullname */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-500">Full Name</label>
              <input
                onChange={handleChange}
                name="fullname"
                type="text"
                placeholder="Full Name"
                className="bg-gray-300 rounded h-[40px] pl-3"
              />
              {error.fullname && (
                <p className="text-[12px] text-red-500 mt-[-5px]">
                  {error.fullname}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-500">Email address</label>
              <input
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="Email address"
                className="bg-gray-300 rounded h-[40px] pl-3"
              />
              {error.email && (
                <p className="text-[12px] text-red-500 mt-[-5px]">
                  {error.email}
                </p>
              )}
            </div>

            {/* Gender */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-500">Gender</label>
              <select
                name="gender"
                onChange={handleChange}
                className="bg-gray-300 rounded h-[40px] pl-3"
              >
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </select>
            </div>

            {/* Date of Birth */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-500">Date of Birth</label>
              <input
                onChange={handleChange}
                name="dateofbirth"
                type="date"
                className="bg-gray-300 rounded h-[40px] pl-3"
              />
              {error.dateofbirth && (
                <p className="text-[12px] text-red-500 mt-[-5px]">
                  {error.dateofbirth}
                </p>
              )}
            </div>

            {/* Country */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-500">Country</label>
              <select
                name="country"
                onChange={handleChange}
                className="bg-gray-300 rounded h-[40px] pl-3"
              >
                <option value="Nigeria">Nigeria</option>
                <option value="Others">Others</option>
              </select>
              {error.country && (
                <p className="text-[12px] text-red-500 mt-[-5px]">
                  {error.country}
                </p>
              )}
            </div>

            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white font-semibold py-3 rounded"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ProfileDetails;
