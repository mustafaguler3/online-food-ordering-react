import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";
import "./CartPage.css";
import { useUser } from "../../User/context/UserContext";
import OrderProcess from "../components/OrderProcess";

export default function CartPage() {
  const { basket } = useCart();
  const { user } = useUser();
  const [currentStep, setCurrentStep] = useState("account");

  const handleStepChange = (newStep: any) => {
    setCurrentStep(newStep);
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
                <OrderProcess currentStep={currentStep} onStepChange={handleStepChange}/>
              </div>
              <div className="col-lg-4">
                {basket ? (
                  <CartItem
                    items={basket?.items}
                    currentStep={currentStep}
                    onStepChange={handleStepChange}
                  />
                ) : (
                  <h2>No item in basket</h2>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
