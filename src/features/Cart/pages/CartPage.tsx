import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useUser } from "../../../context/UserContext";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import AddressForm from "../components/AddressForm";
import PaymentForm from "../components/PaymentForm";
import ConfirmOrder from "../components/ConfirmOrder";
import "./CartPage.css";

export default function CartPage() {
  const { basket, loadBasket, addToCart } = useCart();
  const { user } = useUser();

  useEffect(() => {
    if (user?.id) {
      loadBasket(user.id);
    }
  }, [user]);

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
              <div className="col-lg-8">
                {/* Process Section */}
                <div className="process-section">
                  <ul className="process-list">
                    {steps.map((step, index) => (
                      <>
                        <li key={index}>
                          <div
                            className={`process-icon ${
                              currentStep === index ? "active" : ""
                            } ${currentStep > index ? "completed" : ""}`}
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
                          <h6
                            className={`${
                              currentStep === index
                                ? "text-warning"
                                : currentStep > index
                                ? "text-orange"
                                : ""
                            }`}
                          >
                            {step}
                          </h6>
                        </li>

                        {/* Progress Line */}
                        {index < steps.length - 1 && (
                          <div
                            className={`progress-line ${
                              currentStep > index ? "completed-line" : ""
                            }`}
                          ></div>
                        )}
                      </>
                    ))}
                  </ul>
                </div>

                {/* Step-Specific Content */}
                <div className="step-content">
                  {currentStep === 0 && <AddressForm />}
                  {currentStep === 1 && <PaymentForm />}
                  {currentStep === 2 && <ConfirmOrder />}
                </div>
              </div>
              <div className="col-lg-4">
                <CartItem
                  currentStep={currentStep}
                  handleNextStep={handleNextStep}
                  handlePreviousStep={handlePreviousStep}
                  items={basket?.items}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
