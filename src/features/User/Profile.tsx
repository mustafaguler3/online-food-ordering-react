import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import authService from "../../services/authService";
import { useUser } from "./context/UserContext";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Profile() {
  const { t, i18n } = useTranslation();
  const { user } = useUser()
  
  const getCurrentImage = (image: any) => {
    return authService.getProfileImage(image);
  };

  return (
    <>
      <section className="page-head-section">
        <div className="container page-heading">
          <h2 className="h3 mb-3 text-white text-center ng-star-inserted">
            {t("Profile")}
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
                {t("Profile")}
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section className="profile-section section-b-space">
        <div className="container">
          <div className="row g-3">
            <div className="col-lg-3">
              <div className="profile-sidebar sticky-top">
                <div className="profile-cover">
                  <img
                    src={getCurrentImage(user?.profileImage)}
                    alt="profile"
                    className="img-fluid profile-pic"
                  />
                </div>
                <div className="profile-name">
                  <h5 className="user-name">{user?.firstName}</h5>
                  <h6>{user?.email}</h6>
                </div>
                <ul className="profile-list">
                  <li className="active">
                    <i className="ri-user-3-line"></i>
                    <Link to={`change-profile`}>Change Profile</Link>
                  </li>
                  <li>
                    <i className="ri-shopping-bag-3-line"></i>
                    <a href="/account/my-order">My Order</a>
                  </li>
                  <li>
                    <i className="ri-map-pin-line"></i>
                    <Link to={`saved-address`}>Saved Address</Link>
                  </li>
                  <li>
                    <i className="ri-bank-card-line"></i>
                    <Link to={"saved-cards"}>Saved Card</Link>
                  </li>
                  <li>
                    <i className="ri-question-line"></i>
                    <a href="/pages/faqs">Help</a>
                  </li>
                  <li>
                    <i className="ri-settings-3-line"></i>
                    <a href="/account/settings">Setting</a>
                  </li>
                  <li>
                    <i className="ri-logout-box-r-line"></i>
                    <a>Log Out</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-9">
              <Outlet />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
