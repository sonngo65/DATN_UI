import { FaPlus, FaMinus } from "react-icons/fa";
interface CartDetailItemsProps {
  img: string;
  name: string;
  options: string;
  price: number;
  quantity: number;
}

export default function CartDetailItem({
  img,
  name,
  options,
  price,
  quantity,
}: CartDetailItemsProps) {
  return (
    <div className="cart-detail-item ">
      <div className="cart-detail-item-left">
        <div className="cart-detail-item__img">
          <img src={img} alt={name} />
        </div>
        <div className="cart-detail-item__info d-flex flex-column justify-content-between">
          <div>
            <a className="name mb-0">{name}</a>
            <p className="options ">{options}</p>
          </div>
          <div className="quantity">
            <span className="minus">
              <FaMinus />
            </span>
            <span className="number">{quantity}</span>
            <span className="plus">
              <FaPlus />
            </span>
          </div>
        </div>
      </div>
      <div className="cart-detail-item-right">
        <div className="cart-detail-item__price">
          <strong>{price}</strong>
        </div>
        <div className="cart-detail-item__delete">
          <button>xoa</button>
        </div>
      </div>
    </div>
  );
}
