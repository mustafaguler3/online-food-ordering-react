import React, { useEffect, useState } from "react";
import "./CartPage.css";
import { useDispatch, useSelector } from "react-redux";
import { clearBasket, fetchBasket } from "../../../store/basketSlice";
import { AppDispatch } from "../../../store/store";
import { Basket } from "../types/cartTypes";

import productService from "../../../services/productService";
import cartService from "../../../services/cartService";
import { useCart } from "../context/CartContext";
import { updateBasketItem } from "../../../store/basketSlice";
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
      toast.success(`Coupon "${couponCode}" applied successfully!`);
      setCouponCode("");
      setError("");
    } catch (error) {
      toast.error("Failed to apply coupon. Please try again.");
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

      
      <div className="row product-list justify-content-center">
    <div className="col-lg-8">
        <div className="d-flex align-items-center mb-4">
            <h5 className="mb-0 flex-grow-1 fw-medium">There are <span className="fw-bold product-count">4</span> products in your cart</h5>
            <div className="flex-shrink-0">
                <a href="#!" className="text-decoration-underline link-secondary">Clear Cart</a>
            </div>
        </div>
        <div className="card product">
            <div className="card-body p-4">
                <div className="row gy-3">
                    <div className="col-sm-auto">
                        <div className="avatar-lg h-100">
                            <div className="avatar-title bg-danger-subtle rounded py-3">
                                <img src="../assets/images/products/img-12.png" alt="" className="avatar-md" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <a href="#!">
                            <h5 className="fs-16 lh-base mb-1">Branded Smart Chair Red</h5>
                        </a>
                        <ul className="list-inline text-muted fs-13 mb-3">
                            <li className="list-inline-item">Color : <span className="fw-medium">Red</span></li>
                            <li className="list-inline-item">Size : <span className="fw-medium">M</span></li>
                        </ul>
                        <div className="input-step">
                            <button type="button" className="minus">–</button>
                            <input type="number" className="product-quantity" value="3" min="0" max="100" />
                            <button type="button" className="plus">+</button>
                        </div>
                    </div>
                    <div className="col-sm-auto">
                        <div className="text-lg-end">
                            <p className="text-muted mb-1 fs-12">Item Price:</p>
                            <h5 className="fs-16">$<span className="product-price">89.99</span></h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <div className="row align-items-center gy-3">
                    <div className="col-sm">
                        <div className="d-flex flex-wrap my-n1">
                            <div>
                                <a href="#!" className="d-block text-body p-1 px-2" data-bs-toggle="modal" data-bs-target="#removeItemModal"><i className="ri-delete-bin-fill text-muted align-bottom me-1"></i> Remove</a>
                            </div>
                            <div>
                                <a href="#!" className="d-block text-body p-1 px-2"><i className="ri-star-fill text-muted align-bottom me-1"></i> Add Wishlist</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-auto">
                        <div className="d-flex align-items-center gap-2 text-muted">
                            <div>Total :</div>
                            <h5 className="fs-14 mb-0">$<span className="product-line-price">269.97</span></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    <div className="col-lg-4">
        <div className="sticky-side-div">
            <div className="card">
                <div className="card-body">
                    <div className="text-center">
                        <h6 className="mb-3 fs-15">Have a <span className="fw-semibold">promo</span> code ?</h6>
                    </div>
                    <div className="hstack gap-3 px-3 mx-n3">
                        <input className="form-control me-auto" type="text" placeholder="Enter coupon code" value="Toner15" aria-label="Add Promo Code here..." />
                        <button type="button" className="btn btn-primary w-xs">Apply</button>
                    </div>
                </div>
            </div>
            <div className="card overflow-hidden">
                <div className="card-header border-bottom-dashed">
                    <h5 className="card-title mb-0 fs-15">Order Summary</h5>
                </div>
                <div className="card-body pt-4">
                    <div className="table-responsive table-card">
                        <table className="table table-borderless mb-0 fs-15">
                            <tbody>
                                <tr>
                                    <td>Sub Total :</td>
                                    <td className="text-end cart-subtotal">$1361.97</td>
                                </tr>
                                <tr>
                                    <td>Discount <span className="text-muted">(Toner15)</span>:</td>
                                    <td className="text-end cart-discount">-$204.30</td>
                                </tr>
                                <tr>
                                    <td>Shipping Charge :</td>
                                    <td className="text-end cart-shipping">$65.00</td>
                                </tr>
                                <tr>
                                    <td>Estimated Tax (12.5%) : </td>
                                    <td className="text-end cart-tax">$170.25</td>
                                </tr>
                                <tr className="table-active">
                                    <th>Total (USD) :</th>
                                    <td className="text-end">
                                        <span className="fw-semibold cart-total">$1392.92</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="hstack gap-2 justify-content-end">
                <button type="button" className="btn btn-hover btn-danger">Continue Shopping</button>
                <button type="button" className="btn btn-hover btn-success">Check Out <i className="ri-logout-box-r-line align-bottom ms-1"></i></button>
            </div>
        </div>
    </div>
</div>
    </div>
  );
}
