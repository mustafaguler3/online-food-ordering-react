import React from "react";

export default function CartItems() {
  return (
    <div className="order-summery-section sticky-top">
      <div className="checkout-detail">
        <h3 className="fw-semibold dark-text checkout-title">Cart Items</h3>
        <div className="order-summery-section mt-0">
          <div className="checkout-detail p-0">
            <ul>
              <li>
                <div className="horizontal-product-box">
                  <div className="product-content">
                    <div className="d-flex align-items-center justify-content-between">
                      <h5>Ultimate Loaded Nacho Fiesta</h5>
                      <h6 className="product-price">$20</h6>
                    </div>
                    <h6 className="ingredients-text">Hot Nacho Chips</h6>
                    <div className="d-flex align-items-center justify-content-between mt-md-2 mt-1 gap-1">
                      <h6 className="place">Serve 1</h6>
                      <div className="plus-minus">
                        <i className="ri-subtract-line sub"></i>
                        <input type="number" />
                        <i className="ri-add-line add"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <h5 className="bill-details-title fw-semibold dark-text">
              Bill Details
            </h5>
            <div className="sub-total">
              <h6 className="content-color fw-normal">Sub Total</h6>
              <h6 className="fw-semibold">$110</h6>
            </div>
            <div className="sub-total">
              <h6 className="content-color fw-normal">
                Delivery Charge (2 kms)
              </h6>
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
          </div>
        </div>
        <a
          className="btn theme-btn restaurant-btn w-100 rounded-2"
          href="/zomo/order/checkout"
        >
          Proceed to payment
        </a>
        <img
          src="../assets/images/svg/dots-design.svg"
          alt="dots"
          className="dots-design"
        />
      </div>
    </div>
  );
}
