import React, { useEffect, useState } from "react";
import { Product } from "../../../models/restaurant";
import ProductService from "../../../services/ProductService";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await ProductService.getProducts();
      if (data) {
        setProducts(data);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="row">
      {products.map((product) => (
        <div
          key={product.id}
          className="col-xl-3 col-lg-4 col-md-6 ng-star-inserted"
        >
          <div className="vertical-product-box product-style-3">
            <div className="vertical-product-box-img">
              <a
                className="bg-size"
                href={`/order/menu-listing/${product.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                style={{
                  background: `url('${ProductService.getProductImage(
                    product.foodImageUrls[0]
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
                  src={ProductService.getProductImage(product.foodImageUrls[0])}
                />
              </a>
              <div className="offers ng-star-inserted">
                <img
                  src="assets/images/shape.png"
                  alt="shape"
                  className="img-fluid"
                />
                <h6>{product.restaurant.discountDescription}</h6>
                <div className="d-flex align-items-center justify-content-end">
                  <h4>{product.restaurant.discountPercent}% OFF</h4>
                </div>
              </div>
            </div>
            <div className="vertical-product-body">
              <div className="d-flex align-items-center justify-content-between">
                <a
                  href={`/order/menu-listing/${product.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  <h4 className="vertical-product-title">{product.name}</h4>
                </a>
                <h6 className="rating-star">
                  <span className="star">
                    <i className="ri-star-s-fill"></i>
                  </span>
                  {product.restaurant.rating}
                </h6>
              </div>
              <h5 className="product-items">{product.description}</h5>
              <div className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                <h5 className="place">{product.restaurant.location}</h5>
                <ul className="distance">
                  <li>
                    <i className="ri-map-pin-fill icon"></i>
                    {product.restaurant.distance} km
                  </li>
                  <li>
                    <i className="ri-time-fill icon"></i>
                    {product.restaurant.deliveryTime} min
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
