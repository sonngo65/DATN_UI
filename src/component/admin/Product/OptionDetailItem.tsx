import { HtmlHTMLAttributes, useState } from "react";
import * as fileAPI from "../../../api/fileAPI";
export default function OptionDetailItem({
  option1,
  option2,
  handleChangeOptionDetail,
}: {
  option1: string;
  option2: string;
  handleChangeOptionDetail: (
    option1: string,
    option2: string,
    name: string,
    value: string | number
  ) => void;
}) {
  //******************************************************** *
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.id;
    const value = e.currentTarget.value;
    handleChangeOptionDetail(option1, option2, name, value);
  };

  //********************************************************** */
  const handleChangeFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();
    const files = e.currentTarget.files;
    if (files !== null) {
      formData.append("file", files[0]);
      handleChangeOptionDetail(option1, option2, "image", files[0].name);

      fileAPI.upload(formData).catch((e) => {
        console.log(e);
      });
    }
  };
  return (
    <li className="option-detail-it mb-2 rounded bg-white p-2 d-flex justify-content-around align-items-center">
      <span className="option-name me-4">
        {option1} / {option2}
      </span>
      <div className="form-floating me-2">
        <input
          type="number"
          className="form-control"
          id="price"
          placeholder="1"
          onChange={handleChange}
        />
        <label htmlFor="1">Price</label>
      </div>
      <div className="form-floating me-2">
        <input
          type="number"
          className="form-control"
          id="originPrice"
          placeholder="1"
          onChange={handleChange}
        />
        <label htmlFor="1">Origin Price</label>
      </div>
      <div className="form-floating me-2">
        <input
          type="number"
          className="form-control"
          id="quantity"
          placeholder="1"
          onChange={handleChange}
        />
        <label htmlFor="1">Quantity</label>
      </div>
      <div className="option-image d-flex justify-content-start align-items-center me-2">
        <label htmlFor="" className="form-label">
          Image
        </label>
        <input
          type="file"
          className="form-control"
          onChange={handleChangeFiles}
        />
      </div>
    </li>
  );
}
