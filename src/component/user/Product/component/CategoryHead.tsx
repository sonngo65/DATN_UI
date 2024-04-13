import { ChildCate } from "../../../../model";
interface CategoryHead {
  childCates?: ChildCate[];
  title: string;
}
export default function CategoryHead({ title, childCates }: CategoryHead) {
  return (
    <div className="cate-product__head  mb-4  ">
      <div className="row g-0">
        <div className="cate-product__title col-12 col-lg-5">
          <h5>{title}</h5>
        </div>
        <ul className="cate-product__child-cate-ls col-12 mt-3 mt-lg-0 col-lg-7 list-type-none d-flex">
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
    </div>
  );
}
