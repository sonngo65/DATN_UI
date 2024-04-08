import "./_order-history.scss";
import { FaPencilAlt } from "react-icons/fa";
import { FaRegUser, FaRegCircleUser } from "react-icons/fa6";
import { RiFilePaper2Line } from "react-icons/ri";

export default function OrderHistory() {
  return (
    <div className="order-history my-4">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="profile px-2 d-flex align-items-center pb-2">
              <div className="img">
                <FaRegCircleUser />
              </div>
              <div className="info ms-3">
                <h5 className="name m-0">Ngo tat son</h5>
                <a href="#" className="update-pro d-flex align-items-center">
                  <div className="icon me-1">
                    <FaPencilAlt />
                  </div>
                  Chinh sua profile
                </a>
              </div>
            </div>
            <ul className="side-bar-ls list-type-none pt-2">
              <li className="side-bar-it active px-4 py-1">
                <a
                  href=""
                  className="side-bar-li d-flex justify-content-start align-items-center"
                >
                  <div className="icon me-2">
                    <FaRegUser />
                  </div>
                  Tai khoan cua toi
                </a>
              </li>
              <li className="side-bar-it px-4 py-1">
                <a
                  href=""
                  className="side-bar-li d-flex justify-content-start align-items-center "
                >
                  <div className="icon me-2">
                    <RiFilePaper2Line />
                  </div>
                  Don mua
                </a>
              </li>
            </ul>
          </div>
          <div className="col-9">
            <div className="order-status bg-white mb-3">
              <ul className="order-status-ls list-type-none d-flex justify-content-between align-items-center">
                <li className="order-status-it active w-100">
                  <a
                    href="#"
                    className="order-status-li  text-center d-block px-3 py-2"
                  >
                    Tat ca
                  </a>
                </li>
                <li className="order-status-it w-100">
                  <a
                    href="#"
                    className="order-status-li text-center d-block px-3 py-2"
                  >
                    Cho thanh toan
                  </a>
                </li>
                <li className="order-status-it w-100">
                  <a
                    href="#"
                    className="order-status-li text-center d-block px-3 py-2"
                  >
                    Van chuyen
                  </a>
                </li>
                <li className="order-status-it w-100">
                  <a
                    href="#"
                    className="order-status-li text-center d-block px-3 py-2"
                  >
                    Cho giao hang
                  </a>
                </li>
                <li className="order-status-it w-100">
                  <a
                    href="#"
                    className="order-status-li text-center d-block px-3 py-2"
                  >
                    hoan thanh
                  </a>
                </li>
                <li className="order-status-it w-100">
                  <a
                    href="#"
                    className="order-status-li text-center d-block px-3 py-2"
                  >
                    Da huy
                  </a>
                </li>
              </ul>
            </div>
            <div className="order">
              <ul className="order-ls list-type-none">
                <li className="order-it rounded bg-white px-3 py-4 mb-3">
                  <ul className="product-ls py-3 list-type-none">
                    <li className="product-it py-2">
                      <a
                        href="#"
                        className="product-li d-flex align-items-center"
                      >
                        <div className="img">
                          <img src="./product-detail1.webp" alt="" />
                        </div>
                        <div className="info">
                          <div className="left pe-3">
                            <div className="name">
                              Bịt Mắt 3D Khi Ngủ, Mặt Nạ Ngủ Nam Nữ Thoáng Khí
                              Và Mềm Mại, Tiện Dụng Ngủ Trưa Văn Phòng, Trên Xe
                              Ôtô. TakyHome 5130
                            </div>
                            <div className="options">Den, 128gb</div>
                            <div className="quantity">x1</div>
                          </div>
                          <div className="right d-flex justify-content-end align-items-center">
                            <div className="price">
                              <strong>28.420₫</strong>
                              <span className="strike">29.000₫</span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="product-it py-2">
                      <a
                        href="#"
                        className="product-li d-flex align-items-center"
                      >
                        <div className="img">
                          <img src="./product-detail1.webp" alt="" />
                        </div>
                        <div className="info">
                          <div className="left pe-3">
                            <div className="name">
                              Bịt Mắt 3D Khi Ngủ, Mặt Nạ Ngủ Nam Nữ Thoáng Khí
                              Và Mềm Mại, Tiện Dụng Ngủ Trưa Văn Phòng, Trên Xe
                              Ôtô. TakyHome 5130
                            </div>
                            <div className="options">Den, 128gb</div>
                            <div className="quantity">x1</div>
                          </div>
                          <div className="right d-flex justify-content-end align-items-center">
                            <div className="price">
                              <strong>28.420₫</strong>
                              <span className="strike">29.000₫</span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                  <div className="total-price text-end my-3">
                    Thanh tien: <strong>28.420₫</strong>
                  </div>
                  <div className="button text-end">
                    <button className="btn btn-outline-primary">
                      huy don hang
                    </button>
                  </div>
                </li>
                <li className="order-it rounded bg-white px-3 py-4">
                  <ul className="product-ls py-3 list-type-none">
                    <li className="product-it py-2">
                      <a
                        href="#"
                        className="product-li d-flex align-items-center"
                      >
                        <div className="img">
                          <img src="./product-detail1.webp" alt="" />
                        </div>
                        <div className="info">
                          <div className="left pe-3">
                            <div className="name">
                              Bịt Mắt 3D Khi Ngủ, Mặt Nạ Ngủ Nam Nữ Thoáng Khí
                              Và Mềm Mại, Tiện Dụng Ngủ Trưa Văn Phòng, Trên Xe
                              Ôtô. TakyHome 5130
                            </div>
                            <div className="options">Den, 128gb</div>
                            <div className="quantity">x1</div>
                          </div>
                          <div className="right d-flex justify-content-end align-items-center">
                            <div className="price">
                              <strong>28.420₫</strong>
                              <span className="strike">29.000₫</span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                  <div className="total-price text-end my-3">
                    Thanh tien: <strong>28.420₫</strong>
                  </div>
                  <div className="button text-end">
                    <button className="btn btn-outline-primary">
                      huy don hang
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
