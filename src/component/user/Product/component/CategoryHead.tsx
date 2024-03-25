import { ChildCate } from "../../../../model";
import "../style/_cate-head.scss";
interface CategoryHead {
  childCates?: ChildCate[];
  title: string;
}
export default function CategoryHead({ title, childCates }: CategoryHead) {
  return (
    <div className="cate-product__head mb-4 d-flex align-items-center justify-content-between ">
      <div className="cate-product__title">
        <h5>{title}</h5>
      </div>
      <ul className="cate-product__child-cate-ls list-type-none d-flex">
        {childCates?.map((childCate) => {
          return (
            <li className="cate-product__child-cate-it">
              <a href="#" className="cate-product__child-cate-li">
                {childCate.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
