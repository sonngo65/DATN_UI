import "./style/_flash-search.scss";
export default function FlashSearch() {
  const flashSearchItems = [
    {
      name: "Iphone moi",
      img: "/img-20231112-163509.webp",
    },
    {
      name: "Iphone cu",
      img: "/img20231117101927.webp",
    },
    {
      name: "samsung moi",
      img: "/img-20231112-163509.webp",
    },
    {
      name: "samsung moi",
      img: "/img20231117101927.webp",
    },
    {
      name: "oppo moi",
      img: "/img-20231112-163509.webp",
    },
    {
      name: "oppo moi",
      img: "/img20231117101927.webp",
    },
    {
      name: "oppo moi",
      img: "/img-20231112-163509.webp",
    },
    {
      name: "oppo moi",
      img: "/img20231117101927.webp",
    },
    {
      name: "oppo moi",
      img: "/img-20231112-163509.webp",
    },
    {
      name: "oppo moi",
      img: "/img20231117101927.webp",
    },
    {
      name: "Iphone moi",
      img: "/img-20231112-163509.webp",
    },
    {
      name: "Iphone cu",
      img: "/img20231117101927.webp",
    },
    {
      name: "samsung moi",
      img: "/img-20231112-163509.webp",
    },
    {
      name: "samsung moi",
      img: "/img20231117101927.webp",
    },
    {
      name: "oppo moi",
      img: "/img-20231112-163509.webp",
    },
    {
      name: "oppo moi",
      img: "/img20231117101927.webp",
    },
    {
      name: "oppo moi",
      img: "/img-20231112-163509.webp",
    },
    {
      name: "oppo moi",
      img: "/img20231117101927.webp",
    },
    {
      name: "oppo moi",
      img: "/img-20231112-163509.webp",
    },
    {
      name: "oppo moi",
      img: "/img20231117101927.webp",
    },
  ];
  return (
    <div className="fl-search mt-3">
      <ul className="fl-search__list list-type-none">
        {flashSearchItems.map((flashSearchItem) => {
          return (
            <li className="fl-search__item">
              <a href="#" className="fl-search__link d-flex flex-column">
                <img src={flashSearchItem.img} alt={flashSearchItem.name} />
                <p className="p-0 mt-2">{flashSearchItem.name}</p>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
