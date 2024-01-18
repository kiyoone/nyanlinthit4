import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const AddLayout = () => {
  return (
    <div className="py-10 relative min-h-screen">
      <div className="flex flex-col justify-center items-center mb-10">
        <div className=" w-full sm:w-1/2 flex gap-4 px-4">
          <NavLink className="w-1/2" to="/admin/add" end>
            {({ isActive }) => (
              <div
                className={`text-center rounded ${
                  isActive ? "bg-blue-900 text-white" : "bg-indigo-200"
                } py-2`}
              >
                Resource
              </div>
            )}
          </NavLink>
          <NavLink className="w-1/2" to="/admin/add/research">
            {({ isActive }) => (
              <div
                className={`text-center rounded ${
                  isActive ? "bg-blue-900 text-white" : "bg-indigo-200"
                } py-2`}
              >
                Research
              </div>
            )}
          </NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default AddLayout;
