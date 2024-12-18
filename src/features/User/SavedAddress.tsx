import React, { useEffect, useState } from "react";
import "./Profile.css";
import { useUser } from "./context/UserContext";
import { Address } from "../../models/Address";
import userService from "../../services/userService";
import { toast } from "react-toastify";

export default function SavedAddress() {
  const { user } = useUser();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState<Address>({
    firstName: "",
    lastName: "",
    addressLine1: "",
    city: "",
    country: "",
    phone: "",
    zipCode: "",
    type: "Work",
    addressLine2: "",
  });

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => document.body.classList.remove("modal-open");
  }, [isModalOpen]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async () => {
    try {
      const response = await userService.addAddress(formData);
      console.log("Address Saved:", response);
      closeModal();
      toast.success("Address saved successfully");
    } catch (error) {
      console.error("Failed to save address:", error);
      toast.error("an error occurred during adding address");
    }
  };

  return (
    <>
      <div className="address-section bg-color h-100 mt-0">
        <div className="title">
          <h3>Saved Address</h3>
        </div>
        <div className="row g-3 ">
        {user?.addresses.map((address, index) => (
          <div key={index} className="col-md-6 ">
            
              <div  className="address-box white-bg">
                <div className="address-title d-flex justify-content-between">
                  <div className="d-flex align-items-center gap-2">
                    <i className="icon ri-home-4-fill"></i>
                    <h6>{address.type}</h6>
                  </div>

                  <button
                    className="btn btn-sm btn-link edit-btn"
                    onClick={() => openModal()}
                  >
                    Edit
                  </button>
                </div>
                <div className="address-details">
                  <h6>{address.addressLine1}</h6>
                  <h6 className="phone-number">{address.phone}</h6>
                </div>
              </div>
            
          </div>))}
          <div className="col-md-6">
            <div className="address-box white-bg w-100 new-address-box white-bg">
              <a
                onClick={() => openModal()}
                className="btn new-address-btn theme-outline rounded-2 mt-0"
              >
                Add New Address
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div>
          <div
            style={{ zIndex: "1055" }}
            aria-hidden="true"
            className="modal-backdrop fade show"
          ></div>

          <div
            role="dialog"
            tabIndex={-1}
            aria-modal="true"
            className="address-details-modal d-block modal fade show"
          >
            <div role="document" className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5">Address Details</h1>
                    <button
                      type="button"
                      onClick={() => closeModal()}
                      className="btn-close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form className="row g-3 ng-untouched ng-pristine ng-valid">
                      <div className="col-md-6">
                        <label className="form-label">First Name</label>
                        <input
                          type="text"
                          id="inputFirstname"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="Enter your fist name"
                          className="form-control ng-untouched ng-pristine ng-valid"
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Last Name</label>
                        <input
                          type="text"
                          id="inputLastname"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Enter your last name"
                          className="form-control ng-untouched ng-pristine ng-valid"
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label">Address</label>
                        <input
                          type="text"
                          id="inputAddress"
                          name="addressLine1"
                          value={formData.addressLine1}
                          onChange={handleInputChange}
                          placeholder="Enter your address"
                          className="form-control ng-untouched ng-pristine ng-valid"
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">City</label>
                        <input
                          type="text"
                          id="inputCity"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          placeholder="Enter your city"
                          className="form-control ng-untouched ng-pristine ng-valid"
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Country</label>
                        <input
                          type="text"
                          id="inputCountry"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          placeholder="Enter your country"
                          className="form-control ng-untouched ng-pristine ng-valid"
                        />
                      </div>
                      <div className="col-md-8">
                        <label className="form-label">Phone Number</label>
                        <input
                          type="tel"
                          id="inputPhone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your number"
                          className="form-control ng-untouched ng-pristine ng-valid"
                        />
                      </div>
                      <div className="col-md-4">
                        <label className="form-label">Zip</label>
                        <input
                          type="text"
                          id="inputZip"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          placeholder="Enter your zip"
                          className="form-control ng-untouched ng-pristine ng-valid"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <a
                      onClick={() => closeModal()}
                      href="javascript:void(0)"
                      className="btn gray-btn mt-0"
                    >
                      CANCEL
                    </a>
                    <a
                      onClick={handleSubmit}
                      href="javascript:void(0)"
                      className="btn theme-btn mt-0"
                    >
                      SUBMIT
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
