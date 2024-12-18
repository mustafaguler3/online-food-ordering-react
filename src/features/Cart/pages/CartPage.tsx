import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import AddressForm from "../components/AddressForm";
import PaymentForm from "../components/PaymentForm";
import ConfirmOrder from "../components/ConfirmOrder";
import "./CartPage.css";
import { useUser } from "../../User/context/UserContext";

export default function CartPage() {
  const { basket, loadBasket } = useCart();
  const { user } = useUser();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.id) {
      loadBasket();
    }
  }, []);

  const [currentStep, setCurrentStep] = useState(0);
  const steps = ["Address", "Payment", "Confirm Order"];

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className="bg-color">
      <section className="page-head-section">
        <div className="container page-heading">
          <h2 className="h3 mb-3 text-white text-center ng-star-inserted">
            Cart
          </h2>

          <nav aria-label="breadcrumb">
            <ol className="breadcrumb flex-lg-nowrap justify-content-center justify-content-lg-star">
              <li className="breadcrumb-item ng-star-inserted">
                <a href="/zomo/home/classNameic">
                  <i className="ri-home-line"></i>Home
                </a>
              </li>
              <li
                aria-current="page"
                className="breadcrumb-item active ng-star-inserted"
              >
                Cart
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="account-section section-b-space pt-0">
        <div className="container">
          <div className="layout-sec">
            <div className="row g-lg-4 g-4">
              {/* Ana Adımlar Bölümü */}
              <div className="col-lg-8">
                {/* Process Section */}
                <div className="process-section mb-4">
                  <ul className="process-list d-flex align-items-center justify-content-between position-relative">
                    {steps.map((step, index) => (
                      <React.Fragment key={index}>
                        <li className="text-center flex-grow-1 position-relative">
                          {/* Process Icon */}
                          <div
                            className={`process-icon mx-auto mb-2 d-flex justify-content-center align-items-center rounded-circle shadow ${
                              currentStep === index
                                ? "active shadow-lg bg-warning"
                                : currentStep > index
                                ? "completed bg-orange text-white"
                                : "bg-light"
                            }`}
                            style={{
                              width: "60px",
                              height: "60px",
                              transition: "all 0.3s ease-in-out",
                            }}
                          >
                            <img
                              alt={step.toLowerCase()}
                              className="img-fluid icon"
                              src={`assets/images/svg/${
                                currentStep >= index
                                  ? index === 0
                                    ? "location-active"
                                    : index === 1
                                    ? "wallet-add-active"
                                    : "verify-active"
                                  : index === 0
                                  ? "location"
                                  : index === 1
                                  ? "wallet-add"
                                  : "verify"
                              }.svg`}
                            />
                          </div>

                          {/* Step Label */}
                          <h6
                            className={`mt-1 fw-semibold ${
                              currentStep === index
                                ? "text-warning"
                                : currentStep > index
                                ? "text-orange"
                                : "text-secondary"
                            }`}
                          >
                            {step}
                          </h6>

                          {/* Progress Line */}
                          {index < steps.length - 1 && (
                            <div
                              className={`progress-line position-absolute ${
                                currentStep > index ? "bg-orange" : "bg-light"
                              }`}
                              style={{
                                width: "100%",
                                height: "4px",
                                top: "30px",
                                left: "50%",
                                zIndex: "-1",
                                transform: "translateY(50%)",
                              }}
                            ></div>
                          )}
                        </li>
                      </React.Fragment>
                    ))}
                  </ul>
                </div>

                {/* Step-Specific Content */}
                <div className="step-content p-4 rounded shadow-sm bg-white">
                  {currentStep === 0 && <AddressForm />}
                  {currentStep === 1 && <PaymentForm />}
                  {currentStep === 2 && <ConfirmOrder />}
                </div>

                {/* Navigation Buttons */}
                <div className="d-flex justify-content-between mt-4">
                  {currentStep > 0 && (
                    <button
                      className="btn btn-outline-warning rounded-pill px-4 py-2 shadow-sm"
                      onClick={handlePreviousStep}
                    >
                      Back
                    </button>
                  )}
                  {currentStep < 2 && (
                    <button
                      className="btn btn-warning text-white rounded-pill px-4 py-2 shadow-lg"
                      onClick={handleNextStep}
                    >
                      {currentStep === 0
                        ? "Proceed to Payment"
                        : "Confirm Order"}
                    </button>
                  )}
                </div>
              </div>

              {/* Cart Bölümü */}
              <div className="col-lg-4">
                <div className="cart-section bg-light rounded shadow-sm p-4">
                  <h5 className="fw-bold mb-4 text-secondary">Your Cart</h5>
                  <CartItem
                    items={basket?.items}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
