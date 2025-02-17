import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/navbar";

const PrimaryLayout = () => {
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      <main className="bg-white h-full flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default PrimaryLayout;
