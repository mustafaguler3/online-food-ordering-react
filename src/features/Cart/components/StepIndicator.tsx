import React from "react";
import "./StepIndicator.css"

interface StepIndicatorProps {
  currentStep: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep }) => {
  const steps = ["Address", "Payment", "Confirm Order"];

  return (
    <div className="step-indicator">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`step-item ${currentStep === index ? "active" : ""}`}
        >
          <span className={`icon ${currentStep === index ? "highlight" : ""}`}>
            {index + 1}
          </span>
          <span>{step}</span>
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
