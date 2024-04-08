import { useState } from "react";
import Overlay from "../../Overlay/Overlay";
import { IoMdClose } from "react-icons/io";

import "../../../style/_popup.scss";
interface LoginProps {
  className: string;
}
export default function Login({ className }: LoginProps) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClickLogin = () => {
    setIsOpen((pre) => true);
  };
  const handleClickClose = () => {
    setIsOpen((pre) => !true);
  };
  console.log(isOpen);
  return (
    <>
      <a href="#" className={className} onClick={handleClickLogin}>
        Đăng nhập
      </a>
      <div className={`popup-s position-fixed ${isOpen ? "open" : ""} `}>
        <div className="popup-head">
          <div className="logo">
            <img src="./logo192.png" alt="error" />
          </div>
          <div className="title">
            <h5>Đăng nhập</h5>
          </div>
          <div className="close" onClick={handleClickClose}>
            <IoMdClose />
          </div>
        </div>
        <div className="popup-body">
          <form action="#" className=" popup-form px-4 py-2">
            <input
              type="text"
              placeholder="Vui lòng nhập số tài khoản"
              className="d-block w-100 px-2 py-3 mt-3"
            />
            <input
              type="password"
              placeholder="Vui lòng nhập mật khẩu"
              className="d-block w-100 px-2 py-3 mt-3"
            />
            <div className="fg-pw text-end mt-1">
              <a href="#">Bạn quên mật khẩu rồi ?</a>
            </div>
            <button type="submit" className="w-100 px-2 py-3 text-center mt-4">
              Đăng nhập
            </button>
          </form>
          <p>
            Bạn không có tài khoản ?{" "}
            <a href="#" className="text-deco-none">
              Đăng ký
            </a>
          </p>

          <p className="mt-4">Hoặc đăng nhập với</p>
          <div className="social-popup">
            <a href="#">
              <img src="facebook.png" alt="error" />
              <span className="d-inline-block ms-2">Facebook</span>
            </a>
            <a href="#" className="ms-2">
              <img src="login-google.png" alt="error" />
              <span className="d-inline-block ms-2">Google</span>
            </a>
          </div>
        </div>
      </div>
      <Overlay isOpen={isOpen} handleOpen={() => setIsOpen((pre) => !pre)} />
    </>
  );
}
