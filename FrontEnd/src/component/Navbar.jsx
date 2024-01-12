import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useNavigate, BrowserRouter as Router, Route } from 'react-router-dom';
import MenuIcon from '../assets/menu.png';
import CloseIcon from '../assets/x.png';

const Navbar = () => {
  const menuItem = [
    {
      text: 'Home',
      path: '/',
    },
    {
      text: 'Artikel',
      path: '/artikel',
    },
    {
      text: 'Komunitas',
      path: '/komunitas',
    },
  ];

  const [toggle, setToggle] = useState(false);

  const handleToggleMenu = () => {
    setToggle((prev) => !prev);
  };

  return (
    <header className='w-full fixed shadow-md bg-white'>
      <nav className='w-full py-4 px-5 sm:px-[120px] flex justify-between items-center'>
        <Link to='/' className='text-[28px] font-semibold text-[#52C41A]'>
          Explore Kudus.
        </Link>
        <ul className='gap-10 hidden sm:flex items-center'>
          {menuItem.map((item, index) => (
            <li className='hover:text-[#52C41A]' key={index}>
              <Link to={item.path}>{item.text}</Link>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? CloseIcon : MenuIcon}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={handleToggleMenu}
          />
          <div
            className={`${
              toggle ? 'flex' : 'hidden'
            } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-md bg-[#223A26]`}
          >
            <ul className='list-none flex flex-col gap-2'>
              {menuItem.map((item, index) => (
                <li className='text-white hover:text-[#52C41A]' key={index}>
                  <Link to={item.path}>{item.text}</Link>
                </li>
              ))}
              <li className='mt-8'>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;