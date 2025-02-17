import React from "react";
import BellIcon from "@/assets/icons/bell-icon.svg";
import HamburgerMenu from "@/assets/icons/hamburger-menu.svg";

const Navbar = () => {
  return (
    <nav className="h-16 container mx-auto flex items-center justify-between">
      <img src="/rhb-logo.svg" className="w-28" alt="RhB Logo" />
      <div className="flex space-x-4">
        <img
          src={BellIcon}
          className="cursor-pointer"
          alt="notification icon"
        />
        <img
          src={HamburgerMenu}
          className="cursor-pointer"
          alt="notification icon"
        />
      </div>
    </nav>
  );
};

export default Navbar;
