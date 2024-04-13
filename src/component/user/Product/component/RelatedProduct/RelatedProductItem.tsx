import { FaRegStar } from "react-icons/fa";
interface RelatedProductItemProps {
  img: string;
  name: string;
  rating: number;
  price: number;
  compareToPrice: number;
}
export default function RelatedProductItem({
  img,
  name,
  rating,
  price,
  compareToPrice,
}: RelatedProductItemProps) {
  return (
    <a href="#" className="related-product-li">
      <div className="related-product-img">
        <img src={img} alt={name} />
      </div>
      <div className="related-product-info">
        <div className="name">{name}</div>
        <div className="rating">
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
        </div>
        <div className="price">
          <strong>{price}</strong>{" "}
          <span className="strike">{compareToPrice}</span>
        </div>
      </div>
    </a>
  );
}
