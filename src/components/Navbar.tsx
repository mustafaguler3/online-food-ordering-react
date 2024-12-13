import React, { useEffect, useState } from "react";
import "./Navbar.css";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import AuthService from "../services/authService";
import { useUser } from "../context/UserContext";
import { useCart } from "../features/Cart/context/CartContext";
import productService from "../services/productService";

export function Navbar() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  const { user, logout } = useUser();
  const { basket } = useCart();
  const totalCount = basket?.items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <header>
      <div className="container">
        <nav className="navbar navbar-expand-lg p-0">
          <button type="button" className="navbar-toggler">
            <span className="navbar-toggler-icon">
              <i className="ri-menu-line"></i>
            </span>
          </button>
          <div className="d-flex align-items-center gap-1">
            <Link to="/">
              <img
                alt="logo"
                className="img-fluid logo"
                src="../assets/images/svg/A.svg"
              />
            </Link>
            <a
              className="btn btn-sm theme-btn location-btn mt-0 ms-3 d-flex align-content-center gap-1"
            >
              <i className="ri-map-pin-line"></i>
              {t("Location")}
            </a>
          </div>

          <div className="nav-option order-md-2">
            <div className="dropdown-button">
              {basket?.items.map((item) => (
                <>
                  <div className="cart-button">
                    <span>{totalCount == null ? 0 : totalCount}</span>
                    <i className="ri-shopping-cart-line text-white cart-bag"></i>
                  </div>
                  <div className="onhover-box">
                    <ul className="cart-list">
                      <li className="product-box-contain">
                        <div className="drop-cart">
                          <a href="javascript:void(0);" className="drop-image">
                            <img
                              alt=""
                              className="blur-up lazyloaded"
                              src={productService.getProductImage(
                                item.productImage
                              )}
                            />
                          </a>
                          <div className="drop-contain">
                            <a href="javascript:void(0);">
                              <h5>{item.productName}</h5>
                            </a>
                            <h6>
                              <span>{item.quantity} x </span>${item.price}
                            </h6>
                            <button className="close-button close_button">
                              <i className="fa-solid fa-xmark"></i>
                            </button>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div className="price-box">
                      <h5>Total :</h5>
                      <h4 className="theme-color fw-semibold">
                        ${basket?.totalPrice.toFixed(2)}
                      </h4>
                    </div>
                    <div className="button-group">
                      <Link
                        className="btn btn-sm theme-btn w-100 d-block rounded-2"
                        to={"/cart"}
                      >
                        {t("View Cart")}
                      </Link>
                    </div>
                  </div>
                </>
              ))}
            </div>

            <div className="language-flags">
              <img
                src="../assets/images/tr.png"
                alt="TR"
                className="flag-icon"
                onClick={() => changeLanguage("tr")}
              />

              <img
                src="../assets/images/us.png"
                alt="EN"
                className="flag-icon"
                onClick={() => changeLanguage("en")}
              />
            </div>

            {user ? (
              <div className="profile-part dropdown-button order-md-2">
                <img
                  src={AuthService.getProfileImage(user.profileImage)}
                  alt="profile"
                  className="img-fluid profile-pic"
                />
                <div>
                  <h6 className="fw-normal">
                    {t("Hi")}, {user.firstName}
                  </h6>
                  <h5 className="fw-medium">{t("My Account")}</h5>
                </div>
                <div className="onhover-box onhover-sm">
                  <ul className="menu-list">
                    <li>
                      <Link to="/profile" className="dropdown-item">
                        {t("Profile")}
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="dropdown-item">
                        {t("My orders")}
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="dropdown-item">
                        {t("Saved Address")}
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="dropdown-item">
                        {t("Saved cards")}
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="dropdown-item">
                        {t("Settings")}
                      </Link>
                    </li>
                  </ul>
                  <div className="bottom-btn">
                    <a className="theme-color fw-medium" onClick={logout}>
                      <i className="ri-login-box-line me-2"></i>
                      {t("Logout")}
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="d-flex align-items-center">
                <Link to="/login" className="btn btn-sm theme-btn me-2">
                  {t("Login")}
                </Link>
                <Link to="/register" className="btn btn-sm theme-btn">
                  {t("Register")}
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
