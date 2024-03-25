import Navbar from "../Navbar";
import { CiSearch } from "react-icons/ci";
import { LuPhoneCall } from "react-icons/lu";
import { BsCart4 } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import "./style/_header.scss";
import MobileHNavbar from "./MobileNavbar";
export default function Header() {
  return (
    <div className="header container-fluid">
      <div className="header__head container d-md-none d-lg-block">
        <div className="row pt-3">
          <div className="col-lg-4 col-md-12 d-flex align-items-center">
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
          <div className="col-lg-8">
            <ul className="header__list list-type-none">
              <li className="header__item list-item-center">
                <a href="#" className="header__link">
                  Cong nghe 24h
                </a>
                <span>|</span>
                <a href="#" className="header__link">
                  Khuyen mai
                </a>
              </li>
              <li className="header__item">
                <a href="#" className="header__link list-item-center">
                  <div className="icon-ring">
                    <LuPhoneCall />
                  </div>
                  <span className="text-start fw-bold">
                    {" "}
                    Tu van: 0879896115
                  </span>
                </a>
              </li>
              <li className="header__item ">
                <a
                  href="#"
                  className="header__link bg-round-white list-item-center"
                >
                  <BsCart4 />
                  <span>Gio Hang</span>
                </a>
              </li>
              <li className="header__item list-item-center">
                <FaRegUserCircle />
                <div className="d-flex flex-column justify-content-center align-items-start">
                  <a href="#" className="header__link d-block text-deco-none">
                    Dang ky
                  </a>
                  <a href="#" className="header__link d-block text-deco-none">
                    Dang nhap
                  </a>
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
      <MobileHNavbar />
    </div>
  );
}
