import React from "react";
import { Outlet } from "react-router-dom";
import MobileSidebar from "../components/MobileSidebar";
import Sidebar from "../components/Sidebar";
import { FiMenu } from "react-icons/fi";

const Dashboard = () => {
  const [showMobileSidebar, setSidebar] = React.useState(false);

  const toggleSidebar = () => {
    setSidebar(!showMobileSidebar);
  };
  return (
    <div className="flex ">
      <Sidebar />
      <MobileSidebar showMobileSidebar={showMobileSidebar} />
      <button
        className="absolute top-6 right-5 text-[25px] md:hidden"
        onClick={() => toggleSidebar()}
      >
        <FiMenu />
      </button>
      <Outlet />
    </div>
  );
};

export default Dashboard;
