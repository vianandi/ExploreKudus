import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import MenuIcon from "../assets/menu2.png";
import CloseIcon from "../assets/x.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/tourism?search=${searchTerm}`);
  };

  const menuItem = [
    {
      text: "Home",
      path: "/",
    },
    {
      text: "Maps",
      path: "/maps",
    },
    {
      text: "Tourism",
      path: "/tourism",
    },
    {
      text: "About",
      path: "/about",
    },
    {
      text: "Contact",
      path: "/contact",
    },
  ];
  const [toggle, setToggle] = useState(false);

  const handleToggleMenu = () => {
    setToggle((prev) => !prev);
  };

  const handleMenuItemClick = () => {
    // Close the mobile menu when a menu item is clicked
    setToggle(false);
  };

  return (
    <nav className="fixed bg-white p-4 sm:px-[80px] w-screen">
      <div className="flex items-center justify-between">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dbmiqiqf4/image/upload/v1700662610/logooo_kuunpm.png"
            alt="Explore Kudus Logo"
            className="h-[50px] ml-[5px] mt-[20px] sm:ml-[35px] sm:h-[65px]"
          />
        </Link>
        {/* Menu */}
        <div className="hidden lg:flex items-center justify-between space-x-8">
          <Link to="/" className="text-[#5D5A88] hover:text-gray-300">
            Home
          </Link>
          <Link to="/maps" className="text-[#5D5A88] hover:text-gray-300">
            Maps
          </Link>
          <Link to="/tourism" className="text-[#5D5A88] hover:text-gray-300">
            Tourism
          </Link>
          <Link to="/about" className="text-[#5D5A88] hover:text-gray-300">
            About
          </Link>
          <Link to="/contact" className="text-[#5D5A88] hover:text-gray-300">
            Contact
          </Link>

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
        </div>

        {/* Toggle Menu Button */}
        <div className="lg:hidden flex items-center">
          <img
            src={toggle ? CloseIcon : MenuIcon}
            alt="Menu Icon"
            className="cursor-pointer"
            onClick={handleToggleMenu}
          />
        </div>

        {/* Conditionally render the menu items */}
        {toggle && (
          <div className="lg:hidden absolute top-16 right-4 bg-white border p-4 rounded shadow">
            {menuItem.map((item) => (
              <Link
                to={item.path}
                key={item.text}
                className="block py-2 text-[#5D5A88] hover:text-gray-300"
                onClick={handleMenuItemClick}
              >
                {item.text}
              </Link>
            ))}
            {/* Tambahan tombol login admin pada tampilan mobile */}
            {/* <Link
              to="/adminlogin2"
              className="block py-2 text-[#004AAD] hover:text-red-300"
            >
              Admin Login
            </Link> */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
