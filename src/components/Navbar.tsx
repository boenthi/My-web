import React from 'react';
import { Navbar, NavbarBrand, NavbarToggle, NavbarCollapse, NavbarLink, Button } from 'flowbite-react';
import { BsChevronCompactRight } from "react-icons/bs";
import Logo from './Logo'; // Assuming Logo is a component in the same directory or a relative path

function NavbarComponent () {
  return (
    <Navbar fluid rounded className="fixed top-0 left-0 w-full z-30 bg-white shadow-md">
      <div className="flex items-center justify-between w-full px-4 py-2">
        <NavbarBrand href="/" className="flex items-center">
          <Logo />
        </NavbarBrand>
        {/* <NavbarToggle /> */}
        <NavbarCollapse>
          <div className="flex items-center space-x-4">
            <NavbarLink href="#">
              <button className=" ml-2 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 flex items-center" >
              Download  <BsChevronCompactRight  /> 
              </button>
            </NavbarLink>
  
          </div>
        </NavbarCollapse>
      </div>
    </Navbar>
  );
}

export default NavbarComponent;

