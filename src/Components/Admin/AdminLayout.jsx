import React, { Suspense } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { AddCircle, ExitToApp, MarkEmailRead } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";

const AdminLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("User");
    navigate("/login");
  };

  const types = [
    { to: "acm", name: "Armed Clashes Monitor" },
    { to: "cnnm", name: "CRPH,NUCC, NUG Monitor" },
    { to: "sac", name: "SAC Monitor" },
    { to: "others", name: "Others" },
    { to: "rps", name: "Research Paper Series" },
    { to: "srs", name: "Special Reports" },
    { to: "ref", name: "References" },
    { to: "statements", name: "Statements" },
    { to: "advocacy", name: "Advocacy" },
  ];

  return (
    <section className="flex min-h-screen bg-red-600">
      <div className="w-1/6  bg-blue-900 min-h-screen sticky top-0 p-2 sm:p-5   font-semibold">
        <div className="w-full text-center mb-3">
          <NavLink to="/admin/add">
            {({ isActive }) => (
              <div
                className={`active:scale-75 transition-transform w-full  flex items-center justify-center md:justify-start gap-2 rounded-md px-2 py-3 ${
                  isActive
                    ? "bg-blue-100 text-theme"
                    : "bg-transparent text-blue-100"
                }`}
              >
                <AddCircle />{" "}
                <span className="hidden md:block font-sans">Add Resource</span>
              </div>
            )}
          </NavLink>
        </div>
        {types?.map((type, i) => (
          <div key={type.to + i} className="w-full text-center">
            <NavLink to={`/admin/${type.to}`}>
              {({ isActive }) => (
                <div
                  className={`active:scale-75 transition-transform w-full  flex items-center justify-center md:justify-start gap-2  rounded-md px-2 py-3 ${
                    isActive
                      ? "bg-blue-100 text-theme"
                      : "bg-transparent text-blue-100"
                  }`}
                >
                  <span
                    className={`px-3 py-1 border rounded-lg ${
                      isActive ? "border-theme" : ""
                    }`}
                  >
                    {type.to.substring(0, 2)}
                  </span>
                  <span className="hidden md:inline font-sans">
                    {type.name}
                  </span>
                </div>
              )}
            </NavLink>
          </div>
        ))}
        <div className="w-full text-center mb-3">
          <NavLink to="/admin/subscribers">
            {({ isActive }) => (
              <div
                className={`active:scale-75 transition-transform w-full  flex items-center justify-center md:justify-start gap-2 rounded-md px-2 py-3 ${
                  isActive
                    ? "bg-blue-100 text-theme"
                    : "bg-transparent text-blue-100"
                }`}
              >
                <MarkEmailRead />
                <span className="hidden md:block font-sans">Subscribers</span>
              </div>
            )}
          </NavLink>
        </div>
        <div className="  w-full  left-0">
          <div
            className="w-full text-center text-white  bg-red-500  rounded-md cursor-pointer active:scale-50 px-2 py-3"
            onClick={handleLogout}
          >
            <ExitToApp />{" "}
            <span className="hidden md:inline font-sans">Log Out</span>
          </div>
        </div>
      </div>
      <div className="w-5/6 bg-indigo-300  min-h-screen">
        <Suspense
          fallback={
            <div className="h-screen">
              <CircularProgress />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </div>
    </section>
  );
};

export default AdminLayout;
