import { useEffect, useRef, useState } from "react";
import useSlider from "../../../../custom/useSlider";
import { Feedback } from "../../../../model";
import "../style/_feedback.scss";
import { SliderLeftBtn, SliderRightBtn } from "./SliderBtn";
interface FeedbackListProps {
  feedbacks: Feedback[];
}
export default function FeedbackList({ feedbacks }: FeedbackListProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [width, setWidth] = useState(0);
  const { animation, handleEventClickLeftBtn, handleEventClickRightBtn } =
    useSlider({
      length: feedbacks.length,
      width: ref.current ? width / 2 : 0,
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
    <div className="feedback-slider" ref={ref}>
      <SliderLeftBtn handleEventClick={handleEventClickLeftBtn} />
      <SliderRightBtn handleEventClick={handleEventClickRightBtn} />
      <div
        className="feedback-slider-outer d-flex justify-content-center"
        style={{
          transform: `translateX(${animation.translateX1}px)`,
          transition: `all ${
            animation.translateX1 === animation.transition ? 0 : 1
          }s ease`,
        }}
      >
        {feedbacks.map(({ name, img, field, description }) => {
          return (
            <div
              className="feedback-slider-item "
              style={{ width: `${width / 2}px` }}
            >
              <div className="feedback-slider-item__img">
                <img src={img} alt={name} />
              </div>
              <div className="feedback-slider-item__info">
                <h5 className="info__name">{name}</h5>
                <h5 className="info__field">{field}</h5>
                <p className="info__desciption">{description}</p>
              </div>
            </div>
          );
        })}
      </div>
      {/* fake */}
      <div
        className="feedback-slider-outer d-flex justify-content-center"
        style={{
          transform: `translateX(${animation.translateX2}px)`,
          transition: `all ${
            animation.translateX2 === animation.transition ? 0 : 1
          }s ease`,
        }}
      >
        {feedbacks.map(({ name, img, field, description }) => {
          return (
            <div
              className="feedback-slider-item "
              style={{ width: `${width / 2}px` }}
            >
              <div className="feedback-slider-item__img">
                <img src={img} alt={name} />
              </div>
              <div className="feedback-slider-item__info">
                <h5 className="info__name">{name}</h5>
                <h5 className="info__field">{field}</h5>
                <p className="info__desciption">{description}</p>
              </div>
            </div>
          );
        })}
      </div>
      {/* fake */}
      <div
        className="feedback-slider-outer d-flex "
        style={{
          transform: `translateX(${animation.translateX3}px)`,
          transition: `all ${
            animation.translateX3 === animation.transition ? 0 : 1
          }s ease`,
        }}
      >
        {feedbacks.map(({ name, img, field, description }) => {
          return (
            <div
              className="feedback-slider-item "
              style={{ width: `${width / 2}px` }}
            >
              <div className="feedback-slider-item__img">
                <img src={img} alt={name} />
              </div>
              <div className="feedback-slider-item__info">
                <h5 className="info__name">{name}</h5>
                <h5 className="info__field">{field}</h5>
                <p className="info__desciption">{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
