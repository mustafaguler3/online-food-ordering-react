import React, { useState } from "react";
import { useUser } from "../User/context/UserContext";
import orderService from "../../services/orderService";

export default function PaymentForm({onOrderSelect,selectedAddress,onStepChange}:any) {
  const { user } = useUser();
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    
    const paymentData = {
      cardNumber: formData.get("cardNumber"),
      cardHolderName: formData.get("cardHolderName"),
      paymentMethod: formData.get("paymentMethod"),
      cvv: formData.get("cvv"),
      expiryDate: formData.get("expiryDate"),
    };

    const orderData: any = {
      payment: paymentData,
      shippingAddress: selectedAddress
    };

    try {
      console.log("selected address -> ",selectedAddress)
      console.log("Submitting order data:", orderData);
      await orderService.createOrder(orderData)
      onOrderSelect(orderData)
      onStepChange("confirm")
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  const toggleAccordion = (index: any) => {
    setActiveAccordion((prev) => (prev === index ? null : index));
  };

  return (
    <div className="payment-section">
      <div className="mb-0 title">
        <h3>Choose Payment Method</h3>
        <h6>There are many Types of Payment Method</h6>
      </div>
      <div className="accordion payment-accordion">
        {/* Accordion Item 1 */}
        <div className="accordion-item">
          <h2 role="heading" className="accordion-header">
            <button
              type="button"
              className={`accordion-button ${
                activeAccordion === 1 ? "" : "collapsed"
              }`}
              onClick={() => toggleAccordion(1)}
              aria-expanded={activeAccordion === 1}
            >
              Credit / Debit Card
            </button>
          </h2>
          <div
            className={`accordion-collapse collapse ${
              activeAccordion === 1 ? "show" : ""
            }`}
          >
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
                  <button
                  type="submit"
                    className="btn theme-btn mt-0"
                  >
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
                    />
                  </div>
                </li>
                ))}
                
              </ul>
            </div>
          </div>
        </div>

        {/* Accordion Item 2 */}
        <div className="accordion-item">
          <h2 role="heading" className="accordion-header">
            <button
              type="button"
              className={`accordion-button ${
                activeAccordion === 2 ? "" : "collapsed"
              }`}
              onClick={() => toggleAccordion(2)}
              aria-expanded={activeAccordion === 2}
            >
              My Wallet
            </button>
          </h2>
          <div
            className={`accordion-collapse collapse ${
              activeAccordion === 2 ? "show" : ""
            }`}
          >
            <div className="accordion-body">Wallet details go here.</div>
          </div>
        </div>

        {/* Accordion Item 3 */}
        <div className="accordion-item">
          <h2 role="heading" className="accordion-header">
            <button
              type="button"
              className={`accordion-button ${
                activeAccordion === 3 ? "" : "collapsed"
              }`}
              onClick={() => toggleAccordion(3)}
              aria-expanded={activeAccordion === 3}
            >
              Delivery Option
            </button>
          </h2>
          <div
            className={`accordion-collapse collapse ${
              activeAccordion === 3 ? "show" : ""
            }`}
          >
            <div className="accordion-body">Delivery options go here.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
