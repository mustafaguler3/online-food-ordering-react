import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import AuthService from "../../../services/AuthService";

export default function Dashboard() {
  const [currentUser, setCurrentUser] = useState(AuthService.getUserValue());
  const { t, i18n } = useTranslation();
  
  const getCurrentImage = (image: any) => {
    return AuthService.getProfileImage(image);
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
                    src={getCurrentImage(currentUser?.profileImage)}
                    alt="profile"
                    className="img-fluid profile-pic"
                  />
                </div>
                <div className="profile-name">
                  <h5 className="user-name">{currentUser?.firstName}</h5>
                  <h6>{currentUser?.email}</h6>
                </div>
                <ul className="profile-list">
                  <li className="active">
                    <i className="ri-user-3-line"></i>
                    <a href="/zomo/account/change-profile">Change Profile</a>
                  </li>
                  <li>
                    <i className="ri-shopping-bag-3-line"></i>
                    <a href="/zomo/account/my-order">My Order</a>
                  </li>
                  <li>
                    <i className="ri-map-pin-line"></i>
                    <a href="/zomo/account/saved-address">Saved Address</a>
                  </li>
                  <li>
                    <i className="ri-bank-card-line"></i>
                    <a href="/zomo/account/saved-card">Saved Card</a>
                  </li>
                  <li>
                    <i className="ri-question-line"></i>
                    <a href="/zomo/pages/faqs">Help</a>
                  </li>
                  <li>
                    <i className="ri-settings-3-line"></i>
                    <a href="/zomo/account/settings">Setting</a>
                  </li>
                  <li>
                    <i className="ri-logout-box-r-line"></i>
                    <a>Log Out</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-9">
              <div className="change-profile-content">
                <div className="title ng-star-inserted">
                  <div className="loader-line ng-star-inserted"></div>
                  <h3 className="ng-star-inserted">{t("Change Profile")}</h3>
                </div>
                <ul className="profile-details-list">
                  <li className="ng-star-inserted">
                    <div className="profile-content">
                      <div className="d-flex align-items-center gap-sm-2 gap-1">
                        <i className="ri-user-3-fill"></i>
                        <span>Name :</span>
                      </div>
                      <h6>{currentUser?.firstName}</h6>
                    </div>
                    <a className="btn theme-outline">Edit</a>
                  </li>
                  <li className="ng-star-inserted">
                    <div className="profile-content">
                      <div className="d-flex align-items-center gap-sm-2 gap-1">
                        <i className="ri-mail-fill"></i>
                        <span>Email :</span>
                      </div>
                      <h6>{currentUser?.email}</h6>
                    </div>
                    <a className="btn theme-outline">Change</a>
                  </li>
                  <li className="ng-star-inserted">
                    <div className="profile-content">
                      <div className="d-flex align-items-center gap-sm-2 gap-1">
                        <i className="ri-phone-fill"></i>
                        <span>Phone Number :</span>
                      </div>
                      <h6>{currentUser?.phoneNumber}</h6>
                    </div>
                    <a className="btn theme-outline">Change</a>
                  </li>
                  <li className="ng-star-inserted">
                    <div className="profile-content">
                      <div className="d-flex align-items-center gap-sm-2 gap-1">
                        <i className="ri-lock-2-fill"></i>
                        <span>Password :</span>
                      </div>
                      <h6>*****</h6>
                    </div>
                    <a className="btn theme-outline">Change</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
