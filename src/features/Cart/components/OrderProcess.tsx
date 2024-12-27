import React, { useEffect, useState } from "react";
import { useUser } from "../../User/context/UserContext";
import { Link } from "react-router-dom";
import AddressForm from "../../Checkout/AddressForm";
import PaymentForm from "../../Checkout/PaymentForm";
import ConfirmStep from "../../Checkout/ConfirmStep";


interface StepProps {
  currentStep: any;
}

export default function OrderProcess({ currentStep }: StepProps) {
  const { user, loadUser } = useUser();

  const steps = [
    {
      name: "account",
      label: "Account",
      icon: "user.svg",
      route: "/address",
    },
    { name: "address", label: "Address", icon: "location.svg", route: "" },
    {
      name: "payment",
      label: "Payment",
      icon: "wallet-add.svg",
      route: "/payment",
    },
    {
      name: "confirm",
      label: "Confirm",
      icon: "verify.svg",
      route: "/order/confirm-order",
    },
  ];

  const isStepActive = (stepName: any) => {
    const currentIndex = steps.findIndex((step) => step.name === currentStep);
    const stepIndex = steps.findIndex((step) => step.name === stepName);
    return stepIndex <= currentIndex;
  };
  return (
    <>
      <div className="process-section">
        <ul className="process-list">
          {steps.map((step) => (
            <li
              key={step.name}
              className={isStepActive(step.name) ? "active" : ""}
            >
              <Link to={step.route}>
                <div className="process-icon">
                  <img
                    src={`assets/images/svg/${
                      isStepActive(step.name)
                        ? step.icon.replace(".svg", "-active.svg")
                        : step.icon
                    }`}
                    alt={step.name}
                    className="img-fluid icon"
                  />
                </div>
                <h6>{step.label}</h6>
              </Link>
            </li>
          ))}
        </ul>

        {currentStep === "account" && !user && (
          <div className="account-part">
            <img
              src="../assets/images/account.svg"
              alt="account"
              className="img-fluid account-img"
            />
            <div className="title mb-0">
              <div className="loader-line"></div>
              <h3>Account</h3>
              <p>
                To place your order now, log in to your existing account or sign
                up
              </p>
              <div className="account-btn d-flex justify-content-center gap-2">
                <Link className="btn theme-outline mt-0" to="/login">
                  SIGN IN
                </Link>
                <Link className="btn theme-outline mt-0" to="/register">
                  SIGN UP
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <div>

        {currentStep === "address" && user && (
          <div>
            <AddressForm />
          </div>
        )}

        {currentStep === "payment" && user && (
          <div>
            <PaymentForm />
          </div>
        )}

        {currentStep === "confirm" && user && (
          <div>
            <ConfirmStep />
          </div>
        )}
      </div>
    </>
  );
}
