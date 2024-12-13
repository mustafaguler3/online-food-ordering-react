import React from "react";

export default function OrderSummary() {
  return (
    <>
        <h5 className="bill-details-title fw-semibold dark-text">Bill Details</h5>
        <div className="sub-total">
          <h6 className="content-color fw-normal">Sub Total</h6>
          <h6 className="fw-semibold">$110</h6>
        </div>
        <div className="sub-total">
          <h6 className="content-color fw-normal">Delivery Charge (2 kms)</h6>
          <h6 className="fw-semibold success-color">Free</h6>
        </div>
        <div className="sub-total">
          <h6 className="content-color fw-normal">Discount (10%)</h6>
          <h6 className="fw-semibold">$11</h6>
        </div>
        <div className="grand-total">
          <h6 className="fw-semibold dark-text">To Pay</h6>
          <h6 className="fw-semibold amount">$99</h6>
        </div>
    </>
  );
}
