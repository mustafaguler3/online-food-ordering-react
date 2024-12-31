import React, { useEffect, useState } from "react";
import { Restaurant } from "../../../models/Restaurant";
import restaurantService from "../../../services/restaurantService";
import { Link, useParams } from "react-router-dom";
import "./RestaurantDetail.css";
import Products from "../../Products/ProductList/Products";
import { Product } from "../../../models/Product";
import CartItem from "../../Cart/components/CartItem";
import { useCart } from "../../Cart/context/CartContext";


export default function RestaurantDetail() {
  const { restaurantId } = useParams();
  const [restaurant, setRestaurant] = useState<Restaurant | any>();
  const [products, setProducts] = useState<Product[] | any>();
  const { basket,addToCart,updateQuantity } = useCart()

  
  
  useEffect(() => {
    const getRestaurant = async () => {
      if (restaurantId) {
        try {
          const data = await restaurantService.getRestaurant(restaurantId);
          if (data) {
            setRestaurant(data);
            setProducts(data?.products);
          } else {
            console.log("No data returned from API");
          }
        } catch (error) {
          console.log("Error -> " + error);
        }
      }
    };
    getRestaurant();
  }, [restaurantId]);

  if (!restaurant) {
    return <p>No restaurant found..</p>;
  }

  return (
    <>
      <section className="product-banner-section">
        <div className="container">
          <div className="restaurant-box ng-star-inserted">
            <div className="restaurant-image">
              <img
                alt={restaurant.name}
                className="img-fluid img"
                src={restaurantService.getRestaurantIcon(
                  restaurant.restaurantIcon
                )}
              />
            </div>
            <div className="restaurant-details">
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                <div>
                  <h2 className="restaurant-name">{restaurant.name}</h2>
                  <h4 className="restaurant-place">{restaurant.location}</h4>
                </div>
                <div className="restaurant-description">
                  <div className="categories-icon">
                    <a href="javascript:void(0)" id="liveToastBtn">
                      <i className="ri-share-line icon text-white"></i>
                    </a>
                    <a className="like-btn animate inactive">
                      <i className="ri-heart-3-fill fill-icon"></i>
                      <i className="ri-heart-3-line text-white outline-icon"></i>
                      <div className="effect-group">
                        <span className="effect"></span>
                        <span className="effect"></span>
                        <span className="effect"></span>
                        <span className="effect"></span>
                        <span className="effect"></span>
                      </div>
                    </a>
                  </div>
                  <div className="distance d-flex align-items-center">
                    <h4 className="text-white shop-time">
                      {restaurant.distance} km
                    </h4>
                    <h4 className="rating-star">
                      <span className="star">
                        <i className="ri-star-s-fill"></i>
                      </span>
                      4.3 (1k+ Reviews)
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tab-details-section section-b-space">
        <div className="container">
          <div className="category-detail-tab">
            <div className="row g-4">
              <div className="col-lg-9">
                <div className="menu-button d-inline-block d-lg-none">
                  <a href="javascript:void(0)">
                    <i className="ri-book-open-line"></i>
                    Menu
                  </a>
                </div>

                <ul className="nav nav-tabs tab-style1" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      type="button"
                      className="nav-link active"
                      id="ngb-nav-0"
                      role="tab"
                      aria-selected="true"
                      aria-disabled="false"
                      aria-controls="ngb-nav-0-panel"
                    >
                      Order Online
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      type="button"
                      className="nav-link"
                      id="ngb-nav-1"
                      role="tab"
                      aria-selected="false"
                      aria-disabled="false"
                      tabIndex={-1}
                    >
                      Overview
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      type="button"
                      className="nav-link"
                      id="ngb-nav-2"
                      role="tab"
                      aria-selected="false"
                      aria-disabled="false"
                    >
                      Photos
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      type="button"
                      className="nav-link"
                      id="ngb-nav-3"
                      role="tab"
                      aria-selected="false"
                      aria-disabled="false"
                    >
                      Reviews
                    </button>
                  </li>
                </ul>

                <div className="tab-content product-details-content">
                  <div
                    className="tab-pane fade active show"
                    id="ngb-nav-0-panel"
                    role="tabpanel"
                    aria-labelledby="ngb-nav-0"
                  >
                    <Products items={products} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
