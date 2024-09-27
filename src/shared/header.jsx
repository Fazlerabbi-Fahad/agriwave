import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../asset/images/logo.png";
import toast from "react-hot-toast";

export default function Navbar() {
  const navigate = useNavigate();
  const username = localStorage.getItem("userName");

  const logout = () => {
    navigate("/report");
    localStorage.removeItem("userName");
    toast.success("You have been logged out.");
  };
  return (
    <div className="static top-0 max-w-screen-xl mx-auto py-2">
      <div className="flex justify-between items-center mt-4 bg-transparent">
        <div className="animate__animated animate__fadeInLeft">
          <Link to="/" className="flex items-center animate__fadeInLeft">
            <img className="w-10 h-10" src={logo} alt="agriwave" />
            <div>
              <h4 className="text-secondary lg:text-3xl font-extrabold ml-3">
                Agriwave
              </h4>
            </div>
          </Link>
        </div>
        {!username && (
          <div className="flex animate__animated animate__fadeInRight">
            <Link to="/signup">
              <button className="btn btn-active btn-neutral rounded-sm animate__fadeInRight">
                Sign Up
              </button>
            </Link>
            <Link className="ml-3" to="/login">
              <button className="btn btn-active btn-neutral rounded-sm animate__fadeInRight">
                Login
              </button>
            </Link>
          </div>
        )}
        {username && (
          <Link className="ml-3" onClick={logout}>
            <button className="btn btn-active btn-neutral rounded-sm animate__fadeInRight">
              Logout
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
