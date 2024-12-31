import { BasketItem } from "../types/cartTypes";
import cartService from "../../../services/cartService";
import "./CartItem.css";
import { useCart } from "../context/CartContext";
import { useUser } from "../../User/context/UserContext";
import { useEffect, useState } from "react";
interface BasketItemProps {
  items: BasketItem[] | undefined;
  currentStep?: any;
  onStepChange?: (val:any) => void;
}
export default function CartItem({ currentStep, onStepChange,items: initialItems }: BasketItemProps) {
  const [items, setItems] = useState<BasketItem[] | undefined>(initialItems);
  const { basket, loadBasket } = useCart();
  const { user } = useUser();

  const handleStepChange = (val: any) => {
    if (onStepChange) {
      onStepChange(val);
    }
  };
  useEffect(() => {
    if(currentStep === "account" && user){
      handleStepChange("address")
    }
  },[])

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
      await loadBasket()
    } catch (error) {
      console.error("Increment failed:", error);
      alert("Failed to update cart!");
    }
  };
  const decrementQuantity = async (productId: number, quantity: number) => {
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
      await loadBasket()
    } catch (error) {
      console.error("Decrement failed:", error);
      alert("Failed to update cart!");
    }
  };

  const getItemQuantity = (productId: number) => {
    return items?.find((item) => item.productId === productId)?.quantity || 0;
  };

  if (!items || items.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  
  const goToNextStep = () => {
    if (currentStep === "account") {
      handleStepChange("address");
    } else if (currentStep === "address") {
      handleStepChange("payment");
    } else if (currentStep === "payment") {
      handleStepChange("confirm");
    }
  };

  const goToPreviousStep = () => {
    if (currentStep === "confirm") {
      handleStepChange("payment");
    } else if (currentStep === "payment") {
      handleStepChange("address");
    } else if (currentStep === "address") {
      handleStepChange("account");
    }
  };

  return (
    <div className="order-summery-section sticky-top">
      <div className="checkout-detail">
        <h3 className="fw-semibold dark-text checkout-title">Your Cart</h3>
        <div className="order-summery-section mt-0">
          <div className="checkout-detail p-0 ng-star-inserted">
            {items.map((item) => (
              <ul>
              <li className="ng-star-inserted">
                <div className="horizontal-product-box">
                  <div className="product-content">
                    <div className="d-flex align-items-center justify-content-between">
                      <h5>{item.productName}</h5>
                      <h6 className="product-price">${item.price}</h6>
                    </div>
                    <h6 className="ingredients-text">{item.description}</h6>
                    <div className="d-flex align-items-center justify-content-between mt-md-2 mt-1 gap-1">
                      <h6 className="place">Quantity: {item.quantity}</h6>
                      <div className="plus-minus">
                        <i className="ri-subtract-line sub" 
                        onClick={() => decrementQuantity(item.productId,item.quantity)}></i>
                        <input type="number" value={item.quantity}/>
                        <i className="ri-add-line add" 
                        onClick={() => incrementQuantity(item.productId,item.quantity)}></i>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

            </ul>
            ))}
            
            <h5 className="bill-details-title fw-semibold dark-text">
              Bill Details
            </h5>
            <div className="sub-total">
              <h6 className="content-color fw-normal">Sub Total</h6>
              <h6 className="fw-semibold">${basket?.totalPrice}</h6>
            </div>
            <div className="sub-total">
              <h6 className="content-color fw-normal">
                Delivery Charge (2 kms)
              </h6>
              <h6 className="fw-semibold success-color">Free</h6>
            </div>
            <div className="sub-total">
              <h6 className="content-color fw-normal">Tax</h6>
              <h6 className="fw-semibold">${basket?.tax.toFixed(2)}</h6>
            </div>
            <div className="sub-total">
              <h6 className="content-color fw-normal">Discount</h6>
              <h6 className="fw-semibold">${basket?.discount.toFixed(2)}</h6>
            </div>
            <div className="grand-total">
              <h6 className="fw-semibold dark-text">To Pay</h6>
              <h6 className="fw-semibold amount">${basket?.grandTotal.toFixed(2)}</h6>
            </div>
          </div>
        </div>
        <a
          className="btn theme-btn restaurant-btn w-100 rounded-2"
          onClick={goToNextStep}
        >
          CheckOut
        </a>
        <img
          src="assets/images/svg/dots-design.svg"
          alt="dots"
          className="dots-design"
        />
      </div>
    </div>
  );
}
