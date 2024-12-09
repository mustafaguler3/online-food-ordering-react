import React, { useEffect, useState } from "react";
import ProductService from "../../../services/productService";
import { Restaurant } from "../../../models/Restaurant";

export default function Restaurants() {
  const [restaurants, setRestaurant] = useState<Restaurant[]>([]);

  useEffect(() => {
    const fetchRestaurant = async () => {
      const data = await restaurantService.getRestaurants();
      console.log("effect outside -> "+data)
      if (data) {
        console.log("effect inside-> "+data)
        setRestaurant(data);
      }
    };
    fetchRestaurant();
  }, []);

  return (
    <div className="row">
      {restaurants?.map((restaurant) => (
        <div
          key={restaurant.id}
          className="col-xl-3 col-lg-4 col-md-6 ng-star-inserted"
        >
          <div className="vertical-product-box product-style-3">
            <div className="vertical-product-box-img">
              <a
                className="bg-size"
                href={`/restaurants/${restaurant.id}`}
                style={{
                  background: `url('${ProductService.getProductImage(
                    restaurant?.products?.[0].foodImageUrls?.[0]
                  )}')`,
                  height: "200px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  borderRadius: "10px",
                }}
              >
                <img
                  alt=""
                  className="product-img-top w-100 bg-img"
                  style={{ display: "none" }}
                  src={ProductService.getProductImage(restaurant?.products?.[0].foodImageUrls?.[0])}
                />
              </a>
              <div className="offers ng-star-inserted">
                <img
                  src="assets/images/shape.png"
                  alt="shape"
                  className="img-fluid"
                />
                
              </div>
            </div>

            <div className="vertical-product-body">
              <div className="d-flex align-items-center justify-content-between">
                <a href={`/products/${restaurant.id}`}>
                  <h4 className="vertical-product-title">{restaurant.name}</h4>
                </a>
                <h6 className="rating-star">
                  <span className="star">
                    <i className="ri-star-s-fill"></i>
                  </span>
                  {restaurant.rating}
                </h6>
              </div>
              <h5 className="product-items">
                {restaurant.discountDescription}
              </h5>
              <div className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                <h5 className="place">{restaurant.location}</h5>
                <ul className="distance">
                  <li>
                    <i className="ri-map-pin-fill icon"></i>
                    {restaurant.distance} km
                  </li>
                  <li>
                    <i className="ri-time-fill icon"></i>
                    {restaurant.deliveryTime} min
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
