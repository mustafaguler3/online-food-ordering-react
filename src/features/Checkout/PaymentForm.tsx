import React from "react";

export default function PaymentForm() {
  return (
    <div className="payment-section">
      <div className="mb-0 title">
        <h3>Choose Payment Method</h3>

        <h6>There are many Types of Payment Method</h6>
      </div>
      <div className="accordion payment-accordion">
        <div className="accordion-item" id="ngb-accordion-item-9">
          <h2 role="heading" className="accordion-header">
            <button
              type="button"
              className="accordion-button"
              id="ngb-accordion-item-9-toggle"
              aria-controls="ngb-accordion-item-9-collapse"
              aria-expanded="true"
            >
              Credit / Debit Card
            </button>
          </h2>
          <div
            role="region"
            className="accordion-collapse collapse show"
            id="ngb-accordion-item-9-collapse"
            aria-labelledby="ngb-accordion-item-9-toggle"
          >
            <div className="accordion-body">
              <form className="row g-3">
                <div className="col-12">
                  <label className="form-label">Card Number</label>
                  <input
                    type="number"
                    id="inputCardnumber"
                    placeholder="Enter your card number"
                    className="form-control"
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">Card Holder Name</label>
                  <input
                    type="text"
                    id="inputCardholdername"
                    placeholder="Enter Holder name"
                    className="form-control"
                  />
                </div>
                <div className="col-sm-6">
                  <label className="form-label">Exp. Date</label>
                  <input
                    type="date"
                    id="inputAddress"
                    placeholder="Enter date"
                    className="form-control"
                  />
                </div>
                <div className="col-sm-6">
                  <label className="form-label">CVV</label>
                  <input
                    type="number"
                    id="inputCity"
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
              <ul className="card-list">
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
                        <span>**** **** 4586 </span>| Expires on
                        <span> 12/24</span>
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
                        <span>**** **** 4586 </span>| Expires on
                        <span> 12/24</span>
                      </h6>
                    </label>
                    <input
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault02"
                      className="form-check-input"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item" id="ngb-accordion-item-10">
          <h2 role="heading" className="accordion-header collapsed">
            <button
              type="button"
              className="accordion-button collapsed"
              id="ngb-accordion-item-10-toggle"
              aria-controls="ngb-accordion-item-10-collapse"
              aria-expanded="false"
            >
              My Wallet
            </button>
          </h2>
          <div
            role="region"
            className="accordion-collapse collapse"
            id="ngb-accordion-item-10-collapse"
            aria-labelledby="ngb-accordion-item-10-toggle"
          >
            <div className="accordion-body"></div>
          </div>
        </div>
        <div className="accordion-item" id="ngb-accordion-item-11">
          <h2 role="heading" className="accordion-header collapsed">
            <button
              type="button"
              className="accordion-button collapsed"
              id="ngb-accordion-item-11-toggle"
              aria-controls="ngb-accordion-item-11-collapse"
              aria-expanded="false"
            >
              Delivery Option
            </button>
          </h2>
          <div
            role="region"
            className="accordion-collapse collapse"
            id="ngb-accordion-item-11-collapse"
            aria-labelledby="ngb-accordion-item-11-toggle"
          >
            <div className="accordion-body"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
