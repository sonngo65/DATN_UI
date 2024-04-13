import { Link } from "react-router-dom";
import GiftInfo from "../ProductDetail/GiftInfo";
import CartDetailList from "./CartDetailList";
export default function CartDetail() {
  return (
    <div className="container">
      <div className="cart-detail mt-3 mb-3 px-3 py-4">
        <div className="cart-detail-head mb-3">
          <h5>Giỏ hàng</h5>
        </div>
        <div className="cart-detail-body">
          <div className="row">
            <div className="col-12 col-md-8">
              <CartDetailList />
            </div>
            <div className="col-12 col-md-4">
              <div className="total-price d-flex justify-content-between align-items-center px-2 py-3">
                <span className="d-block">Tổng tiền</span>
                <span className="d-block number">57.320.000 ₫</span>
              </div>
              <button className="pay-btn d-block w-100 px-2 py-3 text-center mt-3">
                <Link to="/payment" className="text-deco-none text-white">
                  Thanh toán
                </Link>
              </button>
              <span className="divide"></span>
              <button className="del-all-btn d-block w-100 px-2 py-3 text-center mt-3">
                Xóa tất cả
              </button>
              <GiftInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
