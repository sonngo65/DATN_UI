import { useEffect, useRef } from "react";
import "./_overlay.scss";
interface OverlayProps {
  isOpen: boolean;
  handleOpen: () => void;
  className?: string;
}
export default function Overlay({
  isOpen,
  handleOpen,
  className,
}: OverlayProps) {
  const ref = useRef<any>(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("click", handleOpen);
    }
  }, [ref.current]);
  return (
    <div className={`overlay ${isOpen ? "open" : ""} ${className}`} ref={ref}>
      {" "}
    </div>
  );
}
