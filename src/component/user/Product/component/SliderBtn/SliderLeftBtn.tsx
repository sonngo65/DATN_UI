import React from "react";
import { FaCaretLeft } from "react-icons/fa";
import "./_slider-btn.scss";

export default function SliderLeftBtn({
  handleEventClick,
}: {
  handleEventClick: React.MouseEventHandler;
}) {
  return (
    <div className="slider-btn left">
      <button onClick={handleEventClick}>
        <FaCaretLeft />
      </button>
    </div>
  );
}
