import React from "react";

export default function Header() {
  return (
    <>
      <section className="home-wrapper section-b-space overflow-hidden">
        <div className="background-effect">
          <div className="background-effect">
            <div className="main-circle">
              <div className="main-circle circle-1">
                <div className="main-circle circle-2"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="container text-center">
          <h1>MustFood</h1>
          <h2>Discover restaurants that deliver near you</h2>
          <div className="search-section">
            <form className="auth-form search-head ng-untouched ng-pristine ng-valid">
              <div className="form-group">
                <div className="form-input mb-0">
                  <input
                    type="text"
                    placeholder="Search for Restaurant"
                    className="form-control search ng-untouched ng-pristine ng-valid"
                  />
                  <i className="ri-search-line search-icon"></i>
                </div>
              </div>
            </form>
            <a
              href="javascript:void(0);"
              role="button"
              className="btn theme-btn mt-0"
            >
              Search
            </a>
          </div>

          <ul className="home-features-list d-md-flex d-none">
            <li>
              <div className="home-features-box">
                <img
                  alt="routing"
                  className="img-fluid icon"
                  src="assets/images/svg/routing.svg"
                />
                <h6>Wide Map</h6>
              </div>
            </li>
            <li>
              <div className="home-features-box">
                <img
                  alt="routing"
                  className="img-fluid icon"
                  src="assets/images/svg/3d-rotate.svg"
                />
                <h6>Easiest Order</h6>
              </div>
            </li>
            <li>
              <div className="home-features-box">
                <img
                  alt="routing"
                  className="img-fluid icon"
                  src="assets/images/svg/truck.svg"
                />
                <h6>Most Delivery</h6>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
