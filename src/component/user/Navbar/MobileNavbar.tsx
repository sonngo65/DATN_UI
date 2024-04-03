import { useState } from "react";
import "./style/_mobi-navbar.scss";
import Overlay from "../../Overlay/Overlay";
interface MobileNavbarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function MobileNavbar({ isOpen, setIsOpen }: MobileNavbarProps) {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "dien thoai",
      childCate1: [
        {
          name: "dien thoai iphone",
          childCate2: [
            { name: "iphone x1" },
            { name: "iphone x2" },
            { name: "iphone x3" },
            { name: "iphone x4" },
          ],
        },
        {
          name: "dien thoai samsung",
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
      name: "dien thoai",
      childCate1: [
        {
          name: "dien thoai iphone",
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
      name: "dien thoai",
      childCate1: [
        {
          name: "dien thoai iphone",
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
      name: "dien thoai",
      childCate1: [
        {
          name: "dien thoai iphone",
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
      name: "dien thoai",
      childCate1: [
        {
          name: "dien thoai iphone",
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
      name: "dien thoai",
      childCate1: [
        {
          name: "dien thoai iphone",
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
      name: "dien thoai",
      childCate1: [
        {
          name: "dien thoai iphone",
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
      name: "dien thoai",
      childCate1: [
        {
          name: "dien thoai iphone",
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
  const handleClick = (id: number) => {
    // setIsOpen((pre) => !pre);
    setCategories((pre) => {
      return pre.map((category) => {
        return category.id === id
          ? { ...category, isOpen: true }
          : { ...category, isOpen: false };
      });
    });
  };
  return (
    <>
      <div className={`mobi-navbar position-fixed ${isOpen ? "open" : ""}`}>
        <div className="mobi-menu position-relative h-100">
          <ul className="mobi-navbar-ls list-type-none lv0">
            {categories.map((category) => {
              return (
                <li
                  onClick={() => {
                    handleClick(category.id);
                  }}
                  className={`level0 ${category.isOpen ? "open" : ""}`}
                >
                  <a>{category.name}</a>
                  <ul className="lv1 list-type-none ">
                    {category.childCate1.map((childCate1) => {
                      return (
                        <li className="level1">
                          <a>{childCate1.name}</a>
                          <ul className="lv2 list-type-none">
                            {childCate1.childCate2.map((childCate2) => {
                              return (
                                <li className="level2 position-relative">
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
      </div>
      <Overlay isOpen={isOpen} handleOpen={() => setIsOpen((pre) => !pre)} />
    </>
  );
}
