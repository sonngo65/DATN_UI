import { useState } from "react";
import "./style/_navbar.scss";
import SubNavbar from "./SubNavbar";
import { FaCaretDown } from "react-icons/fa";

export default function Navbar() {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Điện thoại",
      childCate1: [
        {
          name: "Điện thoại iphone",
          childCate2: [
            { name: "iphone x1" },
            { name: "iphone x2" },
            { name: "iphone x3" },
            { name: "iphone x4" },
          ],
        },
        {
          name: "Điện thoại samsung",
          childCate2: [
            { name: "samsung x1" },
            { name: "samsung x2" },
            { name: "samsung x3" },
            { name: "samsung x4" },
          ],
        },
      ],
      isOpen: false,
    },
    {
      id: 2,
      name: "Điện thoại",
      childCate1: [
        {
          name: "Điện thoại iphone",
          childCate2: [
            { name: "iphone x1" },
            { name: "iphone x2" },
            { name: "iphone x3" },
          ],
        },
      ],
      isOpen: true,
    },
    {
      id: 3,
      name: "Điện thoại",
      childCate1: [
        {
          name: "Điện thoại iphone",
          childCate2: [
            { name: "iphone x1" },
            { name: "iphone x2" },
            { name: "iphone x3" },
          ],
        },
      ],
      isOpen: false,
    },
    {
      id: 4,
      name: "Điện thoại",
      childCate1: [
        {
          name: "Điện thoại iphone",
          childCate2: [
            { name: "iphone x1" },
            { name: "iphone x2" },
            { name: "iphone x3" },
          ],
        },
      ],
      isOpen: false,
    },
    {
      id: 5,
      name: "Điện thoại",
      childCate1: [
        {
          name: "Điện thoại iphone",
          childCate2: [
            { name: "iphone x1" },
            { name: "iphone x2" },
            { name: "iphone x3" },
          ],
        },
      ],
      isOpen: false,
    },
    {
      id: 6,
      name: "Điện thoại",
      childCate1: [
        {
          name: "Điện thoại iphone",
          childCate2: [
            { name: "iphone x1" },
            { name: "iphone x2" },
            { name: "iphone x3" },
          ],
        },
      ],
      isOpen: false,
    },
    {
      id: 7,
      name: "Điện thoại",
      childCate1: [
        {
          name: "Điện thoại iphone",
          childCate2: [
            { name: "iphone x1" },
            { name: "iphone x2" },
            { name: "iphone x3" },
          ],
        },
      ],
      isOpen: false,
    },
    {
      id: 8,
      name: "Điện thoại",
      childCate1: [
        {
          name: "Điện thoại iphone",
          childCate2: [
            { name: "iphone x1" },
            { name: "iphone x2" },
            { name: "iphone x3" },
          ],
        },
      ],
      isOpen: false,
    },
  ]);
  return (
    // <div className="container d-none d-lg-block">
    //   <div className="cus-navbar">
    //     <ul className="cus-navbar-list">
    //       <li className="cus-navbar-item">
    //         <a href="#" className="cus-navbar-link">
    //           Điện thoại
    //         </a>
    //         <SubNavbar />
    //       </li>
    //       <li className="cus-navbar-item">
    //         <a href="#" className="cus-navbar-link">
    //           Samsung
    //         </a>
    //         <SubNavbar />
    //       </li>
    //       <li className="cus-navbar-item">
    //         <a href="#" className="cus-navbar-link">
    //           Iphone
    //         </a>
    //       </li>
    //       <li className="cus-navbar-item">
    //         <a href="#" className="cus-navbar-link">
    //           Nghe goi
    //         </a>
    //       </li>
    //       <li className="cus-navbar-item">
    //         <a href="#" className="cus-navbar-link">
    //           Ipad
    //         </a>
    //       </li>
    //       <li className="cus-navbar-item">
    //         <a href="#" className="cus-navbar-link">
    //           Am thanh
    //         </a>
    //       </li>
    //       <li className="cus-navbar-item">
    //         <a href="#" className="cus-navbar-link">
    //           Phu kien
    //         </a>
    //       </li>
    //       <li className="cus-navbar-item">
    //         <a href="#" className="cus-navbar-link">
    //           Laptop
    //         </a>
    //       </li>
    //       <li className="cus-navbar-item">
    //         <a href="#" className="cus-navbar-link">
    //           Sua chua
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    // </div>\

    <div className={`cus-navbar d-lg-block d-none container`}>
      <ul className="cus-navbar-ls  list-type-none lv0 d-flex justify-content-start align-items-center">
        {categories.map((category) => {
          return (
            <li className="level0 py-lg-2">
              <a className="position-relative d-block">
                {category.name}{" "}
                <span className="icon">
                  <FaCaretDown />
                </span>
              </a>

              <ul className="lv1 p-1 list-type-none w-100 bg-white rounded">
                {category.childCate1.map((childCate1) => {
                  return (
                    <li className="level1 p-1">
                      <a className="d-block mb-2">{childCate1.name}</a>
                      <ul className="lv2 list-type-none">
                        {childCate1.childCate2.map((childCate2) => {
                          return (
                            <li className="level2 position-relative py-1">
                              <a>{childCate2.name}</a>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
