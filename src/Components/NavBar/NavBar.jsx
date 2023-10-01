import React from "react";

const NavBar = () => {
  return (
    <>
      <div className="navBar sm:flex justify-between items-center p-[3rem]">
        <div className="logoDiv">
          <h1 className="logo text-[25px] text-blueColor">
            <strong>Job</strong>Search
          </h1>
        </div>
        <div className="menu sm:flex gap-8">
          <li className="menuList text-[#6f6f6f] hover:text-blueColor list-none cursor-pointer relative">
            Jobs
          </li>
          <li className="menuList text-[#6f6f6f] hover:text-blueColor list-none cursor-pointer relative">
            Companies
          </li>
          <li className="menuList text-[#6f6f6f] hover:text-blueColor list-none cursor-pointer relative">
            About
          </li>
          <li className="menuList text-[#6f6f6f] hover:text-blueColor list-none cursor-pointer relative">
            Contact
          </li>
          <li className="menuList text-[#6f6f6f] hover:text-blueColor list-none cursor-pointer relative">
            Blog
          </li>
          <li className="menuList text-[#6f6f6f] hover:text-blueColor list-none cursor-pointer relative">
            Login
          </li>
          <li className="menuList text-[#6f6f6f] hover:text-blueColor list-none cursor-pointer relative">
            Register
          </li>
        </div>
      </div>
    </>
  );
};

export default NavBar;
