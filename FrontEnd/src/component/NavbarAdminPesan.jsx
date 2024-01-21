import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import Dropdown from "./DropdownCategory";

const NavbarAdminPesan = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggleMenu = () => {
    setToggle((prev) => !prev);
  };

  const handleMenuItemClick = () => {
    // Close the mobile menu when a menu item is clicked
    setToggle(false);
  };

  return (
    <div className="flex flex-col fixed">
      {/* Header */}
      <div className="">
        <div className=" w-screen h-full flex border-b-[3px] border-[#004AAD] bg-white">
          <p className=" mb-4 text-[#004AAD] text-[30px] mt-5 ml-5 font-semibold">
            Data Pesan Pengguna
          </p>
          <div className="flex ml-3 items-center ml-auto mr-9">
            <Link to="/admin2/tourdata">
              <Button
                variant="filled"
                className="flex rounded-3 w-[143px] h-[37px] justify-center items-center bg-[#004aad] mr-5 transition delay-100 hover:text-[#004aad] hover:bg-white hover:border hover:border-[#004aad]"
              >
                Wisata
              </Button>
            </Link>
            {/* Input Search */}
            <div className="flex border border-[#5D5A88] w-[400px] h-[40px] rounded-[20px] ">
              <input
                type="text"
                placeholder="Cari disini"
                className="py-1 px-2 rounded-[20px] flex-grow"
              />
              <button className="text-[#5D5A88] rounded-[20px] mr-5 ml-2">
                Cari
              </button>
            </div>
            <Link to="/adminlogin2">
              <button
                type="submit"
                className="hover:bg-[#CD0404] border border-[#CD0404] text-[#CD0404] hover:text-white py-2 max-w-[150px] w-[100px] max-h-[40px] px-4 rounded-md ml-5"
              >
                Logout
              </button>
            </Link>
            <Link to="/">
              <button
                type="submit"
                className="hover:bg-[#004AAD] border border-[#004AAD] text-[#004AAD] hover:text-white py-2 max-w-[150px] w-[100px] max-h-[40px] px-4 rounded-md ml-5"
              >
                Home
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div >
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default NavbarAdminPesan;
