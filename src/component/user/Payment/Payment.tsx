import { useEffect, useRef, useState } from "react";
import "./_payment.scss";
import { FaArrowDown, FaArrowLeft, FaMoneyBillAlt } from "react-icons/fa";
import Overlay from "../../Overlay/Overlay";
import Selection from "../Selection";
import { Input, SelectInput } from "../InputGroup";
import MobilePaymentHead from "./MobilePaymentHead";

export default function Payment() {
  const [provcAddresses, setProvcAddresses] = useState([
    {
      id: 1,
      name: "Lao Cai",
      isSelected: false,
    },
    {
      id: 2,
      name: "Lang Son",
      isSelected: false,
    },
    {
      id: 3,
      name: "Yen Bai",
      isSelected: false,
    },
    {
      id: 4,
      name: "Son La",
      isSelected: false,
    },
    {
      id: 5,
      name: "Bac Giang",
      isSelected: false,
    },
    {
      id: 6,
      name: "Son La",
      isSelected: false,
    },
    {
      id: 7,
      name: "Bac Giang",
      isSelected: false,
    },
    {
      id: 8,
      name: "Son La",
      isSelected: false,
    },
    {
      id: 9,
      name: "Bac Giang",
      isSelected: false,
    },
  ]);
  const [paymentInfo, setPaymentInfo] = useState({
    name: "",
    phoneNumber: "",
    address: "",
    addressDetail: "",
    description: "",
    paymentMethod: "",
    dealCode: "",
  });

  return (
    <>
      <div className="payment px-lg-3 px-3 px-x-0">
        <div className="cus-container">
          <div className="payment-head">
            <div className="row">
              <div className="col-lg-4 col-12">
                <div className="logo">
                  <img src="logo1.png" alt="error" />
                </div>
              </div>
              <MobilePaymentHead />
            </div>
          </div>
          <div className="row g-lg-5">
            <div className="col-12 col-lg-4">
              <div className="title">
                <h5>Thong tin nhan hang</h5>
              </div>
              <form action="#">
                <Input name="full-name" label="ho va ten" />
                <Input name="phoneNumber" label="so dien thoai" />
                <Input name="address" label="dia chi" />

                <SelectInput
                  label="tinh thanh"
                  setOptions={setProvcAddresses}
                  options={provcAddresses}
                />
                <SelectInput
                  label="quan huyen"
                  setOptions={setProvcAddresses}
                  options={provcAddresses}
                />
                <SelectInput
                  label="xa phuong"
                  setOptions={setProvcAddresses}
                  options={provcAddresses}
                />
                <div className="input-group w-100 h-auto  px-3">
                  <textarea
                    name="description"
                    id="1"
                    cols={30}
                    rows={10}
                    className="input w-100"
                  ></textarea>
                  <label htmlFor="1">Ghi chu</label>
                </div>
              </form>
            </div>
            <div className="col-12 col-lg-4">
              <div className="title">
                <h5>Van chuyen</h5>
              </div>
              <div className="alert alert-success">
                <p className="p-0 m-0">Vui long nhap thong tin giao hang</p>
              </div>
              <div className="title"></div>
              <div className="payment-methods">
                <ul className="payment-methods-ls list-type-none">
                  <li className="payment-methods-it">
                    <input
                      className="input-radio"
                      type="radio"
                      id="radio_1"
                      name="payment"
                    />
                    <label className="ms-2" htmlFor="radio_1">
                      thanh toan khi nhan hang
                    </label>
                    <div className="icon">
                      <FaMoneyBillAlt />
                    </div>
                  </li>
                  <li className="payment-methods-it">
                    <input
                      className="input-radio"
                      type="radio"
                      id="radio_2"
                      name="payment"
                    />
                    <label className="ms-2" htmlFor="radio_2">
                      Thanh toan chuyen khoan Qr
                    </label>
                    <div className="icon">
                      <i className="icon-pay-2"></i>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="side-bar d-lg-block d-none">
                {" "}
                <div className="payment-products">
                  <div className="title">
                    <h5>Don hang (8 san pham)</h5>
                  </div>
                  <ul className="payment-products-ls m-0 p-0">
                    <li className="payment-products-it">
                      <div className="img">
                        <img src="related-product1.webp" alt="" />
                        <span className="quantity">1</span>
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
                        <img src="related-product2.webp" alt="" />
                        <span className="quantity">1</span>
                      </div>
                      <div className="info d-flex justify-content-between align-items-center">
                        <div className="left">
                          <p className="name">
                            Infinix Note 30 8GB /256GB Lướt như mới
                          </p>
                          <span className="options">4G / Đen</span>
                        </div>
                        <div className="right">
                          <span className="price">2.990.000₫</span>
                        </div>
                      </div>
                    </li>
                    <li className="payment-products-it">
                      <div className="img">
                        <img src="related-product3.webp" alt="" />
                        <span className="quantity">1</span>
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
                </div>
                <div className="payment-deal py-4 d-flex justify-content-between align-items-center">
                  <div className="input-group w-auto">
                    <input className="input " type="text" id="pay-deal" />
                    <label htmlFor="pay-deal">Nhap ma giam gia</label>
                  </div>
                  <button className="btn btn-primary">Ap dung</button>
                  {/* <button className="btn btn-primary" disable>Ap dung</button> */}
                </div>
                <div className="payment-price py-4">
                  <p className="d-flex justify-content-between align-items-center ">
                    Tam tinh: <span>10000000</span>
                  </p>
                  <p className="d-flex justify-content-between align-items-center">
                    phi van chuyen : <span>23132</span>
                  </p>
                </div>
                <div className="payment-total py-4">
                  <p className="d-flex justify-content-between align-items-center">
                    Tong cong:{" "}
                    <span className="text-primary d-inline-block">
                      523234234
                    </span>
                  </p>
                </div>
                <div className="payment-btn py-4 d-flex justify-content-between align-items-center">
                  <a className="d-block text-deco-none" href="#">
                    <FaArrowLeft />
                    <span className="ms-2">Quay ve gio hang</span>
                  </a>
                  <button className="d-block btn btn-primary">dat hang</button>
                </div>
              </div>
            </div>
            <div className="col-12 d-lg-none d-block my-4">
              <button className="d-block btn btn-primary w-100">
                dat hang
              </button>

              <a
                className="d-block text-deco-none w-100 text-center mt-2"
                href="#"
              >
                <FaArrowLeft />
                <span className="ms-2 ">Quay ve gio hang</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
