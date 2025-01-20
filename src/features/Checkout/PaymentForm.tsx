import React, { useState } from "react";
import { useUser } from "../User/context/UserContext";
import orderService from "../../services/orderService";

export default function PaymentForm({
  onOrderSelect,
  selectedAddress,
  onStepChange,
}: any) {
  const { user } = useUser();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    const currentCard = {
      payment: {
        paymentMethod: "Saved Card",
      },
      shippingAddress: selectedAddress,
    };

    const paymentData = {
      cardNumber: formData.get("cardNumber"),
      cardHolderName: formData.get("cardHolderName"),
      paymentMethod: formData.get("paymentMethod"),
      cvv: formData.get("cvv"),
      expiryDate: formData.get("expiryDate"),
    };

    const orderData: any = {
      payment: paymentData ? paymentData : currentCard,
      shippingAddress: selectedAddress,
    };

    try {
      if (!user) {
        console.error("User is not authenticated!");
        return <p>Please log in to proceed.</p>;
      }
      console.log("selected address -> ", selectedAddress);
      console.log("Submitting order data:", orderData);
      await orderService.createOrder(orderData);
      onOrderSelect(orderData);
      onStepChange("confirm");
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  const handleCurrentCard = () => {
    const currentCard = {
      payment: {
        paymentMethod: "Saved Card",
      },
      shippingAddress: selectedAddress,
    };

    console.log("Added current payment ,", currentCard);
  };

  return (
    <>
      <div className="payment-section">
        <div className="mb-0 title">
          <h3>Choose Payment Method</h3>
          <h6>There are many Types of Payment Method</h6>
        </div>
        <div className="accordion-body">
          <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-12">
              <label className="form-label">Card Number</label>
              <input
                type="number"
                name="cardNumber"
                placeholder="Enter your card number"
                className="form-control"
              />
            </div>
            <div className="col-12">
              <label className="form-label">Card Holder Name</label>
              <input
                type="text"
                placeholder="Enter Holder name"
                name="cardHolderName"
                className="form-control"
              />
            </div>
            <div className="col-sm-6">
              <label className="form-label">Exp. Date</label>
              <input
                type="date"
                name="expiryDate"
                placeholder="Enter date"
                className="form-control"
              />
            </div>
            <div className="col-sm-6">
              <label className="form-label">CVV</label>
              <input
                type="number"
                name="cvv"
                placeholder="Enter your cvv"
                className="form-control"
              />
            </div>
            <div className="buttons">
              <a className="btn gray-btn mt-0" href="/zomo/order/payment">
                CANCEL
              </a>
              <button type="submit" className="btn theme-btn mt-0">
                SUBMIT
              </button>
            </div>
          </form>
          <ul className="card-list">
            {user.cards.map((card) => (
              <li>
                <div className="form-check form-check-reverse">
                  <label className="form-check-label">
                    <img
                      src="../assets/images/svg/mastercard.svg"
                      alt="mastercard"
                      className="img-fluid img"
                    />
                    <h6 className="card-name dark-text">
                      Mastercard <span>{card.cardNumber} </span> | Expires on
                      <span> {card.expiryDate}</span>
                    </h6>
                  </label>
                  <input
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault01"
                    className="form-check-input"
                    onClick={handleCurrentCard}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button
        className="btn theme-btn restaurant-btn w-50 my-2 rounded-2"
        type="submit"
      >
        Place Order
      </button>
    </>
  );
}
