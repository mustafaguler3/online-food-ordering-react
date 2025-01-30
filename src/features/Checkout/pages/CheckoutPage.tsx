import React, { useEffect, useState } from "react";
import CheckoutProcessBar from "../CheckoutProcessBar";
import ShippingForm from "../ShippingForm";
import PaymentForm from "../PaymentForm";
import OrderReview from "../OrderReview";
import OrderConfirmation from "../OrderConfirmation";
import {
  FaShippingFast,
  FaCreditCard,
  FaClipboardCheck,
  FaCheckCircle,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { fetchBasket, updateBasketItem } from "../../../store/basketSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";
import "./CheckoutPage.css";
import { useUser } from "../../User/context/UserContext";
import AccountForm from "../AccountForm";
import orderService from "../../../services/orderService";
import { toast } from "react-toastify";
import EmptyCart from "../../Cart/components/EmptyCart";

const steps = [
  {
    id: 1,
    label: "Account",
    icon: "assets/images/svg/user.svg",
    link: "/checkout",
  },
  {
    id: 2,
    label: "Address",
    icon: "assets/images/svg/location.svg",
    link: "/address",
  },
  {
    id: 3,
    label: "Payment",
    icon: "assets/images/svg/wallet-add.svg",
    link: "/payment",
  },
  {
    id: 4,
    label: "Confirm",
    icon: "assets/images/svg/verify.svg",
    link: "/confirm-order",
  },
];

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const { user } = useUser();
  const [shippingInfo, setShippingInfo] = useState({});
  const [paymentInfo, setPaymentInfo] = useState({});
  const dispatch = useDispatch<AppDispatch>();
  const basket = useSelector((state: any) => state.basket.basket);

  useEffect(() => {
    if (user) {
      setCurrentStep(2);
    } else {
      setCurrentStep(1);
    }

    dispatch(fetchBasket());
  }, [dispatch, user]);

  const handleNextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleShippingInfo = (info: any) => {
    setShippingInfo(info);
    setCurrentStep(3);
  };

  const handlePaymentInfo = async (data: any) => {
    try {
      setPaymentInfo(data);
      const val = {
        payment: paymentInfo,
        shippingAddress: shippingInfo,
      };
      await orderService.createOrder(val);

      toast.success("Order created successfully");
      setCurrentStep(4);
    } catch (error) {
      console.error("Failed to create order:", error);
      toast.error("An error occurred during order creation");
    }
  };

  const incrementQuantity = (productId: number, quantity: number) => {
    dispatch(updateBasketItem({ productId, quantity: quantity + 1 }));
  };

  const decrementQuantity = (productId: number, quantity: number) => {
    if (quantity > 1) {
      dispatch(updateBasketItem({ productId, quantity: quantity - 1 }));
    }
  };

  return (
    <>
      <section className="page-head-section">
        <div className="container page-heading">
          <h2 className="h3 mb-3 text-white text-center ng-star-inserted">
            Checkout
          </h2>

          <nav aria-label="breadcrumb">
            <ol className="breadcrumb flex-lg-nowrap justify-content-center justify-content-lg-star">
              <li className="breadcrumb-item ng-star-inserted">
                <a href="/zomo/home/classNameic">
                  <i className="ri-home-line"></i>Home
                </a>
              </li>
              <li
                aria-current="page"
                className="breadcrumb-item active ng-star-inserted"
              >
                Checkout
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="account-section section-b-space pt-0">
        <div className="container">
          <div className="layout-sec">
            <div className="row g-lg-4 g-4">
              <div className="col-lg-8">
                {basket.items.length === 0 ? (
                  <div className="col-lg-12">
                    <EmptyCart />
                  </div>
                ) : (
                  <div className="checkout-page">
                    <CheckoutProcessBar
                      steps={steps}
                      currentStep={currentStep}
                    />

                    <div className="checkout-content">
                      {currentStep === 1 && <AccountForm />}
                      {currentStep === 2 && (
                        <ShippingForm onSubmit={handleShippingInfo} />
                      )}
                      {currentStep === 3 && (
                        <PaymentForm
                          shippingInfo={shippingInfo}
                          onSubmit={handlePaymentInfo}
                        />
                      )}
                      {currentStep === 4 && (
                        <OrderReview
                          shippingInfo={shippingInfo}
                          paymentInfo={paymentInfo}
                          onNext={handleNextStep}
                        />
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="col-lg-4">
                <div className="order-summery-section sticky-top">
                  <div className="checkout-detail">
                    <h3 className="fw-semibold dark-text checkout-title">
                      Cart Items
                    </h3>
                    <div className="order-summery-section mt-0">
                      <div className="checkout-detail p-0">
                        {basket.items.map((item: any) => (
                          <ul>
                            <li>
                              <div className="horizontal-product-box">
                                <div className="product-content">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <h5>{item.name}</h5>
                                    <h6 className="product-price">
                                      ${item.unitPrice}
                                    </h6>
                                  </div>
                                  <h6 className="ingredients-text">
                                    Hot Nacho Chips
                                  </h6>
                                  <div className="d-flex align-items-center justify-content-between mt-md-2 mt-1 gap-1">
                                    <h6 className="place">Serve 1</h6>
                                    <div className="plus-minus">
                                      <i
                                        className="ri-subtract-line sub"
                                        onClick={() =>
                                          decrementQuantity(
                                            item.productId,
                                            item.quantity
                                          )
                                        }
                                      ></i>
                                      <input
                                        type="number"
                                        value={item.quantity}
                                      />
                                      <i
                                        className="ri-add-line add"
                                        onClick={() =>
                                          incrementQuantity(
                                            item.productId,
                                            item.quantity
                                          )
                                        }
                                      ></i>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        ))}

                        <h5 className="bill-details-title fw-semibold dark-text">
                          Bill Details
                        </h5>
                        <div className="sub-total">
                          <h6 className="content-color fw-normal">Sub Total</h6>
                          <h6 className="fw-semibold">${basket.totalPrice}</h6>
                        </div>
                        <div className="sub-total">
                          <h6 className="content-color fw-normal">
                            Delivery Charge (2 kms)
                          </h6>
                          <h6 className="fw-semibold success-color">Free</h6>
                        </div>
                        <div className="sub-total">
                          <h6 className="content-color fw-normal">
                            Discount ({basket.discount}%)
                          </h6>
                          <h6 className="fw-semibold">${basket.discount}</h6>
                        </div>

                        <div className="sub-total">
                          <h6 className="content-color fw-normal">Tax</h6>
                          <h6 className="fw-semibold">${basket.tax}</h6>
                        </div>

                        <div className="grand-total">
                          <h6 className="fw-semibold dark-text">To Pay</h6>
                          <h6 className="fw-semibold amount">
                            ${basket.grandTotal?.toFixed(2)}
                          </h6>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={handlePaymentInfo}
                      className="btn theme-btn restaurant-btn w-100 rounded-2"
                    >
                      {currentStep === 3 ? "Pay" : "Checkout"}
                    </button>
                    <img
                      src="assets/images/svg/dots-design.svg"
                      alt="dots"
                      className="dots-design"
                    />
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
