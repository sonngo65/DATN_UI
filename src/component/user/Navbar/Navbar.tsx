import "./style/_navbar.scss";
import SubNavbar from "./SubNavbar";
export default function Navbar() {
  return (
    <div className="container d-md-none d-lg-block">
      <div className="cus-navbar">
        <ul className="cus-navbar-list">
          <li className="cus-navbar-item">
            <a href="#" className="cus-navbar-link">
              Dien thoai
            </a>
            <SubNavbar />
          </li>
          <li className="cus-navbar-item">
            <a href="#" className="cus-navbar-link">
              Samsung
            </a>
            <SubNavbar />
          </li>
          <li className="cus-navbar-item">
            <a href="#" className="cus-navbar-link">
              Iphone
            </a>
          </li>
          <li className="cus-navbar-item">
            <a href="#" className="cus-navbar-link">
              Nghe goi
            </a>
          </li>
          <li className="cus-navbar-item">
            <a href="#" className="cus-navbar-link">
              Ipad
            </a>
          </li>
          <li className="cus-navbar-item">
            <a href="#" className="cus-navbar-link">
              Am thanh
            </a>
          </li>
          <li className="cus-navbar-item">
            <a href="#" className="cus-navbar-link">
              Phu kien
            </a>
          </li>
          <li className="cus-navbar-item">
            <a href="#" className="cus-navbar-link">
              Laptop
            </a>
          </li>
          <li className="cus-navbar-item">
            <a href="#" className="cus-navbar-link">
              Sua chua
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
