import React, { useState } from "react";
import { RegisterForm } from "../models/register-form";
import { useForm } from "react-hook-form";
import AuthService from "../services/AuthService";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Register() {
  const { register, handleSubmit } = useForm<RegisterForm>();
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const navigate = useNavigate(); 
  
  const selectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setProfileImage(event.target.files[0]);
    }
  };

  const onSubmit = async (data: RegisterForm) => {
    if (profileImage) {
      try {
        await AuthService.register(data, profileImage); 
        toast.success("Registration successful")
        navigate("/login")
      } catch (error) {
        console.error("Registration failed:", error);
        toast.error("Registration failed. Please try again.")
      }
    }
  };

  return (
    <>
      <section className="page-head-section">
        <div className="container page-heading">
          <h2 className="h3 mb-3 text-white text-center">Register</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb flex-lg-nowrap justify-content-center">
              <li className="breadcrumb-item">
                <Link to="/">
                  <i className="ri-home-line"></i> Home
                </Link>
              </li>
              <li aria-current="page" className="breadcrumb-item active">
                Register
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section className="login-hero-section section-b-space">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6 col-md-10 m-auto">
              <div className="login-data">
               
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="auth-form"
                  encType="multipart/form-data"
                >
                  <h2>Sign-up</h2>
                  <h5>
                    or
                    <a href="/login">
                      <span className="theme-color">Login</span>
                    </a>
                  </h5>
                  <div className="form-input">
                    <input
                      type="text"
                      placeholder="Enter your first name"
                      {...register("firstName", { required: true })}
                      className="form-control"
                    />
                    <i className="ri-user-3-line"></i>
                  </div>
                  <div className="form-input">
                    <input
                      type="text"
                      placeholder="Enter your last name"
                      {...register("lastName", { required: true })}
                      className="form-control"
                    />
                    <i className="ri-user-3-line"></i>
                  </div>
                  <div className="form-input">
                    <input
                      type="text"
                      placeholder="Enter your username"
                      {...register("username", { required: true })}
                      className="form-control"
                    />
                    <i className="ri-user-3-line"></i>
                  </div>
                  <div className="form-input">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      {...register("email", { required: true })}
                      className="form-control"
                    />
                    <i className="ri-mail-line"></i>
                  </div>
                  <div className="form-input">
                    <input
                      type="file"
                      onChange={selectFile}
                      className="form-control"
                    />
                    <i className="bi-image-fill"></i>
                  </div>
                  <div className="form-input">
                    <input
                      type="tel"
                      placeholder="Enter your number"
                      {...register("phoneNumber", { required: true })}
                      className="form-control"
                    />
                    <i className="ri-phone-line"></i>
                  </div>
                  <div className="form-input">
                    <input
                      type="password"
                      placeholder="Enter your password"
                      {...register("password", { required: true })}
                      className="form-control"
                    />
                    <i className="ri-lock-password-line"></i>
                  </div>
                  <button
                    className="btn theme-btn submit-btn w-100 rounded-2"
                    type="submit"
                  >
                    Sign-Up
                  </button>
                  <p className="fw-normal content-color">
                    By creating an account, I accept the
                    <span className="fw-semibold">
                      {" "}
                      Terms &amp; Conditions &amp; Privacy Policy
                    </span>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
