import SlideBanner from "../SlideBanner";
import { FlashSaleProduct, CategoryOuter } from "../Product";
import { FlashSearch } from "../Search";
import { Footer } from "../Footer";
import CategoryHead from "../Product/component/CategoryHead";
import ProductList from "../Product/component/ProductList";
import ProductSliderList from "../Product/component/ProductSliderList";
import AccessoryList from "../Product/component/AccessoryList";
import FeedbackList from "../Product/component/FeedbackList";
const CategoryProduct = CategoryOuter({
  Head: CategoryHead,
  Body: ProductList,
});
const CategorySliderProduct = CategoryOuter({
  Head: CategoryHead,
  Body: ProductSliderList,
});
const AccessoryProduct = CategoryOuter({
  Head: CategoryHead,
  Body: AccessoryList,
});
const Feedback = CategoryOuter({
  Head: CategoryHead,
  Body: FeedbackList,
});
export default function Home() {
  const cateProducts = [
    {
      img: "/zflip-17390.png",
      title: "APPLE AUTHORISED RESELLER",
      childCates: [
        { id: 1, name: "HONOR" },
        { id: 2, name: "iPhone 15" },
        { id: 3, name: "TECNO POVA 5" },

        { id: 4, name: "Redmi Note 13" },

        { id: 5, name: "Samsung Galaxy S24" },
      ],
      products: [
        {
          id: 1,
          name: "Vivo V29e - 5G - Chính hãng",
          price: 7790000,
          compate_price: 8990000,
          img: "/xanh-song-bang-6.webp",
          note: "Giảm 20% tối đa 600k khi mở thẻ tín dụng TPBank EVO và thanh toán qua EVO App (Từ 2/3-31/5)",
          endow: "giam 10%",
          sticker: "/apple.png",
        },
        {
          id: 2,
          name: "realme C55 - 6GB/128GB - Chính hãng",
          price: 4190000,
          compate_price: 5990000,
          img: "/c55-1-den.webp",
          note: "Giảm 20% tối đa 600k khi mở thẻ tín dụng TPBank EVO và thanh toán qua EVO App (Từ 2/3-31/5)",
          endow: "giam 10%",
        },
        {
          id: 13,
          name: "Vivo V29e - 5G - Chính hãng",
          price: 7790000,
          compate_price: 8990000,
          img: "/xanh-song-bang-6.webp",
          note: "Giảm 20% tối đa 600k khi mở thẻ tín dụng TPBank EVO và thanh toán qua EVO App (Từ 2/3-31/5)",
          endow: "giam 10%",
        },
        {
          id: 2,
          name: "realme C55 - 6GB/128GB - Chính hãng",
          price: 4190000,
          compate_price: 5990000,
          img: "/c55-1-den.webp",
          note: "Giảm 20% tối đa 600k khi mở thẻ tín dụng TPBank EVO và thanh toán qua EVO App (Từ 2/3-31/5)",
          endow: "giam 10%",
        },
        {
          id: 13,
          name: "Vivo V29e - 5G - Chính hãng",
          price: 7790000,
          compate_price: 8990000,
          img: "/xanh-song-bang-6.webp",
          note: "Giảm 20% tối đa 600k khi mở thẻ tín dụng TPBank EVO và thanh toán qua EVO App (Từ 2/3-31/5)",
          endow: "giam 10%",
        },
        {
          id: 2,
          name: "realme C55 - 6GB/128GB - Chính hãng",
          price: 4190000,
          compate_price: 5990000,
          img: "/c55-1-den.webp",
          note: "Giảm 20% tối đa 600k khi mở thẻ tín dụng TPBank EVO và thanh toán qua EVO App (Từ 2/3-31/5)",
          endow: "giam 10%",
        },
      ],
    },
    {
      img: "/hot-chuyen-muc.png",
      title: "APPLE AUTHORISED RESELLER",
      childCates: [
        { id: 1, name: "HONOR" },
        { id: 2, name: "iPhone 15" },
        { id: 3, name: "TECNO POVA 5" },

        { id: 4, name: "Redmi Note 13" },

        { id: 5, name: "Samsung Galaxy S24" },
      ],
      products: [
        {
          id: 1,
          name: "Vivo V29e - 5G - Chính hãng",
          price: 7790000,
          compate_price: 8990000,
          img: "/xanh-song-bang-6.webp",
          note: "Giảm 20% tối đa 600k khi mở thẻ tín dụng TPBank EVO và thanh toán qua EVO App (Từ 2/3-31/5)",
          endow: "giam 10%",
          sticker: "/apple.png",
        },
        {
          id: 2,
          name: "realme C55 - 6GB/128GB - Chính hãng",
          price: 4190000,
          compate_price: 5990000,
          img: "/c55-1-den.webp",
          note: "Giảm 20% tối đa 600k khi mở thẻ tín dụng TPBank EVO và thanh toán qua EVO App (Từ 2/3-31/5)",
          endow: "giam 10%",
        },
        {
          id: 13,
          name: "Vivo V29e - 5G - Chính hãng",
          price: 7790000,
          compate_price: 8990000,
          img: "/xanh-song-bang-6.webp",
          note: "Giảm 20% tối đa 600k khi mở thẻ tín dụng TPBank EVO và thanh toán qua EVO App (Từ 2/3-31/5)",
          endow: "giam 10%",
        },
        {
          id: 2,
          name: "realme C55 - 6GB/128GB - Chính hãng",
          price: 4190000,
          compate_price: 5990000,
          img: "/c55-1-den.webp",
          note: "Giảm 20% tối đa 600k khi mở thẻ tín dụng TPBank EVO và thanh toán qua EVO App (Từ 2/3-31/5)",
          endow: "giam 10%",
        },
        {
          id: 13,
          name: "Vivo V29e - 5G - Chính hãng",
          price: 7790000,
          compate_price: 8990000,
          img: "/xanh-song-bang-6.webp",
          note: "Giảm 20% tối đa 600k khi mở thẻ tín dụng TPBank EVO và thanh toán qua EVO App (Từ 2/3-31/5)",
          endow: "giam 10%",
        },
        {
          id: 2,
          name: "realme C55 - 6GB/128GB - Chính hãng",
          price: 4190000,
          compate_price: 5990000,
          img: "/c55-1-den.webp",
          note: "Giảm 20% tối đa 600k khi mở thẻ tín dụng TPBank EVO và thanh toán qua EVO App (Từ 2/3-31/5)",
          endow: "giam 10%",
        },
      ],
    },
    {
      img: "/hot-chuyen-muc.png",
      title: "APPLE AUTHORISED RESELLER",
      childCates: [
        { id: 1, name: "HONOR" },
        { id: 2, name: "iPhone 15" },
        { id: 3, name: "TECNO POVA 5" },

        { id: 4, name: "Redmi Note 13" },

        { id: 5, name: "Samsung Galaxy S24" },
      ],
      products: [
        {
          id: 1,
          name: "Vivo V29e - 5G - Chính hãng",
          price: 7790000,
          compate_price: 8990000,
          img: "/xanh-song-bang-6.webp",
          note: "Giảm 20% tối đa 600k khi mở thẻ tín dụng TPBank EVO và thanh toán qua EVO App (Từ 2/3-31/5)",
          endow: "giam 10%",
          sticker: "/apple.png",
        },
        {
          id: 2,
          name: "realme C55 - 6GB/128GB - Chính hãng",
          price: 4190000,
          compate_price: 5990000,
          img: "/c55-1-den.webp",
          note: "Giảm 20% tối đa 600k khi mở thẻ tín dụng TPBank EVO và thanh toán qua EVO App (Từ 2/3-31/5)",
          endow: "giam 10%",
        },
        {
          id: 13,
          name: "Vivo V29e - 5G - Chính hãng",
          price: 7790000,
          compate_price: 8990000,
          img: "/xanh-song-bang-6.webp",
          note: "Giảm 20% tối đa 600k khi mở thẻ tín dụng TPBank EVO và thanh toán qua EVO App (Từ 2/3-31/5)",
          endow: "giam 10%",
        },
        {
          id: 2,
          name: "realme C55 - 6GB/128GB - Chính hãng",
          price: 4190000,
          compate_price: 5990000,
          img: "/c55-1-den.webp",
          note: "Giảm 20% tối đa 600k khi mở thẻ tín dụng TPBank EVO và thanh toán qua EVO App (Từ 2/3-31/5)",
          endow: "giam 10%",
        },
        {
          id: 13,
          name: "Vivo V29e - 5G - Chính hãng",
          price: 7790000,
          compate_price: 8990000,
          img: "/xanh-song-bang-6.webp",
          note: "Giảm 20% tối đa 600k khi mở thẻ tín dụng TPBank EVO và thanh toán qua EVO App (Từ 2/3-31/5)",
          endow: "giam 10%",
        },
        {
          id: 2,
          name: "realme C55 - 6GB/128GB - Chính hãng",
          price: 4190000,
          compate_price: 5990000,
          img: "/c55-1-den.webp",
          note: "Giảm 20% tối đa 600k khi mở thẻ tín dụng TPBank EVO và thanh toán qua EVO App (Từ 2/3-31/5)",
          endow: "giam 10%",
        },
      ],
    },
  ];
  const accessories = {
    img: "/hot-chuyen-muc.png",
    title: "PHU KIEN",
    accessories: [
      { img: "icon-moi-10.webp", name: "Tai nghe" },
      { img: "icon-moi-10.webp", name: "Tai nghe" },
      { img: "icon-moi-10.webp", name: "Tai nghe" },
      { img: "icon-moi-10.webp", name: "Tai nghe" },
      { img: "icon-moi-10.webp", name: "Tai nghe" },
      { img: "icon-moi-10.webp", name: "Tai nghe" },
      { img: "icon-moi-10.webp", name: "Tai nghe" },
      { img: "icon-moi-10.webp", name: "Tai nghe" },
      { img: "icon-moi-10.webp", name: "Tai nghe" },
      { img: "icon-moi-10.webp", name: "Tai nghe" },
      { img: "icon-moi-10.webp", name: "Tai nghe" },
      { img: "icon-moi-10.webp", name: "Tai nghe" },
      { img: "icon-moi-10.webp", name: "Tai nghe" },
      { img: "icon-moi-10.webp", name: "Tai nghe" },
      { img: "icon-moi-10.webp", name: "Tai nghe" },
      { img: "icon-moi-10.webp", name: "Tai nghe" },
      { img: "icon-moi-10.webp", name: "Tai nghe" },
      { img: "icon-moi-10.webp", name: "Tai nghe" },
      { img: "icon-moi-10.webp", name: "Tai nghe" },
      { img: "icon-moi-10.webp", name: "Tai nghe" },
    ],
  };

  const feedbacks = {
    img: "/hot-chuyen-muc.png",
    title: "Feed back",
    feedbacks: [
      {
        img: "feedback-img.webp",
        name: "DV Trung Ruồi",
        field: "Diễn viên",
        description:
          "Tháng củ mật, lớ ngớ thế nào lại để bị mất điện thoại, may mắn nhờ đại ca Quang Thắng giới thiệu qua Hoàng Hà Mobile, vừa sắm được máy mới sang sịn mịn mà còn với giá cả phải chăng. Từ nay chỉ tin tưởng mua đồ công nghệ ở Hoàng Hà thôi!!",
      },
      {
        img: "feedback-img.webp",
        name: "Ngo son",
        field: "IT",
        description: "rat tot",
      },
      {
        img: "feedback-img.webp",
        name: "Ngo son wqe",
        field: "IT",
        description:
          "Tháng củ mật, lớ ngớ thế nào lại để bị mất điện thoại, may mắn nhờ đại ca Quang Thắng giới thiệu qua Hoàng Hà Mobile, vừa sắm được máy mới sang sịn mịn mà còn với giá cả phải chăng. Từ nay chỉ tin tưởng mua đồ công nghệ ở Hoàng Hà thôi!!",
      },
    ],
  };
  return (
    <div className="body mt-5 pt-4 pt-md-0 ">
      <div className="banner d-none d-lg-block">
        <img src="./big_bn_slide.webp" alt="error" />
      </div>
      <div className="container">
        <SlideBanner />
        <FlashSearch />
        <FlashSaleProduct />
        {
          <>
            <CategoryProduct {...cateProducts[1]} />
            <CategorySliderProduct {...cateProducts[0]} />
            <CategoryProduct {...cateProducts[2]} />
            <AccessoryProduct {...accessories} />
            <Feedback {...feedbacks} />
          </>
        }
      </div>
    </div>
  );
}
