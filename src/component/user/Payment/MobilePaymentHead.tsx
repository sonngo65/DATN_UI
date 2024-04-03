import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";

export default function MobilePaymentHead() {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="mobile-head d-block d-lg-none mb-4">
      <div
        className="order-toggle py-3 px-4  d-flex justify-content-between align-items-center"
        onClick={() => {
          setIsShow((pre) => !pre);
        }}
      >
        <span className="fs-md-5 fs-6 fw-bold d-block text-black">
          Don hang (5 san pham) <FaArrowDown />
        </span>
        <span className="fs-md-5 fs-6 fw-bold d-block text-primary">
          54.430.000₫
        </span>
      </div>
      <ul
        className={`payment-products-ls w-auto m-0 py-0 ${
          isShow ? "d-block" : "d-none"
        }`}
      >
        <li className="payment-products-it">
          <div className="img">
            <div className="img-box">
              <img src="related-product1.webp" alt="" />
              <span className="quantity">1</span>
            </div>
          </div>
          <div className="info d-flex justify-content-between align-items-center">
            <div className="left">
              <p className="name">Realme C1 cũ</p>
              <span className="options"></span>
            </div>
            <div className="right">
              <span className="price">1.590.000₫</span>
            </div>
          </div>
        </li>{" "}
        <li className="payment-products-it">
          <div className="img">
            <div className="img-box">
              <img src="related-product1.webp" alt="" />
              <span className="quantity">1</span>
            </div>
          </div>
          <div className="info d-flex justify-content-between align-items-center">
            <div className="left">
              <p className="name">Realme C1 cũ</p>
              <span className="options"></span>
            </div>
            <div className="right">
              <span className="price">1.590.000₫</span>
            </div>
          </div>
        </li>{" "}
        <li className="payment-products-it">
          <div className="img">
            <div className="img-box">
              <img src="related-product1.webp" alt="" />
              <span className="quantity">1</span>
            </div>
          </div>
          <div className="info d-flex justify-content-between align-items-center">
            <div className="left">
              <p className="name">Realme C1 cũ</p>
              <span className="options"></span>
            </div>
            <div className="right">
              <span className="price">1.590.000₫</span>
            </div>
          </div>
        </li>
        <li className="payment-products-it">
          <div className="img">
            <div className="img-box">
              <img src="related-product2.webp" alt="" />
              <span className="quantity">1</span>
            </div>
          </div>
          <div className="info d-flex justify-content-between align-items-center">
            <div className="left">
              <p className="name">Infinix Note 30 8GB /256GB Lướt như mới</p>
              <span className="options">4G / Đen</span>
            </div>
            <div className="right">
              <span className="price">2.990.000₫</span>
            </div>
          </div>
        </li>
        <li className="payment-products-it">
          <div className="img">
            <div className="img-box">
              <img src="related-product3.webp" alt="" />
              <span className="quantity">1</span>
            </div>
          </div>
          <div className="info d-flex justify-content-between align-items-center">
            <div className="left">
              <p className="name">Samsung J4 Core Cũ 2/16gb</p>
              <span className="options"></span>
            </div>
            <div className="right">
              <span className="price">1.690.000₫</span>
            </div>
          </div>
        </li>
      </ul>
      <div className="product-deal py-3 px-4 d-flex justify-content-between align-items-center">
        <div className="input-group w-auto mt-0">
          <input className="input " type="text" id="pay-deal" />
          <label htmlFor="pay-deal">Nhap ma giam gia</label>
        </div>
        <button className="btn btn-primary">Ap dung</button>
      </div>
    </div>
  );
}
