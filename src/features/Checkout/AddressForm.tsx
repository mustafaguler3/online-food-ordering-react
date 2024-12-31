import React, { useState } from "react";
import { useUser } from "../User/context/UserContext";
import { Address } from "../../models/Address";
import addressService from "../../services/addressService";
import { toast } from "react-toastify";

export default function AddressForm({ onAddressSelect, onStepChange }: any) {
  const { user } = useUser();
  const [openModal, setOpenModal] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);

  const handleEditAddress = (address: any) => {
    setSelectedAddress(address);
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedAddress(null);
  };
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const addressData = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      addressLine1: formData.get("addressLine1"),
      addressLine2: formData.get("addressLine2"),
      city: formData.get("city"),
      country: formData.get("country"),
      state: formData.get("state"),
      phone: formData.get("phone"),
      zipCode: formData.get("zipCode"),
      tpye: formData.get("type"),
    };

    if (selectedAddress) {
      // Güncelleme işlemi
      console.log("Updating address:", addressData);
      // updateAddress(selectedAddress.id, addressData); // Güncelleme için API çağrısı
    } else {
      console.log("Adding new address:", addressData);
      toast.success("Adding new address:");
      await addressService.addAddress(addressData);
      onAddressSelect({
        shippingAddress: addressData,
      });
      onStepChange("payment");
      handleCloseModal();
    }
  };

  const handleDeliverHere = async (address: Address) => {
    try {
      console.log("Saving selected address:", address);
      onAddressSelect({
        addressId: address.id,
      });
      onStepChange("payment");
    } catch (error) {
      console.error("Error saving address:", error);
      alert("Failed to save address!");
    }
  };

  return (
    <div className="address-section">
      <div className="title">
        <div className="loader-line"></div>
        <h3>Select Saved Address</h3>
        <h6>You’ve added some addresses before. You can select one below.</h6>
      </div>
      <div className="row g-3">
        {user.addresses.map((address, index) => (
          <div className="col-md-6" key={index}>
            <div className="address-box white-bg">
              <div className="address-title">
                <div className="d-flex align-items-center gap-2">
                  <i className="icon ri-home-4-fill"></i>
                  <h6>{address.type}</h6>
                </div>
                <a
                  className="edit-btn"
                  onClick={() => handleEditAddress(address)}
                >
                  Edit
                </a>
              </div>
              <div className="address-details">
                <h6>
                  {address.addressLine1}, {address.addressLine2}
                </h6>
                <h6 className="phone-number">+{address.phone}</h6>
                <div className="option-section">
                  <button
                    onClick={() => handleDeliverHere(address)}
                    className="btn gray-btn rounded-2 mt-0"
                  >
                    Deliver Here
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="col-md-6">
          <div className="address-box white-bg new-address-box white-bg">
            <button
              onClick={() => {
                setSelectedAddress(null);
                setOpenModal(true);
              }}
              className="btn new-address-btn theme-outline rounded-2 mt-0"
            >
              Add New Address
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {openModal && (
        <div>
          <div
            style={{ zIndex: 1055 }}
            aria-hidden="true"
            className="modal-backdrop fade show"
            onClick={handleCloseModal}
          ></div>
          <div
            role="dialog"
            tabIndex={-1}
            aria-modal="true"
            className="address-details-modal d-block modal fade show"
          >
            <div role="document" className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5">Address Details</h1>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={handleCloseModal}
                  ></button>
                </div>
                <div className="modal-body">
                  <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-md-6">
                      <label htmlFor="inputFirstname" className="form-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="inputFirstname"
                        defaultValue={selectedAddress?.firstName || ""}
                        placeholder="Enter your first name"
                        name="firstName"
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="inputLastname" className="form-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="inputLastname"
                        name="lastName"
                        defaultValue={selectedAddress?.lastName || ""}
                        placeholder="Enter your last name"
                        className="form-control"
                      />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="inputCity" className="form-label">
                        City
                      </label>
                      <input
                        type="text"
                        id="inputCity"
                        name="city"
                        defaultValue={selectedAddress?.city || ""}
                        placeholder="Enter your city"
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="inputCountry" className="form-label">
                        Country
                      </label>
                      <input
                        type="text"
                        id="inputCountry"
                        name="country"
                        defaultValue={selectedAddress?.country || ""}
                        placeholder="Enter your country"
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="inputState" className="form-label">
                        State
                      </label>
                      <input
                        type="tel"
                        id="inputState"
                        name="state"
                        defaultValue={selectedAddress?.state || ""}
                        placeholder="Enter your state"
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="inputZip" className="form-label">
                        Zip
                      </label>
                      <input
                        type="text"
                        id="inputZip"
                        name="zipCode"
                        defaultValue={selectedAddress?.zipCode || ""}
                        placeholder="Enter your zip"
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-5">
                      <label htmlFor="inputPhone" className="form-label">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="inputPhone"
                        name="phone"
                        defaultValue={selectedAddress?.phone || ""}
                        placeholder="Enter your number"
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="inputAddressLine1" className="form-label">
                        Address 1
                      </label>
                      <input
                        type="text"
                        id="inputAddressLine1"
                        name="addressLine1"
                        defaultValue={selectedAddress?.addressLine1 || ""}
                        placeholder="Enter your address 1"
                        className="form-control"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="inputAddressLine2" className="form-label">
                        Address 2
                      </label>
                      <input
                        type="text"
                        id="inputAddressLine2"
                        name="addressLine2"
                        defaultValue={selectedAddress?.addressLine2 || ""}
                        placeholder="Enter your address 2"
                        className="form-control"
                      />
                    </div>

                    <div className="col-md-4">
                      <label htmlFor="inputType" className="form-label">
                        Type
                      </label>
                      <select
                        id="inputType"
                        name="type"
                        className="form-select"
                        defaultValue={selectedAddress?.type || ""}
                        required
                      >
                        <option value="" disabled>
                          Select Address Type
                        </option>
                        <option value="HOME">Home</option>
                        <option value="WORK">Work</option>
                        <option value="OTHER">Other</option>
                      </select>
                    </div>

                    <div className="modal-footer">
                      <button
                        className="btn gray-btn mt-0"
                        onClick={handleCloseModal}
                      >
                        Cancel
                      </button>
                      <button type="submit" className="btn theme-btn mt-0">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
