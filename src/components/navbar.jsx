import React, { useState } from "react";
import BellIcon from "@/assets/icons/bell-icon.svg";
import HamburgerMenu from "@/assets/icons/hamburger-menu.svg";
import { Drawer } from "antd";
import {
  termsAndPolicyIcon,
  securityIcon,
  networkIcon,
  supportIcon,
  settingIcon,
  loginIcon,
} from "@/assets/icons/hamburgerIcons";

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const menuItems = [
    {
      id: 1,
      displayName: "Terms & Policy",
      icon: termsAndPolicyIcon,
    },
    {
      id: 2,
      displayName: "Security",
      icon: securityIcon,
    },
    {
      id: 3,
      displayName: "Network",
      icon: networkIcon,
    },
    {
      id: 4,
      displayName: "Support",
      icon: supportIcon,
    },
    {
      id: 5,
      displayName: "Settings",
      icon: settingIcon,
    },
    {
      id: 6,
      displayName: "Login",
      icon: loginIcon,
    },
  ];

  return (
    <>
      <img
        src={HamburgerMenu}
        className="cursor-pointer"
        alt="notification icon"
        onClick={showDrawer}
      />
      <Drawer className="hamburger" title="Menu" onClose={onClose} open={open}>
        <div className="space-y-5">
          {menuItems.map((menu) => (
            <div
              key={menu.id}
              className="flex items-center space-x-4 cursor-pointer"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                {menu.icon && <menu.icon className="h-full" />}
              </div>
              <span>{menu.displayName}</span>
            </div>
          ))}
        </div>
      </Drawer>
    </>
  );
};

const Navbar = () => {
  return (
    <nav className="px-3 md:px-0 h-16 container mx-auto flex items-center justify-between">
      <img src="/rhb-logo.svg" className="w-28" alt="RhB Logo" />
      <div className="flex space-x-4">
        <img
          src={BellIcon}
          className="cursor-pointer"
          alt="notification icon"
        />
        <Hamburger />
      </div>
    </nav>
  );
};

export default Navbar;
