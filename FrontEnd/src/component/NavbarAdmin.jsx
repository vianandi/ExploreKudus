import React, { useState, useEffect, useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import Dropdown from "./DropdownCategory";
import { AuthContext } from "../component/AuthContext";
import MenuIcon from "../assets/menu2.png";
import CloseIcon from "../assets/x.png";

const NavbarAdmin = () => {
  const [toggle, setToggle] = useState(false);
  const { setIsLoggedIn } = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/admin2/tourdata?search=${searchTerm}`);
  };

  const handleLogout = () => {
    // Clear the token from localStorage
    localStorage.removeItem("token");

    // Update the isLoggedIn state
    setIsLoggedIn(false);
  };

  const handleToggleMenu = () => {
    setToggle((prev) => !prev);
  };

  const handleMenuItemClick = () => {
    // Close the mobile menu when a menu item is clicked
    setToggle(false);
  };

  return (
    <div className="flex flex-col fixed overflow-x-hidden overflow-y-auto">
      {/* Header */}
      <div className="">
        <div className=" w-screen h-full flex border-b-[3px] border-[#004AAD] bg-white">
          <p className=" mb-4 text-[#004AAD] text-[30px] mt-5 ml-5 font-semibold">
            Data Pariwisata
          </p>
          <div className="flex ml-3 items-center ml-auto mr-9">
            <Link to="/admin2/pesan">
              <Button
                variant="filled"
                className="flex rounded-3 w-[143px] h-[37px] justify-center items-center bg-[#004aad] mr-5 transition delay-100 hover:text-[#004aad] hover:bg-white hover:border hover:border-[#004aad]"
              >
                Pesan
              </Button>
            </Link>
            {/* Dropdown */}
            {/* <div className="mr-5">
              <Dropdown />
            </div> */}
            {/* Input Search */}
            <form
              onSubmit={handleSearch}
              className="relative flex border border-[#5D5A88] w-[400px] h-[40px] rounded-[20px]"
            >
              <input
                type="text"
                placeholder="Cari disini"
                className="py-1 px-2 rounded-[20px] flex-grow"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                type="submit"
                className="text-[#5D5A88] rounded-[20px] mr-5 ml-2"
              >
                Cari
              </button>
            </form>
            <Link to="/adminlogin2">
              <Button
                type="submit"
                className="hover:bg-[#CD0404] border border-[#CD0404] text-[#CD0404] hover:text-white py-2 max-w-[150px] w-[100px] max-h-[40px] px-4 rounded-md ml-5"
                onClick={handleLogout}
              >
                Logout
              </Button>
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
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default NavbarAdmin;