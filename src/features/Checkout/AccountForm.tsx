import React from "react";
import { Link } from "react-router-dom";

export default function AccountForm() {
  return (
    <div className="account-part">
      <img
        src="assets/images/account.svg"
        alt="account"
        className="img-fluid account-img"
      />
      <div className="title mb-0">
        <div className="loader-line"></div>
        <h3>Account</h3>
        <p>
          To place your order now, log in to in your existing account or sign up
        </p>
        <div className="account-btn d-flex justify-content-center gap-2">
          <Link to={'login'} className="btn theme-outline mt-0">
            SIGN IN
          </Link>
          <Link to={'register'} className="btn theme-outline mt-0">
            SIGN UP
          </Link>
        </div>
      </div>
    </div>
  );
}
