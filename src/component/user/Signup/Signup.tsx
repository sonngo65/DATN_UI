import { useState } from "react";
import Overlay from "../../Overlay/Overlay";
import { IoMdClose } from "react-icons/io";
import { MdSmartphone } from "react-icons/md";
import "../../../style/_popup.scss";

interface SignupProps {
  className: string;
}

export default function Signup({ className }: SignupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClickSignup = () => {
    setIsOpen((pre) => true);
  };
  const handleClickClose = () => {
    setIsOpen((pre) => false);
  };
  return (
    <>
      <a href="#" className={className} onClick={handleClickSignup}>
        Dang ky
      </a>
      <div className={`popup-s position-fixed ${isOpen ? "open" : ""} `}>
        <div className="popup-head">
          <div className="logo">
            <img src="./logo192.png" alt="error" />
          </div>
          <div className="title">
            <h5>Dang Ky</h5>
          </div>
          <div className="close" onClick={handleClickClose}>
            <IoMdClose />
          </div>
        </div>
        <div className="popup-body">
          <form action="#" className=" popup-form px-4 py-2">
            <input
              type="text"
              placeholder="vui long nhap so dien thoai"
              className="d-block w-100 px-2 py-3 mt-3"
            />
            <button type="submit" className="w-100 px-2 py-3 text-center mt-4">
              <span className="icon">
                <MdSmartphone />
              </span>
              Sen code via SMS
            </button>
          </form>
          <p>
            ban da co tai khoan?
            <a href="#" className="text-deco-none">
              Dang ky
            </a>
          </p>

          <p className="mt-4">hoac Signup voi</p>
          <div className="social-popup">
            <a href="#">
              <img src="facebook.png" alt="error" />
              <span className="d-inline-block ms-2">Facebook</span>
            </a>
            <a href="#" className="ms-2">
              <img src="./login-google.png" alt="error" />
              <span className="d-inline-block ms-2">Google</span>
            </a>
          </div>
        </div>
      </div>
      <Overlay isOpen={isOpen} handleOpen={() => setIsOpen((pre) => !pre)} />
    </>
  );
}
