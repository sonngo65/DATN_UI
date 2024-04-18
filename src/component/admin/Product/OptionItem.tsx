import React, { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import Overlay from "../../Overlay/Overlay";

export default function OptionItem({
  title,
  childOptions,
  handleAddChildOption,
  handleRemoveChildOption,
}: {
  title: string;
  childOptions: ChildOption[];
  handleAddChildOption: (title: string, value: string) => void;
  handleRemoveChildOption: (title: string, index: number) => void;
}) {
  return (
    <div className="option-item d-flex align-item-center rounded mb-3 p-2">
      <span className="d-block">{title} :</span>
      <ul className="child-option-ls list-type-none d-flex align-items-center">
        {childOptions.map((childOption, index) => (
          <li className="child-option-it pb-1 ms-2 position-relative rounded-pill  pe-4 ps-2">
            {childOption.name}
            <span
              className="icon-close position-absolute top-0  "
              onClick={(e) => {
                e.preventDefault();
                handleRemoveChildOption(title, index);
              }}
            >
              <IoClose />
            </span>
          </li>
        ))}
      </ul>
      <span className="d-block ms-auto text-primary ">
        <AddChildForm
          handleAddChildOption={handleAddChildOption}
          title={title}
        />
        <span className="control-btn">
          <IoClose />
          remove
        </span>
      </span>
    </div>
  );
}
const AddChildForm = ({
  handleAddChildOption,
  title,
}: {
  handleAddChildOption: (title: string, value: string) => void;
  title: string;
}) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [newChildOption, setNewChildOption] = useState<string>("");
  return (
    <>
      <span className="control-btn me-3 position-relative">
        <span onClick={() => setIsShow((pre) => !pre)}>
          <BiPlus />
          add child
        </span>
        <div
          className={`add-child-form rounded bg-white p-2 position-absolute end-100 top-0 ${
            isShow ? "d-block" : "d-none"
          }`}
        >
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              handleAddChildOption(title, newChildOption);
              setNewChildOption("");
            }}
          >
            <input
              type="text"
              placeholder="add child name"
              onChange={(e) => {
                setNewChildOption(e.currentTarget.value);
              }}
              value={newChildOption}
            />
          </form>
        </div>
      </span>
      <Overlay
        className="bg-transparent"
        isOpen={isShow}
        handleOpen={() => setIsShow((pre) => !pre)}
      />
    </>
  );
};
