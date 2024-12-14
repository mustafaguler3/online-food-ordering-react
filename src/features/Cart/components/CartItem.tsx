import { BasketItem } from "../types/cartTypes";
import productService from "../../../services/productService";
import OrderSummary from "./OrderSummary";
import cartService from "../../../services/cartService";
import "./CartItem.css"
import { useState } from "react";

interface BasketItemProps {
  items: BasketItem[] | undefined;
  currentStep?: number | undefined;
  handleNextStep?: () => void;
  handlePreviousStep?: () => void;
}
export default function CartItem({
  items: initialItems,
  currentStep,
  handleNextStep,
  handlePreviousStep,
}: BasketItemProps) {
  
  
  const [items, setItems] = useState<BasketItem[] | undefined>(initialItems);

  const incrementQuantity = async (productId: number, quantity: number) => {
    setItems((prevItems) =>
      prevItems?.map((item) =>
        item.productId === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );

    try {
      await cartService.updateCart(productId, getItemQuantity(productId) + 1);
    } catch (error) {
      console.error("Increment failed:", error);
      alert("Failed to update cart!");
    }
  }
  const decrementQuantity = async (productId: number,quantity: number) => {
    const currentQuantity = getItemQuantity(productId);
    if (currentQuantity <= 1) return;
    setItems((prevItems) =>
      prevItems?.map((item) =>
        item.productId === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
    try {
      await cartService.updateCart(productId, currentQuantity - 1);
    } catch (error) {
      console.error("Decrement failed:", error);
      alert("Failed to update cart!");
    }
  }

  const getItemQuantity = (productId: number) => {
    return items?.find((item) => item.productId === productId)?.quantity || 0;
  };
  
  return (
    <div className="order-summery-section sticky-top">
      <div className="checkout-detail">
        <h3 className="fw-semibold dark-text checkout-title">Cart Items</h3>
        <div className="order-summery-section mt-0">
          
            <div className="checkout-detail p-0">
            {items?.map((item) => (
              <div>
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
                          <a onClick={() => decrementQuantity(item.productId,item.quantity)} className="ri-subtract-line sub"></a>
                          <input type="number" value={item.quantity}/>
                          <a onClick={() => incrementQuantity(item.productId,item.quantity)} className="ri-add-line add"></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              </div>
            ))}
            </div>
        
        </div>

        {currentStep! > 0 && (
          <a
            className="btn theme-btn restaurant-btn w-50 rounded-2"
            onClick={handlePreviousStep}
          >
            Back
          </a>
        )}
        {currentStep! < 2 && (
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
