import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Create from "../../../asset/images/create.jpg";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function SignUp() {
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

  const handleCreate = (data) => {
    const userExist = users.find(
      (user) => user.email === data.email || user.username === data.name
    );

    if (userExist) {
      toast.error("User already exists");
      return;
    }

    fetch("https://agriwaveback.vercel.app/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Account Created");
          setUsers([...users, data]);
        }
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });

    if (data) {
      reset();
      const userNameExist = users.find(
        (user) => user.username?.toLowerCase() === data.name?.toLowerCase()
      );
      localStorage.setItem("userName", userNameExist?.username);
      navigate("/report");
    }
  };
  return (
    <div>
      <div
        className="hero h-[100vh] mt-2"
        style={{ backgroundImage: `url(${Create})` }}
      >
        <div className="hero-overlay max-h-full bg-opacity-75 animate__animated animate__fadeInRight"></div>
        <div className="text-center text-neutral-content lg:w-[35%] animate__animated animate__fadeInLeft">
          <div className="w-full">
            <h2 className="card-title text-warning justify-center text-3xl font-bold">
              Create Account
            </h2>
            <div className="card w-full shadow-2xl">
              <form className="card-body" onSubmit={handleSubmit(handleCreate)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">User Name</span>
                  </label>
                  <input
                    type="name"
                    placeholder="username"
                    className="input input-bordered rounded-sm"
                    {...register("username", {
                      required: "User name is required",
                    })}
                  />
                  {errors.username && (
                    <p className="text-red-900  font-bold">
                      {errors.username?.message}
                    </p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered rounded-sm"
                    {...register("email", {
                      required: "Email is required",
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-900  font-bold">
                      {errors.email?.message}
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
                {/* <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="confirmpassword"
                    className="input input-bordered rounded-sm"
                    {...register("confirmpassword", {
                      required: "Confirm password is required",
                    })}
                  />
                  {errors.confirmpassword && (
                    <p className="text-red-900 font-bold">
                      {errors.confirmpassword?.message}
                    </p>
                  )}
                </div> */}
                <div>
                  <p>
                    Have account?
                    <Link className="ml-2 text-warning" to="/login">
                      <span>Login Now</span>
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
