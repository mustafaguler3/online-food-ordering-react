import React, { useEffect, useState } from "react";
import "./CartPage.css";
import { useDispatch, useSelector } from "react-redux";
import {
  clearBasket,
  fetchBasket,
} from "../../../store/basketSlice";
import { AppDispatch } from "../../../store/store";
import { Basket } from "../types/cartTypes";

import productService from "../../../services/productService";
import cartService from "../../../services/cartService";
import { useCart } from "../context/CartContext";
import { updateBasketItem } from '../../../store/basketSlice';
import Icon from '@mui/material/Icon';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

export default function CartPage() {
  const dispatch = useDispatch<AppDispatch>();
  const basket = useSelector((state: any) => state.basket.basket);
  const loading = useSelector((state: any) => state.basket.loading);
 
  useEffect(() => {
    dispatch(fetchBasket());
  }, [dispatch]);

  const handleClearBasket = () => {
    dispatch(clearBasket());
  };

  const incrementQuantity = (productId: number, quantity: number) => {
    dispatch(updateBasketItem({ productId, quantity: quantity + 1 }));
  };
  
  const decrementQuantity = (productId: number, quantity: number) => {
    if (quantity > 1) {
      dispatch(updateBasketItem({ productId, quantity: quantity - 1 }));
    }
  };

  const [couponCode, setCouponCode] = useState("");
  const [error, setError] = useState(""); 

  const applyCoupon = async () => {
    if (!couponCode) {
      setError("Please enter a valid coupon code.");
      return;
    }

    try {
      await cartService.applyCode(couponCode);
      dispatch(fetchBasket());
      toast.success(`Coupon "${couponCode}" applied successfully!`)
      setCouponCode(""); 
      setError("");
    } catch (error) {
      toast.error("Failed to apply coupon. Please try again.")
      setError("Failed to apply coupon. Please try again.");
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

      <div className="shopping-cart-container">
        <div className="grid-container">
          <div className="cart-section">
            <div className="cart-box">
              <div className="cart-header">
                <h4>Shopping Cart</h4>
              </div>
              <div className="cart-table">
                <table>
                  <thead>
                    <tr>
                      <th>Products</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Sub-Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {basket?.items.map((item: any) => (
                      <tr>
                        <td>
                          <div className="product-info">
                            <button
                              onClick={() => handleClearBasket}
                              className="remove-btn"
                            >
                              ❌
                            </button>
                            <img
                              src={productService.getProductImage(
                                item.productImage
                              )}
                              alt="Veg Burger"
                              className="product-img"
                            />
                            <span className="product-name">{item.name}</span>
                          </div>
                        </td>
                        <td>${item.unitPrice}</td>
                        <td>
                          <div className="quantity-control">
                            <button
                              onClick={() =>
                                decrementQuantity(item.productId, item.quantity)
                              }
                              className="quantity-btn"
                            >
                              <FontAwesomeIcon icon={faMinus} /> 
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              onClick={() =>
                                incrementQuantity(item.productId, item.quantity)
                              }
                              className="quantity-btn"
                            >
                              <FontAwesomeIcon icon={faPlus} /> 
                            </button>
                          </div>
                        </td>
                        <td>${item.totalPrice.toFixed(2) || '0.00'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>} 
          </div>
          
          {/* Cart Total Section */}
          <div className="cart-total-section">
            <div className="cart-total-box">
              <h4>Cart Total</h4>
              <div className="totals">
                <div className="total-item">
                  <span>Sub-total</span>
                  <span className={basket.discount > 0 ? 'old-price' : ''}>${basket.totalPrice}</span>
                </div>
                <div className="total-item">
                  <span>Delivery</span>
                  <span>Free</span>
                </div>
                <div className="total-item">
                  <span>Discount</span>
                  <span>-${basket.discount}</span>
                </div>
                <div className="total-item">
                  <span>Tax</span>
                  <span>+${basket.tax}</span>
                </div>
                <div className="divider"></div>
                <div className="total-item total-final">
                  <span>Total</span>
                  <span>${basket.grandTotal?.toFixed(2)}</span>
                </div>
              </div>
              <div className="coupon-section">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Enter Coupon Code"
                  className="coupon-input"
                />
                <button onClick={applyCoupon} className="btn-orange">
                  Apply Coupon
                </button>
              </div>
              <a href="/yum_b/checkout" className="btn-orange">
                Proceed to Checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
