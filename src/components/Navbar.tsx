import React, { useEffect, useState } from "react";
import "./Navbar.css";
import "../App.css";
import { useTranslation } from "react-i18next";
import AuthService from "../services/AuthService";
import { Link } from "react-router-dom";

export function Navbar() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  //const currentUser = AuthService.getUserValue()
  const [currentUser, setCurrentUser] = useState(AuthService.getUserValue());
  
  useEffect(() => {
    const user = AuthService.getUserValue();
    setCurrentUser(user)
  },[])

  const handleLogout = () => {
    AuthService.logout(); 
    setCurrentUser(null)
    window.location.reload(); 
  };

  

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
                src="assets/images/svg/A.svg"
              />
            </Link>
            <a
              href="javascript:void(0);"
              className="btn btn-sm theme-btn location-btn mt-0 ms-3 d-flex align-content-center gap-1"
            >
              <i className="ri-map-pin-line"></i>
              {t("Location")}
            </a>
          </div>

          <div className="nav-option order-md-2">
            <div className="dropdown-button">
              <div className="cart-button">
                <span>1</span>
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
                          src="assets/images/product/vp-3.png"
                        />
                      </a>
                      <div className="drop-contain">
                        <a href="javascript:void(0);">
                          <h5>Egg Sandwich</h5>
                        </a>
                        <h6>
                          <span>1 x </span>
                          $80.58
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
                  <h4 className="theme-color fw-semibold">$155.00</h4>
                </div>
                <div className="button-group">
                  <a
                    className="btn btn-sm theme-btn w-100 d-block rounded-2"
                    href="/zomo/order/checkout"
                  >
                    {t("View Cart")}
                  </a>
                </div>
              </div>
            </div>

            <div className="language-flags">
              <img
                src="assets/images/tr.png"
                alt="TR"
                className="flag-icon"
                onClick={() => changeLanguage("tr")}
              />

              <img
                src="assets/images/us.png"
                alt="EN"
                className="flag-icon"
                onClick={() => changeLanguage("en")}
              />
            </div>

            {currentUser ? (
              <div className="profile-part dropdown-button order-md-2">
                <img
                  src={AuthService.getProfileImage(currentUser.profileImage)}
                  alt="profile"
                  className="img-fluid profile-pic"
                />
                <div>
                  <h6 className="fw-normal">{t("Hi")}, {currentUser.firstName}</h6>
                  <h5 className="fw-medium">{t("My Account")}</h5>
                </div>
                <div className="onhover-box onhover-sm">
                  <ul className="menu-list">
                    <li>
                      <Link to="/profile" className="dropdown-item">{t("Profile")}</Link>
                    </li>
                    <li>
                      <Link to="" className="dropdown-item" >{t("My orders")}</Link>
                    </li>
                    <li>
                      <Link to="" className="dropdown-item">{t("Saved Address")}</Link>
                    </li>
                    <li>
                      <Link to="" className="dropdown-item">{t("Saved cards")}</Link>
                    </li>
                    <li>
                      <Link to="" className="dropdown-item">{t("Settings")}</Link>
                    </li>
                  </ul>
                  <div className="bottom-btn">
                    <a className="theme-color fw-medium" onClick={handleLogout}>
                      <i className="ri-login-box-line me-2"></i>
                      {t("Logout")}
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="d-flex align-items-center">
                <Link to="/login" className="btn btn-sm theme-btn me-2">{t("Login")}</Link>
                <Link to="/register" className="btn btn-sm theme-btn">{t("Register")}</Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
