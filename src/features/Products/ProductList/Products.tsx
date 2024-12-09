import React, { useEffect, useState } from "react";
import { Product } from "../../../models/Product";
import ProductService from "../../../services/ProductService";
import "./Products.css";
interface ProductProps {
  items: Product[];
}

export default function Products({ items }: ProductProps) {
  
  const groupProductsByCategory = (
    products: Product[]
  ): Record<string, Product[]> => {
    return products.reduce(
      (groups: Record<string, Product[]>, product: Product) => {
        const { category } = product;
        if (!groups[category]) {
          groups[category] = [];
        }
        groups[category].push(product);
        return groups;
      },
      {}
    );
  };
  //Agent.Catalog.list().then(products => setProducts(products))
  // Group products by category
  const categorizedProducts = groupProductsByCategory(items);
  return (
    <>
      <div className="row g-lg-3 g-2">
        <div className="col-lg-4">
          <div className="product-sidebar sticky-top">
            <div className="sidebar-search">
              <input type="text" placeholder="Search Dishes.." />
              <i className="ri-search-line"></i>
            </div>
          </div>
        </div>

        <div className="col-lg-8">
          <div
            tabIndex={0}
            className="product-box-section section-b-space"
            style={{ overflowY: "auto" }}
          >
            {Object.keys(categorizedProducts).map((category, index) => (
              <>
                <div className="product-details-box-title" id="item-1">
                  {category != null ? category : "no category"}
                </div>

                <div className="scrollspy-example-2">
                  <div className="product-details-box-list">
                    {categorizedProducts[category].map((item) => (
                      <div className="product-details-box">
                        <div className="product-img">
                          <img
                            alt="rp1"
                            className="img-fluid img"
                            src={ProductService.getProductImage(
                              item.foodImageUrls[0]
                            )}
                          />
                        </div>
                        <div className="product-content">
                          <div className="description d-flex align-items-center justify-content-between">
                            <div>
                              <div className="d-flex align-items-center gap-2">
                                <img
                                  src="/assets/images/svg/veg.svg"
                                  alt="veg"
                                  className="img-fluid ng-star-inserted"
                                />
                                <h6 className="product-name" id="item-1-1">
                                  {item.name}
                                </h6>
                              </div>
                              <div className="rating-section">
                                <span className="visually-hidden ng-star-inserted">
                                  (*)
                                </span>
                                <span
                                  className="ng-star-inserted"
                                  style={{ cursor: "default" }}
                                >
                                  ★
                                </span>
                                <span className="visually-hidden ng-star-inserted">
                                  (*)
                                </span>
                                <span
                                  className="ng-star-inserted"
                                  style={{ cursor: "default" }}
                                >
                                  ★
                                </span>
                                <span className="visually-hidden ng-star-inserted">
                                  (*)
                                </span>
                                <span
                                  className="ng-star-inserted"
                                  style={{ cursor: "default" }}
                                >
                                  ★
                                </span>
                                <span className="visually-hidden ng-star-inserted">
                                  (*)
                                </span>
                                <span
                                  className="ng-star-inserted"
                                  style={{ cursor: "default" }}
                                >
                                  ★
                                </span>
                                <span className="visually-hidden ng-star-inserted">
                                  (*)
                                </span>
                                <span
                                  className="ng-star-inserted"
                                  style={{ cursor: "default" }}
                                >
                                  ★
                                </span>
                                <h6 className="rating-amount">1k+ Ratings</h6>
                              </div>
                              <p>{item.description}</p>
                            </div>
                            <div className="product-box-price">
                              <h2 className="theme-color fw-semibold">
                                ${item.price}
                              </h2>
                              <a className="btn theme-outline add-btn mt-0">
                                +Add
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
