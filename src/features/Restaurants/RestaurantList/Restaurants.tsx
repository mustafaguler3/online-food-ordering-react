import React, { useEffect, useState } from "react";
import { Restaurant } from "../../../models/Restaurant";
import restaurantService from "../../../services/restaurantService";
import { Product } from "../../../models/Product";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { t } from "i18next";
import productService from "../../../services/productService";

export default function Restaurants() {
  const [restaurants, setRestaurant] = useState<Restaurant[]>([]);

  useEffect(() => {
    const fetchRestaurant = async () => {
      const data = await restaurantService.getRestaurants();
      if (data) {
        setRestaurant(data);
      }
    };
    fetchRestaurant();
  }, []);

  return (
    <>
      <section className="restaurant-list section-b-space ratio3_2">
        <div className="container">
          <div className="title restaurant-title w-border pb-0">
            <h2>{t("Featured Restaurants")}</h2>
            <div className="loader-line"></div>
          </div>
          <div id="TabContent" className="tab-content restaurant-content">
            <div id="delivery-tab" className="tab-pane fade show active">
              <div className="row g-lg-4 g-3">
                {restaurants.map((item) => (
                  <div className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="vertical-product-box">
                      <div className="vertical-product-box-img">
                        <Link
                          className="bg-size"
                          to={`/restaurants/${item.id}`}
                          style={{
                            backgroundImage: `url(${productService.getProductImage(item.products[0].foodImageUrls[0])})`,
                          }}
                        >
                          <img
                            alt="vp1"
                            className="product-img-top w-100 bg-img"
                            style={{ display: "none" }}
                            src={productService.getProductImage(
                              item.products[0].foodImageUrls[0]
                            )}
                          />
                        </Link>
                      </div>
                      <div className="vertical-product-body">
                        <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                          <a href="/zomo/order/menu-listing/take-it-cheesy">
                            <h4 className="vertical-product-title">
                              {item.name}
                            </h4>
                          </a>
                          <h6 className="rating-star">
                            <span className="star">
                              <i className="ri-star-s-fill"></i>
                            </span>
                            {item.rating}
                          </h6>
                        </div>
                        <h5 className="product-items">{item.bestSeller}</h5>
                        <div className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                          <h5 className="place">{item.location}</h5>
                          <ul className="distance">
                            <li>
                              <i className="ri-map-pin-fill icon"></i>
                              {item.distance} km
                            </li>
                            <li>
                              <i className="ri-time-fill icon"></i>
                              {item.deliveryTime} min
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
