import { HiOutlineHome } from "react-icons/hi";
import { BiCategory } from "react-icons/bi";
import { LuPhoneCall } from "react-icons/lu";
import { BsCart4 } from "react-icons/bs";
import "./style/_mobile-navbar.scss";
import MobileNavbar from "../Navbar/MobileNavbar";
import { useState } from "react";
export default function MobileHeader() {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const handleOpenNavClick = () => {
    setIsOpenNav((pre) => !pre);
  };
  return (
    <div className="mobi-header d-lg-none d-flex position-fixed justify-content-around align-items-center">
      <a
        href="#"
        className="mobi-header-item d-flex align-items-center flex-column h-100 justify-content-center"
      >
        <HiOutlineHome />
        <span>Trang chủ</span>
      </a>
      <a
        className="mobi-header-item d-flex align-items-center flex-column h-100 justify-content-center"
        onClick={handleOpenNavClick}
      >
        <BiCategory />
        <span>Danh mục</span>
      </a>
      <a
        href="#"
        className="mobi-header-item  d-flex align-items-center flex-column h-100 justify-content-center"
      >
        <LuPhoneCall />
        <span>Liên hệ</span>
      </a>
      <a
        href="#"
        className="mobi-header-item  d-flex align-items-center flex-column h-100 justify-content-center"
      >
        <BsCart4 />
        <span>Giỏ hàng</span>
      </a>
      <MobileNavbar isOpen={isOpenNav} setIsOpen={setIsOpenNav} />
    </div>
  );
}
