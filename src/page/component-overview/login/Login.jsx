import React, { useEffect, useState } from "react";
import SignUp from "../../../asset/images/login.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function Login() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://agriwaveback.vercel.app/user");
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        const result = await response.json();
        setUsers(result);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, []);

  const handleLogin = (data) => {
    console.log(data, users);

    if (users.length < 0) {
      toast.error("Users data is still loading. Please wait.");
      return;
    }
    const userExist = users.find((user) => {
      return (
        user.username?.toLowerCase() === data.name?.toLowerCase() &&
        user.password === data.password
      );
    });

    if (userExist) {
      reset();
      const userNameExist = users.find(
        (user) => user.username?.toLowerCase() === data.name?.toLowerCase()
      );
      localStorage.setItem("userName", userNameExist.username);
      navigate("/report");
      toast.success(`Welcome back, ${userExist.username}`);
    } else {
      const userNameExist = users.find(
        (user) => user.username?.toLowerCase() === data.name?.toLowerCase()
      );
      if (userNameExist) {
        toast.error("Password not matched.");
      } else {
        toast.error("User not found.");
      }
    }
  };

  return (
    <div>
      <div
        className="hero h-[100vh] mt-2 animate__fadeInRight"
        style={{ backgroundImage: `url(${SignUp})` }}
      >
        <div className="hero-overlay max-h-full bg-opacity-75 animate__animated animate__fadeInRight"></div>
        <div className="text-center text-neutral-content lg:w-[35%] animate__animated animate__fadeInLeft">
          <div className="w-full">
            <h2 className="card-title text-warning justify-center text-3xl font-bold">
              Login Now
            </h2>
            <div className="card w-full shadow-2xl">
              <form className="card-body" onSubmit={handleSubmit(handleLogin)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">User Name</span>
                  </label>
                  <input
                    type="name"
                    placeholder="username"
                    className="input input-bordered rounded-sm"
                    {...register("name", {
                      required: "Name is required",
                    })}
                  />
                  {errors.name && (
                    <p className="text-red-900  font-bold">
                      {errors.name?.message}
                    </p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered rounded-sm"
                    {...register("password", {
                      required: "Password is required",
                    })}
                  />
                  {errors.password && (
                    <p className="text-red-900  font-bold">
                      {errors.password?.message}
                    </p>
                  )}
                </div>
                <div>
                  <p>
                    Don't have any account?
                    <Link className="ml-2 text-warning" to="/signup">
                      <span>Create Now</span>
                    </Link>
                  </p>
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary rounded-sm">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
