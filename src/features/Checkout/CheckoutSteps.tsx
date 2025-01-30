
interface CheckoutStepsProps {
    currentStep: number;
  }
  
  const steps = ["Cart", "Shipping Info", "Payment", "Confirmation"];
  
  const CheckoutSteps: React.FC<CheckoutStepsProps> = ({ currentStep }) => {
    return (
      <div className="flex justify-center items-center space-x-4 mb-6">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            {/* Adım İkonu */}
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-semibold ${
                index < currentStep
                  ? "bg-green-500" // Tamamlanan Adımlar
                  : index === currentStep
                  ? "bg-purple-600" // Aktif Adım
                  : "bg-gray-300" // Gelecek Adımlar
              }`}
            >
              {index + 1}
            </div>
  
            {/* Adım Adı */}
            <span
              className={`ml-2 font-medium ${
                index === currentStep ? "text-purple-600" : "text-gray-500"
              }`}
            >
              {step}
            </span>
  
            {/* Çizgi */}
            {index < steps.length - 1 && (
              <div className="w-10 h-1 bg-gray-300 mx-2"></div>
            )}
          </div>
        ))}
      </div>
    );
  };
  
  export default CheckoutSteps;