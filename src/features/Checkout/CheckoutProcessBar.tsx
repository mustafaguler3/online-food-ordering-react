import { useState } from "react";
import "./CheckoutProcessBar.css";
import { FaShippingFast, FaCreditCard, FaClipboardCheck, FaCheckCircle } from "react-icons/fa";

interface Step {
  id: number;
  label: string;
  link: string;
  icon: any;
}

interface CheckoutProcessBarProps {
  steps: Step[];
  currentStep: number;
}

const CheckoutProcessBar: React.FC<CheckoutProcessBarProps> = ({
  steps,
  currentStep,
}) => {
  return (
    <div className="process-section">
      <ul className="process-list">
        {steps.map((step) => {
          const isActive = step.id <= currentStep;

          const activeIcons: Record<number, string> = {
            1: "assets/images/svg/user-active.svg",
            2: "assets/images/svg/location-active.svg",
            3: "assets/images/svg/wallet-add-active.svg",
            4: "assets/images/svg/verify-active.svg"
          };

          const iconSrc = isActive ? activeIcons[step.id] : step.icon;

          return (
            <li key={step.id} className={isActive ? "active" : ""}>
              <a href={step.link}>
                <div className="process-icon">
                  <img src={iconSrc} alt={step.label} className="img-fluid icon" />
                </div>
                <h6>{step.label}</h6>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CheckoutProcessBar;