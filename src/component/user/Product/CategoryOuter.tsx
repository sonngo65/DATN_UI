import { access } from "fs";
import {
  Accessory,
  Category,
  ChildCate,
  Feedback,
  Product,
} from "../../../model";
import React from "react";
interface CategoryOuterProps {
  Head: React.FC<{ title: string; childCates?: ChildCate[] }>;
  Body:
    | React.FC<{ products: Product[] }>
    | React.FC<{ accessories: Accessory[] }>
    | React.FC<{ feedbacks: Feedback[] }>;
}

export default function CategoryOuter({ Head, Body }: CategoryOuterProps) {
  return ({
    img,
    title,
    childCates,
    products,
    accessories,
    feedbacks,
  }: Category) => {
    const HeadProps = { title, childCates };
    return (
      <div className=" mt-4">
        <div className="mb-4">
          <img src={img} alt="alt" style={{ width: "100%" }} />
        </div>
        <Head {...HeadProps} />
        {products && (
          <Body
            products={products ? products : []}
            accessories={[]}
            feedbacks={[]}
          />
        )}
        {accessories && (
          <Body
            accessories={accessories ? accessories : []}
            products={[]}
            feedbacks={[]}
          />
        )}
        {feedbacks && (
          <Body
            feedbacks={feedbacks ? feedbacks : []}
            products={[]}
            accessories={[]}
          />
        )}
      </div>
    );
  };
}
