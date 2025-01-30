import React, { useState } from "react";
import orderService from "../../services/orderService";
import { useUser } from "../User/context/UserContext";
import { SavedCard } from "../../models/SavedCard";
import userService from "../../services/userService";
import { Payment } from "../../models/Payment";

const PaymentForm: React.FC<{
  shippingInfo: any;
  onSubmit: (info: any) => void;
}> = ({ onSubmit, shippingInfo }) => {
  const { user } = useUser();

  const [formData, setFormData] = useState<Payment>({
      cardNumber: "",
      cardHolderName: "",
      expiryDate: "",
      cvv: "",
      shippingAddress: shippingInfo,
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    onSubmit(formData);

    console.log("formData in payment form: ",formData)
  };

  
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="payment-section">
      <div className="mb-0 title">
        <h3>Choose Payment Method</h3>
        <h6>There are many Types of Payment Method</h6>
      </div>
      <div className="accordion payment-accordion">
        <div className="accordion-item" id="ngb-accordion-item-0">
          <h2 role="heading" className="accordion-header collapsed">
            <button
              type="button"
              className={`accordion-button ${isOpen ? "" : "collapsed"}`}
              id="ngb-accordion-item-0-toggle"
              aria-controls="ngb-accordion-item-0-collapse"
              aria-expanded={isOpen}
              onClick={toggleAccordion}
            >
              Credit / Debit Card
            </button>
          </h2>
          <div
            role="region"
            className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
            id="ngb-accordion-item-0-collapse"
            aria-labelledby="ngb-accordion-item-0-toggle"
          >
            <div className="accordion-body">
              <form className="row g-3" >
                <div className="col-12">
                  <label className="form-label">Card Number</label>
                  <input
                    type="number"
                    name="cardNumber"
                    onChange={handleChange}
                    value={formData.cardNumber}
                    id="inputCardnumber"
                    placeholder="Enter your card number"
                    className="form-control"
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">Card Holder Name</label>
                  <input
                    type="text"
                    name="cardHolderName"
                    onChange={handleChange}
                    value={formData.cardHolderName}
                    id="inputCardholdername"
                    placeholder="Enter Holder name"
                    className="form-control"
                  />
                </div>
                <div className="col-sm-6">
                  <label className="form-label">Exp. Date</label>
                  <input
                    type="date"
                    name="expiryDate"
                    onChange={handleChange}
                    value={formData.expiryDate}
                    id="inputAddress"
                    placeholder="Enter date"
                    className="form-control"
                  />
                </div>
                <div className="col-sm-6">
                  <label className="form-label">CVV</label>
                  <input
                    type="number"
                    name="cvv"
                    onChange={handleChange}
                    value={formData.cvv}
                    id="inputCity"
                    placeholder="Enter your cvv"
                    className="form-control"
                  />
                </div>
              </form>

              <ul className="card-list">
                {user.cards.map((item: any) => (
                  <li>
                    <div className="form-check form-check-reverse">
                      <label className="form-check-label">
                        <img
                          src="assets/images/icons/svg/mastercard.svg"
                          alt="mastercard"
                          className="img-fluid img"
                        />
                        <h6 className="card-name dark-text">
                          Mastercard
                          <span>{item.cardNumber} </span>| Expires on
                          <span>{item.expiryDate}</span>
                        </h6>
                      </label>
                      <input
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault01"
                        checked
                        className="form-check-input"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
