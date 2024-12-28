import React, { useEffect } from "react";
import { useUser } from "./context/UserContext";

export default function SavedCards() {
  const { user } = useUser();

  return (
    <div className="cards-content">
      <div className="title">
        <div className="loader-line"></div>

        <h3>Saved Card</h3>
      </div>
      <div className="row g-4">
        {user && user?.cards.map((card) => (
            
          <div className="col-xl-4 col-lg-6 col-sm-6 col-12">
            <div className="color-1 debit-card">
              <div className="card-details">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="card-name fw-semibold">CREDIT CARD</h5>
                  <img
                    src="../assets/images/svg/network.svg"
                    alt="network"
                    className="img-fluid network"
                  />
                </div>
                <img
                  src="../assets/images/svg/Chip.svg"
                  alt="chip"
                  className="img-fluid chip"
                />
                <div className="ac-details">
                  <h6>AC No.</h6>
                  <h3>{card.cardNumber}</h3>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex gap-2">
                    <h6>Exp.</h6>
                    <h5>{card.expiryDate}</h5>
                  </div>
                  <div className="d-flex gap-2">
                    <h6>CVV</h6>
                    <h5>{card.cvv}</h5>
                  </div>
                </div>
                <div className="user-name">
                  <h5>{card.cardHolderName}</h5>
                </div>
              </div>
              <div className="card-hover">
                <div className="d-flex align-items-center gap-3">
                  <a className="text-white">
                    <i className="ri-edit-2-fill edit-icon"></i> Edit
                  </a>
                  <a className="text-white">
                    <i className="ri-delete-bin-fill"></i> Delete
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="col-xl-4 col-lg-6 col-sm-6 col-12">
          <div className="add-card">
            <div className="card-details">
              <div>
                <i className="ri-add-line add-icon"></i>
                <h5 className="fw-normal dark-text">Add New Card</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
