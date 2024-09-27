import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../shared/header";
import Footer from "../shared/footer";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
