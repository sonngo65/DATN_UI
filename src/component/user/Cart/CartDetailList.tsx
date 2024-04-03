import CartDetailItem from "./CartDetailItem";

export default function CartDetailList() {
  const cartDetails = [
    {
      img: "./related-product1.webp",
      name: "IPhone 15 512Gb Mới chính hãng",
      options: "Xanh Biển / Mỹ LL/A",
      price: 22290000,
      quantity: 1,
    },
    {
      img: "./related-product2.webp",
      name: "Samsung Galaxy Zfold 5 Cũ",
      options: "512Gb",
      price: 21990000,
      quantity: 2,
    },
    {
      img: "./related-product3.webp",
      name: "IPhone 15 512Gb Mới chính hãng",
      options: "Xanh Biển / Mỹ LL/A",
      price: 22290000,
      quantity: 3,
    },
  ];
  return (
    <ul className="cart-detail-list list-type-none">
      {cartDetails.map((cartDetail) => {
        return (
          <li className="mt-2">
            <CartDetailItem {...cartDetail} />
          </li>
        );
      })}
    </ul>
  );
}
