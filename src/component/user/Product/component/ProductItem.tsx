import Product from "../../../../model/Product";
import "../style/_product.scss";

export default function ProductItem({
  id,
  name,
  img,
  price,
  compate_price,
  note,
  endow,
  sticker,
}: Product) {
  return (
    <div className="product">
      <a href="#" className="product__link">
        <div className="product__img">
          <img src={img} alt={name} />
        </div>
        <div className="product__info">
          <p>{name}</p>
          <span className="price">
            <strong>{price} ₫</strong>
            <span className="strike">{compate_price} ₫</span>
          </span>
        </div>
        <div className="product__cover">
          <div className="box">{endow}</div>
        </div>
        {sticker && (
          <div className="product__sticker">
            <img src={sticker} alt="sticker" />
          </div>
        )}
        <div className="product__note">
          <span className="bag">KM</span>
          <div className="text-start ms-2">
            <label>{note}</label>
            <span className="more">Va 2 KM Khac</span>
          </div>
        </div>
      </a>
    </div>
  );
}
