import React from "react";
import Products from "../Products/ProductList/Products";
import Restaurants from "../Restaurants/RestaurantList/Restaurants";

export default function Main() {
  return (
    <>
      <div className="container my-5">
        <div className="title-center">
          <h2>
            Tasty food to your destination
            <span> in 20 mins.</span>
          </h2>
        </div>
      </div>
      <section className="popular-restaurant section-b-space ratio3_2 overflow-hidden ng-star-inserted">
        <div className="container">
          <div className="row g-md-4 g-3">
            <Restaurants />
          </div>
        </div>
      </section>
    </>
  );
}
