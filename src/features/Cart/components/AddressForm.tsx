import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Grid,
  TextField,
  DialogActions,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "./AddressForm.css";
import { Address } from "../../../api/types/userTypes";
import { SubmitHandler, useForm } from "react-hook-form";

export default function AddressForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Address>();

  const onSubmit: SubmitHandler<Address> = (data) => {
    console.log("Submitted Address:", data);
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div>
      {/* Address Section */}
      <div className="address-section">
        <div className="row g-3">
          {/* Other address items here */}

          <div className="col-md-6">
            <div className="address-box white-bg new-address-box white-bg">
              <button
                className="btn new-address-btn theme-outline rounded-2 mt-0"
                onClick={toggleModal}
              >
                Add New Address
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Content */}
      {isModalOpen && (
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5">Address Details</h1>
            <button
              type="button"
              className="btn-close"
              onClick={toggleModal}
            ></button>
          </div>
          <div className="modal-body">
            <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
              <div className="col-md-6">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  id="firstName"
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                  className={`form-control ${
                    errors.firstName ? "is-invalid" : ""
                  }`}
                />
                {errors.firstName && (
                  <div className="invalid-feedback">
                    {errors.firstName.message}
                  </div>
                )}
              </div>

              <div className="col-md-6">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  id="lastName"
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                  className={`form-control ${
                    errors.lastName ? "is-invalid" : ""
                  }`}
                />
                {errors.lastName && (
                  <div className="invalid-feedback">
                    {errors.lastName.message}
                  </div>
                )}
              </div>

              <div className="col-12">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  id="address"
                  {...register("address", { required: "Address is required" })}
                  className={`form-control ${
                    errors.address ? "is-invalid" : ""
                  }`}
                />
                {errors.address && (
                  <div className="invalid-feedback">
                    {errors.address.message}
                  </div>
                )}
              </div>

              <div className="col-md-6">
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <input
                  id="city"
                  {...register("city", { required: "City is required" })}
                  className={`form-control ${errors.city ? "is-invalid" : ""}`}
                />
                {errors.city && (
                  <div className="invalid-feedback">{errors.city.message}</div>
                )}
              </div>

              <div className="col-md-6">
                <label htmlFor="country" className="form-label">
                  Country
                </label>
                <input
                  id="country"
                  {...register("country", { required: "Country is required" })}
                  className={`form-control ${
                    errors.country ? "is-invalid" : ""
                  }`}
                />
                {errors.country && (
                  <div className="invalid-feedback">
                    {errors.country.message}
                  </div>
                )}
              </div>

              <div className="col-md-4">
                <label htmlFor="zipCode" className="form-label">
                  Zip Code
                </label>
                <input
                  id="zipCode"
                  type="number"
                  {...register("zipCode", {
                    required: "Zip code is required",
                    min: 1000,
                  })}
                  className={`form-control ${
                    errors.zipCode ? "is-invalid" : ""
                  }`}
                />
                {errors.zipCode && (
                  <div className="invalid-feedback">
                    {errors.zipCode.message}
                  </div>
                )}
              </div>

              <div className="col-md-8">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  {...register("phone", {
                    required: "Phone number is required",
                  })}
                  className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                />
                {errors.phone && (
                  <div className="invalid-feedback">{errors.phone.message}</div>
                )}
              </div>

              <div className="col-md-12">
                <label htmlFor="type" className="form-label">
                  Address Type
                </label>
                <select
                  id="type"
                  {...register("type", {
                    required: "Address type is required",
                  })}
                  className={`form-select ${errors.type ? "is-invalid" : ""}`}
                >
                  <option value="">Select Type</option>
                  <option value="Home">Home</option>
                  <option value="Work">Work</option>
                </select>
                {errors.type && (
                  <div className="invalid-feedback">{errors.type.message}</div>
                )}
              </div>

              <div className="modal-footer">
                <button className="btn gray-btn mt-0" onClick={toggleModal}>
                  CANCEL
                </button>
                <button className="btn theme-btn mt-0">SUBMIT</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
