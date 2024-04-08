import { useEffect, useRef, useState } from "react";
import { ImCheckmark } from "react-icons/im";
import { FaRegStar } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { FaMinus, FaPlus } from "react-icons/fa";

import "./_product-detail.scss";
import { SliderLeftBtn, SliderRightBtn } from "../Product/component/SliderBtn";
import RelatedProductList from "../Product/component/RelatedProduct/RelatedProductList";
export default function ProductDetail() {
  const ref = useRef<any>(null);
  const [width, setWidth] = useState(0);
  const [images, setImages] = useState([
    { id: 1, img: "../product-detail1.webp", isShow: true },
    { id: 2, img: "../product-detail2.webp", isShow: false },
    { id: 3, img: "../product-detail3.webp", isShow: false },
    { id: 4, img: "../product-detail1.webp", isShow: false },
    { id: 5, img: "../product-detail2.webp", isShow: false },
    { id: 6, img: "../product-detail3.webp", isShow: false },
  ]);
  const [slide, setSlide] = useState({
    locate: [0, 4],
    translateX: 0,
  });
  console.log(slide, images);
  const handleClickThumb = (id: number) => {
    setImages((pre) => {
      return pre.map((image) => {
        return image.id === id
          ? { ...image, isShow: true }
          : { ...image, isShow: false };
      });
    });
  };
  const handleClickLeftBtn = () => {
    let isShowIndex = images.findIndex((image) => image.isShow === true);

    if (isShowIndex > 0) {
      if (isShowIndex <= slide.locate[0]) {
        setSlide((pre) => {
          return {
            locate: [pre.locate[0] - 1, pre.locate[1] - 1],
            translateX: pre.translateX + width,
          };
        });
      }
      setImages((pre) => {
        return pre.map((image, index) => {
          return index === isShowIndex - 1
            ? { ...image, isShow: true }
            : { ...image, isShow: false };
        });
      });
    }
  };
  const handleClickRightBtn = () => {
    let isShowIndex = images.findIndex((image) => image.isShow === true);
    if (isShowIndex < images.length - 1) {
      if (isShowIndex >= slide.locate[1]) {
        setSlide((pre) => {
          return {
            locate: [pre.locate[0] + 1, pre.locate[1] + 1],
            translateX: pre.translateX - width,
          };
        });
      }
      setImages((pre) => {
        return pre.map((image, index) => {
          return index === isShowIndex + 1
            ? { ...image, isShow: true }
            : { ...image, isShow: false };
        });
      });
    }
  };
  useEffect(() => {
    ref.current && setWidth(ref.current.offsetWidth / 5);
    const resizeHandle = () => {
      if (ref.current) {
        if (window.innerWidth >= 1200) {
          setWidth(ref.current.offsetWidth / 5);
          setSlide((pre) => {
            return { ...pre, locate: [0, 4] };
          });
        } else if (window.innerWidth >= 996) {
          setWidth(ref.current.offsetWidth / 4);
          setSlide((pre) => {
            return { ...pre, locate: [0, 3] };
          });
        } else {
          setWidth(ref.current.offsetWidth / 3);

          setSlide((pre) => {
            return { ...pre, locate: [0, 2] };
          });
        }
      }
    };
    window.addEventListener("resize", resizeHandle);
    return () => {
      window.removeEventListener("resize", resizeHandle);
    };
  }, []);
  return (
    <div className="container bg-white product-detail-container mt-3 mb-3">
      <div className="product-detail">
        <div className="row">
          <div className="col-12 col-md-5 col-xl-4">
            <div className="product-imgs" ref={ref}>
              <SliderLeftBtn
                className="t-40"
                handleEventClick={handleClickLeftBtn}
              />
              <SliderRightBtn
                className="t-40"
                handleEventClick={handleClickRightBtn}
              />
              <div className="product-slide">
                <div className="main-slide-product">
                  {images.map((image) => {
                    return (
                      <div
                        className={`main-item ${image.isShow ? "show" : ""}`}
                      >
                        <img src={image.img} alt={image.img} />
                      </div>
                    );
                  })}
                </div>
                <div
                  className="thumb-slide-product"
                  style={{
                    transform: `TranslateX(${slide.translateX}px)`,
                    transition: `all 0.3s ease`,
                  }}
                >
                  {images.map((image) => {
                    return (
                      <div
                        onClick={() => {
                          handleClickThumb(image.id);
                        }}
                        className={`thumb-item ${image.isShow ? "show" : ""}`}
                        style={{ width: `${width}px`, height: `${width}px` }}
                      >
                        <img src={image.img} alt={image.img} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-7 col-xl-4">
            <div className="product-name mt-2">Sam sung galaxy</div>
            <div className="product-rating mt-1">
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
            </div>
            <div className="product-price mt-4">1.000.000 d</div>
            <div className="product-buy-options mt-4">
              <div className="option-item">
                <p className="title">Mau sac</p>
                <ul className="list list-type-none">
                  <li className="selected">
                    <input type="radio" name="color" id="color_1" />
                    <div className="label">
                      <img src="../product-detail1.webp" alt="eror" />
                      <label htmlFor="color_1">trang</label>
                    </div>
                    <div className="sticker">
                      <ImCheckmark />
                    </div>
                  </li>
                  <li>
                    <input type="radio" name="color" id="color_2" />
                    <div className="label">
                      <img src="../product-detail2.webp" alt="eror" />
                      <label htmlFor="color_2">hong</label>
                    </div>
                    <div className="sticker">
                      <ImCheckmark />
                    </div>
                  </li>
                  <li>
                    <input type="radio" name="color" id="color_3" />
                    <div className="label">
                      <img src="../product-detail3.webp" alt="eror" />
                      <label htmlFor="color_3">do</label>
                    </div>
                    <div className="sticker">
                      <ImCheckmark />
                    </div>
                  </li>
                </ul>
              </div>
              <div className="option-item">
                <p className="title">Phien ban</p>
                <ul className="list list-type-none">
                  <li>
                    <input type="radio" id="1" />
                    <div className="label">
                      <label htmlFor="1">xau 98%</label>
                    </div>
                    <div className="sticker">
                      <ImCheckmark />
                    </div>
                  </li>
                  <li>
                    <input type="radio" id="1" />
                    <div className="label">
                      <label htmlFor="1">dep 99%</label>
                    </div>
                    <div className="sticker">
                      <ImCheckmark />
                    </div>
                  </li>
                </ul>
              </div>
              <div className="product-quantity d-flex justify-content-start align-items-center mt-3">
                <p>So luong</p>
                <button className="minus-btn ms-5">
                  <FaMinus />
                </button>
                <button className="plus-btn ms-2">
                  <FaPlus />
                </button>
                <input className="ms-2" type="number" value={1} />
              </div>
              <div className="product-btn row g-1 mt-3">
                <div className="buy-now col-12 col-md-8">
                  <button className="d-flex flex-column justify-content-center align-items-center">
                    <span>Mua ngay</span>
                    <small>Giao tan noi hoac lay tai cua hang</small>
                  </button>
                </div>
                <div className="add-cart col-12 col-md-4">
                  <button className="d-flex flex-column justify-content-center align-items-center">
                    <span>
                      <BsCart4 />
                    </span>
                    <small>Them gio hang</small>
                  </button>
                </div>
              </div>
            </div>

            <div className="product-summary mt-3">
              👉Bảo hành 6 tháng, 30 ngày đổi trả máy lỗi miễn phí, không lỗi
              đổi phí 10%, trả 20% <br />
              👉Tặng đủ cóc, cáp sạc, dán màn hình <br />
              👉Giảm 30% giá phụ kiện khi mua kèm máy <br />
              👉Hỗ trợ vệ sinh máy, phần mềm trọn đời <br />
              👉Giảm 10% chi phí sửa chữa, tối đa 300k <br />
              👉Free ship nội thành HCM đơn hàng từ 5tr <br />
              👉Được kiểm tra hàng và quay video khui hộp khi nhận để đối chiếu
            </div>
          </div>
          <div className="col-12 col-lg-12 col-xl-4">
            <div className="hotline alert alert-warning mt-2">
              Gọi ngay <span>0879.69.8115</span> <br /> để được tư vấn tốt nhất!
            </div>
            <div className="product-info">
              Tình trạng: <span className="text-success">Còn hàng</span>
              <br />
              Thương hiệu: <span className="text-success">Apple</span>
              <br />
              Loại: <span className="text-success">Điện thoại ios</span>
            </div>
            <div className="gift mt-4">
              <span className="gift-img">
                <img src="../gift.webp" alt="error" />
                <span>Uu dai</span>
              </span>
              - Giảm giá sâu nhiều sản phẩm
              <br />
              - Giảm giá Phụ kiện 30% tối đa 200k khi mua kèm điện thoại
              <br />
              - Giảm 5% tối đa 500k khi thanh toán qua Kredivo, Home paylater
              lần đầu
              <br />
            </div>
          </div>
          <div className="row mt-3 pb-4">
            <div className="col-12 col-lg-9">
              {" "}
              <div className="product-desc">
                <h5>thong tin chi tiet</h5>
                <p>
                  iPhone 12 mini GB sở hữu ngoại hình khá nhỏ nhắn, chỉ to hơn 1
                  chút so với iPhone 5S mang lại cảm giác cầm nắm rất tốt, chắc
                  tay phù hợp với nhiều người dùng. Điện thoại được thiết kế
                  vuông vức không còn bo cong như các phiên bản trước đây, phần
                  cạnh máy được vát phẳng tạo cảm giác mạnh mẽ, cá tính.
                </p>
              </div>
              <RelatedProductList />
            </div>
            <div className="col-12 mt-3 mt-lg-0 col-lg-3">
              <div className="product-special ">
                <h5>Thong so ky thuat</h5>
                <ul className="special-list list-type-none">
                  <li className="special-item">Màn hình</li>
                  <li className="special-item">Công nghệ màn hình</li>
                  <li className="special-item">Super Retina XDR OLED</li>
                  <li className="special-item">Độ phân giải</li>
                  <li className="special-item">1080 x 2340 pixels</li>
                  <li className="special-item">Màn hình rộng</li>
                  <li className="special-item">5.4 inches</li>
                  <li className="special-item">Mặt kính cảm ứng</li>
                  <li className="special-item">60 Hz</li>
                  <li className="special-item">Camera sau</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
