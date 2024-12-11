import React, { useEffect } from "react";
import CartList from "../components/CartList";

import { useParams } from "react-router-dom";
import { useUser } from "../../../context/UserContext";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

export default function CartPage() {
  const { basket, loadBasket, addToCart } = useCart();
  const { user } = useUser();

  useEffect(() => {
    if (user?.id) {
      loadBasket(user.id);
    }
  }, [user]);

  return (
    <div>
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
                <div className="process-section">
                  <ul className="process-list">
                    <li>
                      <a href="/zomo/order/address">
                        <div className="process-icon">
                          <img
                            alt="location"
                            className="img-fluid icon ng-star-inserted"
                            src="assets/images/svg/location.svg"
                          />
                        </div>
                        <h6>Address</h6>
                      </a>
                    </li>
                    <li>
                      <a href="/zomo/order/payment">
                        <div className="process-icon">
                          <img
                            alt="wallet-add"
                            className="img-fluid icon ng-star-inserted"
                            src="assets/images/svg/wallet-add.svg"
                          />
                        </div>
                        <h6>Payment</h6>
                      </a>
                    </li>
                    <li>
                      <a href="/zomo/order/confirm-order">
                        <div className="process-icon">
                          <img
                            alt="verify"
                            className="img-fluid icon"
                            src="assets/images/svg/verify.svg"
                          />
                        </div>
                        <h6>Confirm</h6>
                      </a>
                    </li>
                  </ul>
                </div>
                
              </div>
              <div className="col-lg-4">
                <CartItem items={basket?.items}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
