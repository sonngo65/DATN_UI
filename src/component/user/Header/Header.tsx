import Navbar from "../Navbar";
import { CiSearch } from "react-icons/ci";
import { LuPhoneCall } from "react-icons/lu";
import { BsCart4 } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import MobileHeader from "./MobileHeader";
import Login from "../Login";
import Signup from "../Signup";
import FixScreen from "./FixScreen";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="header container-fluid">
      <div className="header__head container d-none d-lg-block">
        <div className="row pt-3">
          <div className="col-lg-4 col-md-12 d-flex align-items-center">
            <div className="header__logo">
              <Link to="/">
                <img src="./logo5.png" alt="" />
              </Link>
            </div>
            <div className="header__search-box">
              <input
                className="header__search-box__input"
                type="text"
                placeholder="Từ khóa ..."
              />
              <CiSearch />
            </div>
          </div>
          <div className="col-lg-8">
            <ul className="header__list list-type-none ">
              <li className="header__item list-item-center d-flex my-auto">
                <Link to="/news" className="header__link">
                  Công nghệ 24h
                </Link>
                <span>|</span>
                <Link to="/product/search" className="header__link">
                  Khuyến mãi mới
                </Link>
              </li>
              <li className="header__item">
                <a href="#" className="header__link list-item-center">
                  <div className="icon-ring">
                    <LuPhoneCall />
                  </div>
                  <span className="text-start fw-bold">
                    {" "}
                    Tư vấn: 0879896115
                  </span>
                </a>
              </li>
              <li className="header__item ">
                <Link
                  to="/cart"
                  className="header__link bg-round-white list-item-center"
                >
                  <BsCart4 />
                  <span>Giỏ hàng</span>
                </Link>
              </li>
              <li className="header__item list-item-center">
                <FaRegUserCircle />
                <div className="d-flex flex-column justify-content-center align-items-start">
                  <Login className="header__link d-block text-deco-none" />
                  <Signup className="header__link d-block text-deco-none" />
                  {/* <a href="#" className="header__link d-block text-deco-none">
                    Dang ky
                  </a>
                  <a href="#" className="header__link d-block text-deco-none">
                    Dang nhap
                  </a> */}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="header__mobi-head position-fixed d-lg-none">
        <div className="row">
          <div className="d-flex align-items-center justify-content-center">
            <div className="header__logo">
              <a href="#">
                <img src="./logo192.png" alt="" />
              </a>
            </div>
            <div className="header__search-box">
              <input
                className="header__search-box__input"
                type="text"
                placeholder="Tu khoa ..."
              />
              <CiSearch />
            </div>
          </div>
        </div>
      </div>
      <Navbar />
      <MobileHeader />
      <FixScreen />
    </div>
  );
}
