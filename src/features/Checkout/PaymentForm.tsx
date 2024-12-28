import React, { useState } from "react";

export default function PaymentForm() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleSubmit = (event: any) => {
    const formData = new FormData(event.target)

    const cardData = {
      cardNumber: formData.get("cardNumber"),
      cardHolderName: formData.get("cardHolderName"),
      paymentMethod: formData.get("paymentMethod"),
      cvv: formData.get("cvv"),
      expiryDate: formData.get("expiryDate"),
    }

    

  }

  const toggleAccordion = (index:any) => {
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
              <form className="row g-3">
                <div className="col-12">
                  <label className="form-label">Card Number</label>
                  <input
                    type="number"
                    placeholder="Enter your card number"
                    className="form-control"
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">Card Holder Name</label>
                  <input
                    type="text"
                    placeholder="Enter Holder name"
                    className="form-control"
                  />
                </div>
                <div className="col-sm-6">
                  <label className="form-label">Exp. Date</label>
                  <input
                    type="date"
                    placeholder="Enter date"
                    className="form-control"
                  />
                </div>
                <div className="col-sm-6">
                  <label className="form-label">CVV</label>
                  <input
                    type="number"
                    placeholder="Enter your cvv"
                    className="form-control"
                  />
                </div>
                <div className="buttons">
                  <a className="btn gray-btn mt-0" href="/zomo/order/payment">
                    CANCEL
                  </a>
                  <a className="btn theme-btn mt-0" href="/zomo/order/payment">
                    SUBMIT
                  </a>
                </div>
              </form>
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
