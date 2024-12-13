import { BasketItem } from "../types/cartTypes";
import productService from "../../../services/productService";
import OrderSummary from "./OrderSummary";

interface BasketItemProps {
  items: BasketItem[] | undefined;
  currentStep: number;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
}

export default function CartItem({
  items,
  currentStep,
  handleNextStep,
  handlePreviousStep,
}: BasketItemProps) {
  return (
    <div className="order-summery-section sticky-top">
      <div className="checkout-detail">
        <h3 className="fw-semibold dark-text checkout-title">Cart Items</h3>
        <div className="order-summery-section mt-0">
          {items?.map((item) => (
            <div className="checkout-detail p-0">
              <img
                style={{ width: "50%" }}
                className="img-fluid"
                src={productService.getProductImage(item.productImage)}
              />
              <ul>
                <li>
                  <div className="horizontal-product-box">
                    <div className="product-content">
                      <div className="d-flex align-items-center justify-content-between">
                        <h5>{item.productName}</h5>
                        <h6 className="product-price">${item.price}</h6>
                      </div>
                      <h6 className="ingredients-text"></h6>
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
              <OrderSummary />
            </div>
          ))}
        </div>

        {currentStep > 0 && (
          <a
            className="btn theme-btn restaurant-btn w-50 rounded-2"
            onClick={handlePreviousStep}
          >
            Back
          </a>
        )}
        {currentStep < 2 && (
          <a
          className="btn theme-btn restaurant-btn w-100 rounded-2"
          onClick={handleNextStep}
        >
          CheckOut {currentStep === 0 ? "Payment" : "Confirmation"}
        </a>
        )}
        

        <img
          src="assets/images/svg/dots-design.svg"
          alt="dots"
          className="dots-design"
        />
      </div>
    </div>
  );
}
