import React from "react";
import { useUser } from "./context/UserContext";
import { t } from "i18next";

export default function ChangeProfile() {
    const { user } = useUser();
  
  return (
<>

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
            <h6>{user?.firstName}</h6>
          </div>
          <a className="btn theme-outline">Edit</a>
        </li>
        <li className="ng-star-inserted">
          <div className="profile-content">
            <div className="d-flex align-items-center gap-sm-2 gap-1">
              <i className="ri-mail-fill"></i>
              <span>Email :</span>
            </div>
            <h6>{user?.email}</h6>
          </div>
          <a className="btn theme-outline">Change</a>
        </li>
        <li className="ng-star-inserted">
          <div className="profile-content">
            <div className="d-flex align-items-center gap-sm-2 gap-1">
              <i className="ri-phone-fill"></i>
              <span>Phone Number :</span>
            </div>
            <h6>{user?.phoneNumber}</h6>
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
</>


    
  );
}
