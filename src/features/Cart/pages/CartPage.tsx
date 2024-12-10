import React, { useEffect } from "react";
import CartList from "../components/CartList";

import { useParams } from "react-router-dom";
import { useUser } from "../../../context/UserContext";
import { useCart } from "../context/CartContext";

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

      <section className="empty-cart-section section-b-space">
        <div className="container">
          {basket?.items && basket.items.length > 0 ? (
            <div>
              <ul>
                {basket.items.map((item, index) => (
                  <li key={index}>
                    Product ID: {item.productId}, Quantity: {item.quantity}
                  </li>
                ))}
              </ul>
              <h3>Total Price: ${basket.totalPrice}</h3>
            </div>
          ) : (
            <section className="empty-cart-section section-b-space">
              <div className="container">
                <div className="empty-cart-image">
                  <div>
                    <img
                      src="assets/images/empty-cart.svg"
                      alt="empty-cart"
                      className="img-fluid img"
                    />
                    <h2>It’s empty in your cart</h2>
                    <h5>To browse more restaurants, visit the main page.</h5>
                    <a
                      className="btn theme-outline restaurant-btn"
                      href="/zomo/home/classNameic"
                    >
                      see restaurant near you
                    </a>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </section>
    </div>
  );
}
