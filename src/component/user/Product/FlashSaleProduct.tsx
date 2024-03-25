import { useEffect, useState } from "react";
import "./style/_fl-sale.scss";
import { MdOutlineFlashOn } from "react-icons/md";
import { clear } from "console";
import useSlider from "../../../custom/useSlider";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa6";
import ProductItem from "./component/ProductItem";
import ProductSliderList from "./component/ProductSliderList";
export default function FlashSaleProduct() {
  const products = [
    {
      id: 1,
      name: "Vivo V29e - 5G - Chính hãng",
      price: 7790000,
      compate_price: 8990000,
      img: "/xanh-song-bang-6.webp",
      note: "Giảm 20% tối đa 600k khi mở thẻ tín dụng TPBank EVO và thanh toán qua EVO App (Từ 2/3-31/5)",
      endow: "giam 10%",
      sticker: "/apple.png",
    },
    {
      id: 2,
      name: "realme C55 - 6GB/128GB - Chính hãng",
      price: 4190000,
      compate_price: 5990000,
      img: "/c55-1-den.webp",
      note: "Giảm 20% tối đa 600k khi mở thẻ tín dụng TPBank EVO và thanh toán qua EVO App (Từ 2/3-31/5)",
      endow: "giam 10%",
    },
    {
      id: 13,
      name: "Vivo V29e - 5G - Chính hãng",
      price: 7790000,
      compate_price: 8990000,
      img: "/xanh-song-bang-6.webp",
      note: "Giảm 20% tối đa 600k khi mở thẻ tín dụng TPBank EVO và thanh toán qua EVO App (Từ 2/3-31/5)",
      endow: "giam 10%",
    },
    {
      id: 2,
      name: "realme C55 - 6GB/128GB - Chính hãng",
      price: 4190000,
      compate_price: 5990000,
      img: "/c55-1-den.webp",
      note: "Giảm 20% tối đa 600k khi mở thẻ tín dụng TPBank EVO và thanh toán qua EVO App (Từ 2/3-31/5)",
      endow: "giam 10%",
    },
    {
      id: 13,
      name: "Vivo V29e - 5G - Chính hãng",
      price: 7790000,
      compate_price: 8990000,
      img: "/xanh-song-bang-6.webp",
      note: "Giảm 20% tối đa 600k khi mở thẻ tín dụng TPBank EVO và thanh toán qua EVO App (Từ 2/3-31/5)",
      endow: "giam 10%",
    },
    {
      id: 2,
      name: "realme C55 - 6GB/128GB - Chính hãng",
      price: 4190000,
      compate_price: 5990000,
      img: "/c55-1-den.webp",
      note: "Giảm 20% tối đa 600k khi mở thẻ tín dụng TPBank EVO và thanh toán qua EVO App (Từ 2/3-31/5)",
      endow: "giam 10%",
    },
  ];

  return (
    <div className="fl-sale mt-3">
      <div className="fl-sale__head mb-3">
        <h2 className="fl-sale__head-title pt-2">
          F<MdOutlineFlashOn />
          ASH SALE ONLINE
        </h2>
        <ul className="fl-sale__head-control-ls list-type-none">
          <li className="fl-sale__head-control-it active">
            <a href="" className="fl-sale__head-control-li ">
              Dien thoai/Table
            </a>
          </li>
          <li className="fl-sale__head-control-it">
            <a href="" className="fl-sale__head-control-li">
              Laptop/Man hinh/Tivi
            </a>
          </li>
          <li className="fl-sale__head-control-it">
            <a href="" className="fl-sale__head-control-li">
              Dong hoc/Phu kien/Khac
            </a>
          </li>
        </ul>
        <div className="fl-sale__time">
          <span className="bag">
            <span>1</span>
          </span>
          <span className="bag">
            <span>9</span>
          </span>
          <span className="two-dot">:</span>
          <span className="bag">
            <span>1</span>
          </span>
          <span className="bag">
            <span>0</span>
          </span>
          <span className="two-dot">:</span>
          <span className="bag">
            <span>2</span>
          </span>
          <span className="bag">
            <span>0</span>
          </span>
        </div>
      </div>
      {/* <div className="fl-sale__content ">
        <div className="fl-sale__content__control left">
          <button onClick={handleEventClickLeftBtn}>
            <FaCaretLeft />
          </button>
        </div>
        <div className="fl-sale__content__control right">
          <button onClick={handleEventClickRightBtn}>
            <FaCaretRight />
          </button>
        </div>

        <div
          className="fl-sale__content-outer"
          style={{
            transform: `translateX(${animation.translateX1}px)`,
            transition: `all ${
              animation.translateX1 === animation.transition ? 0 : 1
            }s ease`,
          }}
        >
          <div className="d-flex">
            {products.map((product) => {
              return (
                <div className="col-3 p-1">
                  <ProductItem {...product} />
                </div>
              );
            })}
          </div>
        </div>
        <div
          className="fl-sale__content-outer"
          style={{
            transform: `translateX(${animation.translateX2}px)`,
            transition: `all ${
              animation.translateX2 === animation.transition ? 0 : 1
            }s ease`,
          }}
        >
          <div className="d-flex">
            {products.map((product) => {
              return (
                <div className="col-3 p-1">
                  <ProductItem {...product} />
                </div>
              );
            })}
          </div>
        </div>
        <div
          className="fl-sale__content-outer"
          style={{
            transform: `translateX(${animation.translateX3}px)`,
            transition: `all ${
              animation.translateX3 === animation.transition ? 0 : 1
            }s ease`,
          }}
        >
          <div className="d-flex">
            {products.map((product) => {
              return (
                <div className="col-3 p-1">
                  <ProductItem {...product} />
                </div>
              );
            })}
          </div>
        </div>
      </div> */}
      <ProductSliderList products={products} />
    </div>
  );
}
