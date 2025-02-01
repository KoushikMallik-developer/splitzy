import React, { useEffect, useState } from "react";
import profilePic from "../../assets/images/user/user-01.png";
import { useDispatch, useSelector } from "react-redux";
import { userDetailsbyToken, updateUserDetailsbyID } from "../../store/userSlice";
import { convertDateString } from "../../utils/dateFormatter";

const AccountDetails = () => {
  const dispatch = useDispatch();
  const { userDetails, isLoading } = useSelector(
    (state) => state.user,
  );

  const [selectedImage, setSelectedImage] = useState(profilePic);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    date: "",
    bio: "Frontend Developer | Coffee Enthusiast",
    image: "",
  });
  const [errors, setErrors] = useState({});

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.firstName) tempErrors.firstName = "First Name is required";
    if (!formData.lastName) tempErrors.lastName = "Last Name is required";
    if (!formData.phoneNumber)
      tempErrors.phoneNumber = "Phone Number is required";
    if (!formData.date) tempErrors.date = "Date is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const updateProfileHandler = (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch(updateUserDetailsbyID(formData));
    }
  };

  useEffect(() => {
    dispatch(userDetailsbyToken());
  }, [dispatch]);

  useEffect(() => {
    if (userDetails) {
      setFormData({
        firstName: userDetails.fname,
        lastName: userDetails.lname,
        phoneNumber: userDetails.phone,
        email: userDetails.email,
        date: convertDateString(userDetails.dob),
        bio: "Frontend Developer | Coffee Enthusiast",
        image: userDetails.image,
      });
    }
  }, [userDetails]);

  return (
    <section id="overview" className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Profile Settings</h1>
      </div>
      {/* Profile Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {/* Left Sidebar */}
        <div className="space-y-6">
          {/* Profile Picture */}
          <div className="text-center">
            <div className="relative inline-block">
              <img
                src={formData.image || selectedImage}
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-gray-300 transition-opacity duration-300"
              />
              <button className="absolute bottom-0 right-0 bg-indigo-600 p-2 rounded-full text-white hover:bg-indigo-700 transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </button>
              <input
                type="file"
                accept="image/*"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={handleImageChange}
              />
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-lg p-4 border border-gray-300">
            <h3 className="text-gray-800 font-medium mb-4">Activity Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Transaction Count</span>
                <span className="text-gray-800">1,234</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Friends Count</span>
                <span className="text-gray-800">5</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Joined</span>
                <span className="text-gray-800">Jan 2025</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-2 space-y-6">
          {/* Personal Information */}
          <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-300">
            <h2 className="text-lg font-medium text-gray-800 mb-4">
              Personal Information
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    className="w-full px-4 py-2 rounded-lg bg-gray-200 border border-gray-300 text-gray-800 focus:outline-none focus:border-indigo-500"
                    value={formData.firstName || ""}
                    onChange={handleInputChange}
                  />
                  {errors.firstName && (
                    <span className="text-red-500 text-sm">
                      {errors.firstName}
                    </span>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    className="w-full px-4 py-2 rounded-lg bg-gray-200 border border-gray-300 text-gray-800 focus:outline-none focus:border-indigo-500"
                    value={formData.lastName || ""}
                    onChange={handleInputChange}
                  />
                  {errors.lastName && (
                    <span className="text-red-500 text-sm">
                      {errors.lastName}
                    </span>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phoneNumber"
                    className="w-full px-4 py-2 rounded-lg bg-gray-200 border border-gray-300 text-gray-800 focus:outline-none focus:border-indigo-500"
                    value={formData.phoneNumber || ""}
                    onChange={handleInputChange}
                    placeholder="+91"
                  />
                  {errors.phoneNumber && (
                    <span className="text-red-500 text-sm">
                      {errors.phoneNumber}
                    </span>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className={`w-full px-4 py-2 rounded-lg bg-gray-200 border border-gray-300 text-gray-800`}
                    defaultValue={formData.email}
                    disabled={true}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  className="w-full px-4 py-2 rounded-lg bg-gray-200 border border-gray-300 text-gray-800 focus:outline-none focus:border-indigo-500"
                  value={formData.date || ""}
                  onChange={handleInputChange}
                />
                {errors.date && (
                  <span className="text-red-500 text-sm">{errors.date}</span>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Bio
                </label>
                <textarea
                  name="bio"
                  className="w-full px-4 py-2 rounded-lg bg-gray-200 border border-gray-300 text-gray-800 focus:outline-none focus:border-indigo-500"
                  value={formData.bio || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                  onClick={updateProfileHandler}
                  disabled={isLoading}
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountDetails;
