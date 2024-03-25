import { HiOutlineHome } from "react-icons/hi";
import { BiCategory } from "react-icons/bi";
import { LuPhoneCall } from "react-icons/lu";
import { BsCart4 } from "react-icons/bs";
import "./style/_mobile-navbar.scss";
export default function MobileHNavbar() {
  return (
    <div className="mobi-navbar d-lg-none d-flex position-fixed justify-content-around align-items-center">
      <a
        href="#"
        className="mobi-navbar-item d-flex align-items-center flex-column h-100 justify-content-center"
      >
        <HiOutlineHome />
        <span>Trang chủ</span>
      </a>
      <a
        href="#"
        className="mobi-navbar-item d-flex align-items-center flex-column h-100 justify-content-center"
      >
        <BiCategory />
        <span>Danh mục</span>
      </a>
      <a
        href="#"
        className="mobi-navbar-item  d-flex align-items-center flex-column h-100 justify-content-center"
      >
        <LuPhoneCall />
        <span>Liên hệ</span>
      </a>
      <a
        href="#"
        className="mobi-navbar-item  d-flex align-items-center flex-column h-100 justify-content-center"
      >
        <BsCart4 />
        <span>Giỏ hàng</span>
      </a>
    </div>
  );
}
