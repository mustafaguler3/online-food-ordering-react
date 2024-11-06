import React from "react";
import Categories from "../Category/Categories";

export default function Header() {
  return (
    <>
      <section
        id="home"
        className="home-wrapper home2 section-b-space overflow-hidden"
      >
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-7 col-12">
              <h2>Discover restaurants that food deliver near you</h2>
              <div className="search-section">
                <form className="auth-form search-head ng-untouched ng-pristine ng-valid">
                  <div className="form-group">
                    <div className="form-input mb-0">
                      <input
                        type="search"
                        id="inputusername"
                        placeholder="Search for Restaurant"
                        className="form-control search ng-untouched ng-pristine ng-valid"
                      />
                      <i className="ri-search-line search-icon"></i>
                    </div>
                  </div>
                </form>
                <a
                  href="javascript:void(0)"
                  role="button"
                  className="btn theme-btn mt-0"
                >
                  Search
                </a>
              </div>
            </div>
            <div className="col-lg-5 position-relative">
              <img
                src="assets/images/home-vector.png"
                className="img-fluid right-vector"
              />
            </div>
          </div>
        </div>
      </section>
      <Categories/>
    </>
  );
}
