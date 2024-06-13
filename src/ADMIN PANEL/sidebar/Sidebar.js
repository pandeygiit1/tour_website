import React from "react";
import { Outlet } from "react-router-dom";
import "./sidebar.css";
import 'react-toastify/dist/ReactToastify.css';
import SidebarComponent from "./sidebarComponent/sidebarComponent";
const Sidebar = () => {
  return (
    <div>
      <div className="sidebarcontainer">
        <div className="leftContainerBox">
          <SidebarComponent/>
        </div>
        <div className="rigthcontainerbox">
          <Outlet />
          
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
