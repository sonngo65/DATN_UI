import React from "react";
import { FaCaretRight } from "react-icons/fa";
import "./_slider-btn.scss";
export default function SliderRightBtn({
  handleEventClick,
}: {
  handleEventClick: React.MouseEventHandler;
}) {
  return (
    <div className="slider-btn right">
      <button onClick={handleEventClick}>
        <FaCaretRight />
      </button>
    </div>
  );
}
