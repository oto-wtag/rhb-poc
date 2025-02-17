import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const PrimaryLayout = () => {
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />
      <main className="bg-white h-full flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PrimaryLayout;
