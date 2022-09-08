import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";


const Dashboard = () => {
 

  return (
    <div>
      
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet />
          <label
            for="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>

        <div className="drawer-side">
          <label for="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard" className="border-b-4 border-transparent hover:text-primary hover:border-current text-[15px] "> Profile</Link>
            </li>

            <li>
              <Link to="/dashboard/review" className="border-b-4 border-transparent hover:text-primary hover:border-current text-[15px] ">My Review</Link>
            </li>
          
            

            
            

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;