import { MdKeyboardArrowDown } from "react-icons/md";
import CategoryOuter from "../Product/CategoryOuter";
import CategoryHead from "../Product/component/CategoryHead";
import ProductSliderList from "../Product/component/ProductSliderList";
import ProductList from "../Product/component/ProductList";
import { useEffect, useReducer, useRef, useState } from "react";
import { SliderLeftBtn, SliderRightBtn } from "../Product/component/SliderBtn";
const CategorySliderProduct = CategoryOuter({
  Head: CategoryHead,
  Body: ProductSliderList,
});
const CategoryProduct = CategoryOuter({
  Head: CategoryHead,
  Body: ProductList,
});
export default function ProductSearch() {
  const ref = useRef<any>(null);
  const impressProducts = {
    title: "Sản phẩm được ưa chuộng",
    products: [
      {
        id: 1,
        name: "Vivo V29e - 5G - Chính hãng",
        price: 7790000,
        compate_price: 8990000,
        img: "../xanh-song-bang-6.webp",
        note: "Giảm 20% tối đa 600k khi mở thẻ tín dụng TPBank EVO và thanh toán qua EVO App (Từ 2/3-31/5)",
        endow: "giam 10%",
        sticker: "../apple.png",
      },
      {
        id: 2,
        name: "realme C55 - 6GB/128GB - Chính hãng",
        price: 4190000,
        compate_price: 5990000,
        img: "../c55-1-den.webp",
        note: "Giảm 20% tối đa 600k khi mở thẻ tín dụng TPBank EVO và thanh toán qua EVO App (Từ 2/3-31/5)",
        endow: "giam 10%",
      },
      {
        id: 13,
        name: "Vivo V29e - 5G - Chính hãng",
        price: 7790000,
        compate_price: 8990000,
        img: "../xanh-song-bang-6.webp",
        note: "Giảm 20% tối đa 600k khi mở thẻ tín dụng TPBank EVO và thanh toán qua EVO App (Từ 2/3-31/5)",
        endow: "giam 10%",
      },
      {
        id: 2,
        name: "realme C55 - 6GB/128GB - Chính hãng",
        price: 4190000,
        compate_price: 5990000,
        img: "../c55-1-den.webp",
        note: "Giảm 20% tối đa 600k khi mở thẻ tín dụng TPBank EVO và thanh toán qua EVO App (Từ 2/3-31/5)",
        endow: "giam 10%",
      },
      {
        id: 13,
        name: "Vivo V29e - 5G - Chính hãng",
        price: 7790000,
        compate_price: 8990000,
        img: "../xanh-song-bang-6.webp",
        note: "Giảm 20% tối đa 600k khi mở thẻ tín dụng TPBank EVO và thanh toán qua EVO App (Từ 2/3-31/5)",
        endow: "giam 10%",
      },
      {
        id: 2,
        name: "realme C55 - 6GB/128GB - Chính hãng",
        price: 4190000,
        compate_price: 5990000,
        img: "../c55-1-den.webp",
        note: "Giảm 20% tối đa 600k khi mở thẻ tín dụng TPBank EVO và thanh toán qua EVO App (Từ 2/3-31/5)",
        endow: "giam 10%",
      },
    ],
  };
  const allProducts = {
    title: "Tất cả sản phẩm",
    products: [
      {
        id: 1,
        name: "Vivo V29e - 5G - Chính hãng",
        price: 7790000,
        compate_price: 8990000,
        img: "../xanh-song-bang-6.webp",
        note: "Giảm 20% tối đa 600k khi mở thẻ tín dụng TPBank EVO và thanh toán qua EVO App (Từ 2/3-31/5)",
        endow: "giam 10%",
        sticker: "../apple.png",
      },
      {
        id: 2,
        name: "realme C55 - 6GB/128GB - Chính hãng",
        price: 4190000,
        compate_price: 5990000,
        img: "../c55-1-den.webp",
        note: "Giảm 20% tối đa 600k khi mở thẻ tín dụng TPBank EVO và thanh toán qua EVO App (Từ 2/3-31/5)",
        endow: "giam 10%",
      },
      {
        id: 13,
        name: "Vivo V29e - 5G - Chính hãng",
        price: 7790000,
        compate_price: 8990000,
        img: "../xanh-song-bang-6.webp",
        note: "Giảm 20% tối đa 600k khi mở thẻ tín dụng TPBank EVO và thanh toán qua EVO App (Từ 2/3-31/5)",
        endow: "giam 10%",
      },
      {
        id: 2,
        name: "realme C55 - 6GB/128GB - Chính hãng",
        price: 4190000,
        compate_price: 5990000,
        img: "../c55-1-den.webp",
        note: "Giảm 20% tối đa 600k khi mở thẻ tín dụng TPBank EVO và thanh toán qua EVO App (Từ 2/3-31/5)",
        endow: "giam 10%",
      },
      {
        id: 13,
        name: "Vivo V29e - 5G - Chính hãng",
        price: 7790000,
        compate_price: 8990000,
        img: "../xanh-song-bang-6.webp",
        note: "Giảm 20% tối đa 600k khi mở thẻ tín dụng TPBank EVO và thanh toán qua EVO App (Từ 2/3-31/5)",
        endow: "giam 10%",
      },
      {
        id: 2,
        name: "realme C55 - 6GB/128GB - Chính hãng",
        price: 4190000,
        compate_price: 5990000,
        img: "../c55-1-den.webp",
        note: "Giảm 20% tối đa 600k khi mở thẻ tín dụng TPBank EVO và thanh toán qua EVO App (Từ 2/3-31/5)",
        endow: "giam 10%",
      },
    ],
  };
  const [slide, setSlide] = useState({ length: 0, width: 0, translateX: 0 });

  useEffect(() => {
    ref.current &&
      setSlide((pre) => {
        return { length: 8, width: ref.current.offsetWidth / 8, translateX: 0 };
      });
    const handleResize = () => {
      if (ref.current) {
      }
    };
  }, []);
  return (
    <div className="product-search">
      <div className="container">
        <div className="banner-img my-3">
          <img src="../banner-2.png" className="w-100" alt="error" />
        </div>
        <div className="brand-slide my-3 position-relative" ref={ref}>
          <SliderLeftBtn
            className={`${slide.translateX >= 0 ? "disable" : ""}`}
            handleEventClick={() => {
              if (slide.translateX < 0) {
                setSlide((pre) => {
                  return { ...pre, translateX: pre.translateX + slide.width };
                });
              }
            }}
          />
          <SliderRightBtn
            className={`${
              slide.translateX <= -10 * slide.width + slide.length * slide.width
                ? "disable"
                : ""
            }`}
            handleEventClick={() => {
              if (
                slide.translateX >
                -10 * slide.width + slide.length * slide.width
              ) {
                setSlide((pre) => {
                  return {
                    ...pre,
                    translateX: pre.translateX - slide.width,
                  };
                });
              }
            }}
          />
          <ul
            style={{
              transform: `TranslateX(${slide.translateX}px)`,
              transition: "all 0.3s ease",
            }}
            className="brand-ls  list-type-none d-flex justify-content-center align-items-center"
          >
            <li className="brand-it" style={{ width: `${slide.width}px` }}>
              <a href="#" className="brand-li">
                <img src="../brand-img-1.webp" alt="" />
              </a>
            </li>
            <li className="brand-it" style={{ width: `${slide.width}px` }}>
              <a href="#" className="brand-li">
                <img src="../brand-img-2.webp" alt="" />
              </a>
            </li>
            <li className="brand-it" style={{ width: `${slide.width}px` }}>
              <a href="#" className="brand-li">
                <img src="../brand-img-3.webp" alt="" />
              </a>
            </li>
            <li className="brand-it" style={{ width: `${slide.width}px` }}>
              <a href="#" className="brand-li">
                <img src="../brand-img-1.webp" alt="" />
              </a>
            </li>
            <li className="brand-it" style={{ width: `${slide.width}px` }}>
              <a href="#" className="brand-li">
                <img src="../brand-img-2.webp" alt="" />
              </a>
            </li>
            <li className="brand-it" style={{ width: `${slide.width}px` }}>
              <a href="#" className="brand-li">
                <img src="../brand-img-3.webp" alt="" />
              </a>
            </li>
            <li className="brand-it" style={{ width: `${slide.width}px` }}>
              <a href="#" className="brand-li">
                <img src="../brand-img-2.webp" alt="" />
              </a>
            </li>{" "}
            <li className="brand-it" style={{ width: `${slide.width}px` }}>
              <a href="#" className="brand-li">
                <img src="../brand-img-2.webp" alt="" />
              </a>
            </li>
            <li className="brand-it" style={{ width: `${slide.width}px` }}>
              <a href="#" className="brand-li">
                <img src="../brand-img-3.webp" alt="" />
              </a>
            </li>
            <li className="brand-it" style={{ width: `${slide.width}px` }}>
              <a href="#" className="brand-li">
                <img src="../brand-img-2.webp" alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div className=" control-bar bg-white d-flex justify-content-end align-items-center">
          <span className="title">Lọc danh sách:</span>
          <ul className="control-ls d-flex align-items-center list-type-none pb-1">
            <li className="control-it mx-4">
              <span>Danh mục </span>
              <span className="icon ps-2 fs-4">
                <MdKeyboardArrowDown />
              </span>
            </li>
            <li className="control-it mx-4">
              <span>Thương hiệu </span>
              <span className="icon ps-2 fs-4">
                <MdKeyboardArrowDown />
              </span>
            </li>
            <li className="control-it mx-4">
              <span>Giá</span>
              <span className="icon ps-2 fs-4">
                <MdKeyboardArrowDown />
              </span>
            </li>
            <li className="control-it mx-4">
              <span>Sắp xếp</span>
              <span className="icon ps-2 fs-4">
                <MdKeyboardArrowDown />
              </span>
            </li>
          </ul>
        </div>
        <CategorySliderProduct {...impressProducts} />
        <CategoryProduct {...allProducts} />
        <div className="more-button text-center my-5">
          <button className="btn btn-outline-success">Xem thêm sản phẩm</button>
        </div>
      </div>
    </div>
  );
}
