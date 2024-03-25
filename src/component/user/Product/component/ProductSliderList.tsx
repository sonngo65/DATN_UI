import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import useSlider from "../../../../custom/useSlider";
import { Product } from "../../../../model";
import ProductItem from "./ProductItem";
import "../style/_product-slider-list.scss";
import { SliderLeftBtn, SliderRightBtn } from "./SliderBtn";
import SlideBanner from "../../SlideBanner";
import { useEffect, useRef, useState } from "react";
interface ProductSliderBoxProps {
  products: Product[];
}
export default function ProductSliderList({ products }: ProductSliderBoxProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [width, setWidth] = useState(0);
  const { animation, handleEventClickLeftBtn, handleEventClickRightBtn } =
    useSlider({
      length: products ? products.length : 0,
      width: width / 4,
    });
  useEffect(() => {
    ref.current && setWidth(ref.current.offsetWidth);
    const getwidth = () => {
      ref.current && setWidth(ref.current.offsetWidth);
    };
    window.addEventListener("resize", getwidth);
    return () => window.removeEventListener("resize", getwidth);
  }, []);
  return (
    <div className="product-sli-ls " ref={ref}>
      <SliderLeftBtn handleEventClick={handleEventClickLeftBtn} />
      <SliderRightBtn handleEventClick={handleEventClickRightBtn} />
      <div
        className="product-sli-ls-outer"
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
              <div className="p-1" style={{ width: width / 4 }}>
                <ProductItem {...product} />
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="product-sli-ls-outer"
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
              <div className="p-1" style={{ width: width / 4 }}>
                <ProductItem {...product} />
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="product-sli-ls-outer"
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
              <div className="p-1" style={{ width: width / 4 }}>
                <ProductItem {...product} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
