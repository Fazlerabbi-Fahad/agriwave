import React, { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { loading, setLoading } = useState();
  const username = localStorage.getItem("userName");

  const location = useLocation();

  if (loading) {
    return "Loading...";
  }

  if (username) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
