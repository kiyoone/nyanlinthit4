import React from "react";
import { Navigate } from "react-router-dom";

import AdminLayout from "./Admin/AdminLayout";

const ProtectedRoute = () => {
  const user = localStorage.getItem("User");
  return user ? <AdminLayout /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
