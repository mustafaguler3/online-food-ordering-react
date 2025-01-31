import React, { useEffect, useState } from "react";
import { useUser } from "./context/UserContext";
import { Order, OrderItem } from "../../models/Order";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { useSelector } from "react-redux";
import {
  clearOrder,
  fetchOrderForUser,
  fetchOrdersForUser,
} from "../../store/orderSlice";
import restaurantService from "../../services/restaurantService";
import { OrderResponse } from "../../models/OrderResponse";

import moment from "moment";
import { useCart } from "../Cart/context/CartContext";

export default function MyOrders() {
  const dispatch = useDispatch<AppDispatch>();
  const { orders, order, status, error } = useSelector(
    (state: any) => state.orders
  );
  const { basket } = useCart();

  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log("Order in myOrders component ", order);
  useEffect(() => {
    dispatch(fetchOrdersForUser());
  }, [dispatch]);

  const openModel = (orderId: number) => {
    dispatch(fetchOrderForUser(orderId));
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    dispatch(clearOrder());
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => document.body.classList.remove("modal-open");
  }, [isModalOpen]);

  return (
    <>
      <div className="my-order-content">
        <div className="title">
          <div className="loader-line"></div>
          <h3>My Order</h3>
        </div>
        <ul className="order-box-list">
          {orders?.map((order: OrderResponse) => (
            <li key={order.id}>
              <div className="order-box">
                <div className="order-box-content">
                  <div className="brand-icon">
                    <img
                      alt="brand3"
                      className="img-fluid icon"
                      src={restaurantService.getRestaurantIcon(
                        order.restaurantIcon
                      )}
                    />
                  </div>
                  <div className="order-details">
                    <div className="d-flex align-items-center justify-content-between w-100">
                      <h5 className="brand-name dark-text fw-medium">
                        {order.restaurantName}
                      </h5>
                      <h6 className="fw-medium content-color text-end">
                        {moment(order.orderDate).format("DD MMM YYYY hh:mm A")}
                      </h6>
                    </div>
                    <h6 className="fw-medium dark-text">
                      <span className="fw-normal content-color">
                        Transaction Id :
                      </span>
                      #{order.orderReferenceNumber}
                    </h6>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                  <h6 className="fw-medium dark-text">
                    <span className="fw-normal content-color">
                      Total Amount :
                    </span>
                    ${order.totalAmount}
                  </h6>
                  <button
                    onClick={() => openModel(order.id)}
                    className="btn theme-outline details-btn"
                  >
                    Details
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {isModalOpen && order && (
        <>
          <div
            style={{ zIndex: "1055" }}
            aria-hidden="true"
            className="modal-backdrop fade show"
          ></div>

          <div
            role="dialog"
            tabIndex={-1}
            aria-modal="true"
            className="d-block modal order-details-modal fade show"
          >
            <div role="document" className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5
                    id="exampleModalToggleLabel"
                    className="modal-title fw-medium"
                  >
                    Order details
                  </h5>
                  <button
                    onClick={closeModal}
                    type="button"
                    className="btn-close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="order-details-box">
                    <div className="order-icon">
                      <img
                        alt="brand3"
                        className="img-fluid icon"
                        src={restaurantService.getRestaurantIcon(
                          order.restaurantIcon
                        )}
                      />
                    </div>
                    <div className="order-content">
                      <h5 className="brand-name dark-text fw-medium">
                        {order.restaurantName}
                      </h5>
                      <h6 className="order-deliver-label">{order.status}</h6>
                    </div>
                  </div>
                  <div className="delivery-address">
                    <div className="d-flex align-items-center gap-2 mt-2">
                      <i className="ri-map-pin-fill theme-color"></i>
                      <p>{order.restaurantAddress}</p>
                    </div>
                  </div>
                  <div className="delivery-on-going">
                    <ul className="delivery-list">
                      <li>
                        <h6>Id Transaction</h6>
                        <h5>#{order.orderReferenceNumber}</h5>
                      </li>
                      <li>
                        <h6>Date &amp; Time</h6>
                        <h5>
                          {moment(order.orderDate).format(
                            "DD MMM YYYY hh:mm A"
                          )}
                        </h5>
                      </li>
                    </ul>
                    <ul className="delivery-list">
                      <li>
                        <div className="order-address">
                          <img
                            src="../assets/images/svg/placed.svg"
                            alt="restaurant"
                            className="img-fluid place-icon"
                          />
                          <h5>Restaurant Address</h5>
                        </div>
                        <h6 className="delivery-place">
                          {order.restaurantAddress}
                        </h6>
                      </li>
                      <li>
                        <div className="order-address">
                          <img
                            src="../assets/images/svg/user-map.svg"
                            alt="delivery"
                            className="img-fluid place-icon"
                          />
                          <h5>Delivery Address</h5>
                        </div>
                        <h6 className="delivery-place">
                          {order.deliveryAddress}
                        </h6>
                      </li>
                    </ul>
                  </div>
                  <ul className="order-list">
                    {order.orderItems.map((item: OrderItem) => (
                      <li>
                        <div className="order-content-box">
                          <div className="d-flex align-items-center justify-content-between">
                            <h6>{item.productName}</h6>
                            <h6>${item.unitPrice}</h6>
                          </div>
                          <div>
                            <p>Qty:{item.quantity}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="total-amount">
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="fw-medium dark-text">Tax</h6>
                      <h6 className="fw-medium dark-text">${(order.taxRate)}</h6>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="fw-medium dark-text">Discount</h6>
                      <h6 className="fw-medium dark-text">${(order.discountPercentage)}</h6>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="fw-normal content-color">Delivery Charge</p>
                      <p className="fw-normal content-color">Free</p>
                    </div>
                    <div className="grand-amount d-flex align-items-center justify-content-between">
                      <h6 className="fw-medium dark-text">Grand Total</h6>
                      <h6 className="fw-medium dark-text">
                        ${order.totalAmount}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
