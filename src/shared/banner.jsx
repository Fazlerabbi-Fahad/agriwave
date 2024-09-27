import React from "react";
import Banner from "../asset/images/banner.jpg";
import { Link } from "react-router-dom";

export default function banner() {
  return (
    <div
      className="hero min-h-[30rem] mt-2 "
      style={{ backgroundImage: `url(${Banner})` }}
    >
      <div className="hero-overlay max-h-full bg-opacity-75 animate__animated animate__fadeInRight"></div>
      <div className="hero-content text-center text-neutral-content animate__animated animate__fadeInLeft">
        <div className="max-w-md">
          <h2 className="card-title text-warning justify-center text-3xl font-bold">
            Want To Grow More!
          </h2>
          <p className="text-warning justify-center text-md mt-2">
            Empowering Farmers with Real-Time Soil & Climate Insights
          </p>
          <div className="card-actions mt-2 justify-center">
            <Link to="/login">
              <button className="btn btn-warning rounded-sm">Login Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
