import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer-section section-t-space">
  
  <div className="subscribe-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="subscribe-part">
            <h5>
              Don't pass up our fantastic discounts. email offers from all of
              our best eateries
            </h5>
            
            <div className="position-relative w-100">
              <input
                type="email"
                placeholder="Enter your Email"
                className="form-control subscribe-form-control"
              /><a
                href="javascript:void(0);"
                className="btn theme-btn subscribe-btn mt-0"
                >Subscribe Now</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="main-footer">
      <div className="row g-3">
        <div className="col-xl-4 col-lg-12">
          <div className="footer-logo-part">
            <img
              alt="logo"
              className="img-fluid logo"
              src="../assets/images/svg/A.svg"
            />
            <p>
              Welcome to our online order website! Here, you can browse our wide
              selection of products and place orders from the comfort of your
              own home.
            </p>
            <div className="social-media-part">
                <ul className="social-icon">
                  <li>
                    <a href="https://www.facebook.com/login/"
                      ><i className="ri-facebook-fill icon"></i
                    ></a>
                  </li>
                  <li>
                    <a href="https://twitter.com/i/flow/login"
                      ><i className="ri-twitter-fill icon"></i
                    ></a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/login/"
                      ><i className="ri-linkedin-fill icon"></i
                    ></a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/accounts/login/"
                      ><i className="ri-instagram-fill icon"></i
                    ></a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/"
                      ><i className="ri-youtube-fill icon"></i
                    ></a>
                  </li>
                </ul></div>
          </div>
        </div>
        <div className="col-xl-8">
          <div className="row g-3">
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                <div>
                  <h5 className="footer-title">Company</h5>
                    <ul className="content">
                      <li>
                        <a href="/zomo/about"><h6>About us</h6></a>
                      </li>
                      <li>
                        <a href="/zomo/contact"><h6>Contact us</h6></a>
                      </li>
                      <li>
                        <a href="/zomo/order/offer"><h6>Offer</h6></a>
                      </li>
                      <li>
                        <a href="/zomo/pages/faqs"><h6>FAQs</h6></a>
                      </li>
                     
                    </ul>
                   
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                <div>
                  <h5 className="footer-title">Account</h5>
                    <ul className="content">
                      <li>
                        <a href="/zomo/account/my-order"><h6>My orders</h6></a>
                      </li>
                      <li>
                        <a href="/zomo/pages/wishlist"><h6>Wishlist</h6></a>
                      </li>
                      <li>
                        <a href="/zomo/order/checkout"
                          ><h6>Shopping Cart</h6></a
                        >
                      </li>
                      <li>
                        <a href="/zomo/account/saved-address"
                          ><h6>Saved Address</h6></a
                        >
                      </li>
                     
                    </ul>
                    
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                <div>
                  <h5 className="footer-title">Useful links</h5>
                    <ul className="content">
                      <li>
                        <a href="/zomo/blog/grid-left-sidebar"
                          ><h6>Blogs</h6></a
                        >
                      </li>
                      <li>
                        <Link to="/login"><h6>Login</h6></Link>
                      </li>
                      <li>
                        <Link to="/sign-up"><h6>Register</h6></Link>
                      </li>
                      <li>
                        <Link to="/profile"
                          ><h6>Profile</h6></Link>
                        
                      </li>
                      <li>
                        <a href="/zomo/account/settings"><h6>Settings</h6></a>
                      </li>
                      
                    </ul>
                    
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                <div>
                  <h5 className="footer-title">Top Brands</h5>
                    <ul className="content">
                      <li>
                        <a href="/zomo/order/menu-listing/poultry-palace"
                          ><h6>PizzaBoy</h6></a
                        >
                      </li>
                      <li>
                        <a href="/zomo/order/menu-listing/poultry-palace"
                          ><h6>Saladish</h6></a
                        >
                      </li>
                      <li>
                        <a href="/zomo/order/menu-listing/poultry-palace"
                          ><h6>IcePops</h6></a
                        >
                      </li>
                      <li>
                        <a href="/zomo/order/menu-listing/poultry-palace"
                          ><h6>Maxican Hoy</h6></a
                        >
                      </li>
                      <li>
                        <a href="/zomo/order/menu-listing/poultry-palace"
                          ><h6>La Foodie</h6></a
                        >
                      </li>
                     
                    </ul>
                    
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
    <div className="bottom-footer-part">
      <div
        className="d-flex align-items-center justify-content-between flex-wrap gap-2"
      >
        <h6>@ Copyright 2024 MUSTFOOD. All rights Reserved.</h6>
        <img
          alt="card"
          className="img-fluid cards"
          src="../assets/images/icons/footer-card.png"
        />
      </div>
      
    </div>
  </div>
</footer>

  )
}
