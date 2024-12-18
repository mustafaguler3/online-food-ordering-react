import { BasketItem } from "../types/cartTypes";
import productService from "../../../services/productService";
import OrderSummary from "./OrderSummary";
import cartService from "../../../services/cartService";
import "./CartItem.css";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { useUser } from "../../User/context/UserContext";

interface BasketItemProps {
  items: BasketItem[] | undefined;
  currentStep?: number | undefined;
  handleNextStep?: () => void;
  handlePreviousStep?: () => void;
}
export default function CartItem({
  items: initialItems,
}: BasketItemProps) {
  const [items, setItems] = useState<BasketItem[] | undefined>(initialItems);
  const { basket,loadBasket } = useCart();
  const { user } = useUser();

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
    } catch (error) {
      console.error("Decrement failed:", error);
      alert("Failed to update cart!");
    }
  };

  const getItemQuantity = (productId: number) => {
    return items?.find((item) => item.productId === productId)?.quantity || 0;
  };

  useEffect(()=> {
    if(basket){
      loadBasket()
    }
  },[])

  return (
    <div className="order-summery-section sticky-top">
      <div className="checkout-detail p-3 shadow-sm bg-white rounded">
        <h3 className="fw-semibold dark-text checkout-title mb-3">
          Cart Items
        </h3>

        {items?.map((item) => (
          <div
            key={item.productId}
            className="d-flex align-items-center gap-3 border-bottom pb-3 mb-3"
          >
            {/* Sol Resim */}
            <div className="product-image-wrapper">
              <img
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
                className="img-fluid rounded"
                src={productService.getProductImage(item.productImage)}
                alt={item.productName}
              />
            </div>

            {/* Sağ Bilgiler */}
            <div className="product-details flex-grow-1">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="fw-bold mb-1">{item.productName}</h5>
                <h6 className="product-price text-success fw-bold">
                  ${item.price.toFixed(2)}
                </h6>
              </div>

              <div className="d-flex align-items-center justify-content-between mt-2">
                <h6 className="text-muted">Quantity: {item.quantity}</h6>

                {/* Artırma/Azaltma */}
                <div className="plus-minus d-flex align-items-center gap-2">
                  <a
                    onClick={() =>
                      decrementQuantity(item.productId, item.quantity)
                    }
                    className="btn btn-outline-secondary btn-sm rounded-circle"
                  >
                    -
                  </a>
                  <input
                    type="number"
                    value={item.quantity}
                    readOnly
                    className="form-control text-center p-1"
                    style={{ width: "50px" }}
                  />
                  <a
                    onClick={() =>
                      incrementQuantity(item.productId, item.quantity)
                    }
                    className="btn btn-outline-secondary btn-sm rounded-circle"
                  >
                    +
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
