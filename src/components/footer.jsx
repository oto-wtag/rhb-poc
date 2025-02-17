import React from "react";
import {
  trainIcon,
  houseIcon,
  homeIcon,
  alertIcon,
  maintenanceIcon,
} from "@/assets/icons/footerIcons";

const Footer = () => {
  const footerMenu = [
    { id: 1, icon: trainIcon, link: "/train" },
    { id: 2, icon: houseIcon, link: "/house" },
    { id: 3, icon: homeIcon, link: "/" },
    { id: 4, icon: alertIcon, link: "/alert" },
    { id: 5, icon: maintenanceIcon, link: "/maintenance" },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full h-16 bg-white z-50 flex justify-center shadow">
      <div className="max-w-4xl w-full h-full flex justify-between items-center px-10">
        {footerMenu.map((item) => (
          <div
            key={item.id}
            className="flex items-center space-x-4 cursor-pointer"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              {item.icon && <item.icon className="h-full" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
