import { useEffect, useRef } from "react";
import "./_overlay.scss";
interface OverlayProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Overlay({ isOpen, setIsOpen }: OverlayProps) {
  const ref = useRef<any>(null);
  useEffect(() => {
    if (ref.current) {
      const handleOpen = () => {
        setIsOpen((pre) => !pre);
      };

      ref.current.addEventListener("click", handleOpen);
      return () => {
        ref.current.removeEventListener("click", handleOpen);
      };
    }
  }, [ref.current]);
  return (
    <div className={`overlay ${isOpen ? "open" : ""}`} ref={ref}>
      {" "}
    </div>
  );
}
