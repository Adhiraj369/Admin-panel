import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/header";
import Contact from "../../assets/Phone@3x.png";
import Settings from "../../assets/settings.png";
import NavComponent from "../../components/NavComponent";

export default function Navigation() {
  return (
    <>
      <Header />
      <div className="flex">
        <nav className="mr-4 ml-4 h-[75vh] w-[15vw] flex-shrink-0 flex">
          <ul className="flex flex-col justify-start mt-5 gap-12 w-full items-start pl-5">
            <NavComponent
              className="text-sm"
              url="dashboard"
              styling="font-normal"
              activeStyling="font-bold"
            >
              Dashboard
            </NavComponent>

            <NavComponent
              className="text-sm"
              url="reports"
              styling="font-normal"
              activeStyling="font-bold"
            >
              Reports
            </NavComponent>

            <NavComponent
              className="text-sm"
              url="alerts"
              styling="font-normal"
              activeStyling="font-bold"
            >
              Alert Request
            </NavComponent>

            <NavComponent
              className="text-sm"
              url="attendance"
              styling="font-normal"
              activeStyling="font-bold"
            >
              Staff Report
            </NavComponent>

            <li className="flex flex-col border-t border-gray-300 w-[5vw] gap-2 justify-center items-center mt-10">
              <img
                src={Settings}
                alt="Settings"
                className="w-6 h-6 object-contain cursor-pointer mt-4"
              />
              <img
                src={Contact}
                alt="User Profile"
                className="w-6 h-6 object-contain cursor-pointer mt-4"
              />
            </li>
          </ul>
        </nav>

        <div className="flex-grow mr-10 h-[75vh] bg-[#3a80f1] bg-opacity-10 rounded-3xl">
          <Outlet />
        </div>
      </div>
    </>
  );
}
