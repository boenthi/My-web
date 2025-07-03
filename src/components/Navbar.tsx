import React from 'react';
import { Navbar, NavbarBrand, NavbarToggle, NavbarCollapse, NavbarLink } from 'flowbite-react';
import { BsChevronCompactRight } from "react-icons/bs";
import Logo from './Logo'; // Assuming Logo is a component in the same directory or a relative path

function NavbarComponent () {
  return (
    <Navbar fluid rounded className="fixed top-0 left-0 w-full z-30 bg-white shadow-md dark:bg-gray-900">
      <div className="flex items-center justify-between w-full px-4 py-2">
        <NavbarBrand href="/" className="flex items-center">
          <Logo />
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <div className="flex items-center space-x-4">
            <NavbarLink href="#">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded flex items-center ">
              Download  <BsChevronCompactRight className="ml-2 h-5 w-5" /> 
              </button>
            </NavbarLink>
  
          </div>
        </NavbarCollapse>
      </div>
    </Navbar>
  );
}

export default NavbarComponent;

