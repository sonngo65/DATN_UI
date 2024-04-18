import { useCallback, useEffect, useState } from "react";
import Navbar from "../Navbar";
import SideBar from "../SideBar";
import TextEditor from "../TextEditor";
import OptionItem from "./OptionItem";
import OptionDetailItem from "./OptionDetailItem";
import Notify from "../Notify/Notify";
import * as actionCreators from "../../../store/actionCreators";
import * as CategoryAPI from "../../../api/categoryAPI";
import { useDispatch } from "react-redux";
export default function ProductUpdate() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState<createProductRequest>({
    name: "",
    content: "",
    summary: "",
    price: 0,
    originPrice: 0,
    options: [],
    optionDetails: [],
  });
  const [testSelect, setTestSelect] = useState<string>("");
  const [notify, SetNotify] = useState<string | null>(null);
  const [newOption, setNewOption] = useState<string>("");
  //******************************************************************** */
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(actionCreators.AddProduct(product) as any);
    // console.log("213");
  };
  // *********************************************************************

  const handleChangProduct = (name: string, value: string | number) => {
    setProduct((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  // *********************************************************************

  const handleRemoveChildOption = (title: string, index: number) => {
    setProduct((pre) => {
      return {
        ...pre,
        options: pre.options.map((preOption: Option) =>
          preOption.title === title
            ? {
                ...preOption,
                childOptions: preOption.childOptions.filter(
                  (childOption, i) => i !== index
                ),
              }
            : preOption
        ),
      };
    });
  };

  // *********************************************************************
  const handleChangeOptionDetail = (
    option1: string,
    option2: string,
    name: string,
    value: string | number
  ) => {
    setProduct((preProduct) => {
      return {
        ...preProduct,
        optionDetails: preProduct.optionDetails.map((optionDetail) => {
          if (
            optionDetail.option1 === option1 &&
            optionDetail.option2 === option2
          )
            return { ...optionDetail, [name]: value };
          return optionDetail;
        }),
      };
    });
  };

  // *********************************************************************
  const handleAddChildOption = (title: string, value: string) => {
    if (
      product.options
        .find((option) => option.title === title)
        ?.childOptions.find((childOption) => childOption.name === value)
    ) {
      SetNotify(`option ${value} is exists`);
    } else {
      setProduct((pre) => {
        return {
          ...pre,
          options: pre.options.map((preOption: Option) =>
            preOption.title === title
              ? {
                  ...preOption,
                  childOptions: [...preOption.childOptions, { name: value }],
                }
              : preOption
          ),
        };
      });
    }
  };

  // *********************************************************************

  let arr = Array(product.options.length);
  const generateOptionDetails = useCallback(
    (length: number, optionDetails: OptionDetail[]) => {
      if (length < 0) {
        optionDetails.push({
          option1: arr[0],
          option2: arr[1] === undefined ? null : arr[1],
          image: "",
          price: 0,
          originPrice: 0,
          quantity: 0,
          status: 0,
        });
      } else {
        (product as createProductRequest).options[length].childOptions.forEach(
          (childOption, index) => {
            arr[length] = childOption.name;
            if (length >= 0) {
              generateOptionDetails(length - 1, optionDetails);
            }
          }
        );
      }
    },
    [product.options]
  );

  // *********************************************************************

  useEffect(() => {
    let optionDetails: OptionDetail[] = [];
    if (product.options.length > 0) {
      generateOptionDetails(product.options.length - 1, optionDetails);
      setProduct((pre) => {
        return {
          ...pre,
          optionDetails: optionDetails,
        };
      });
    }
  }, [product.options]);
  console.log(testSelect);

  // *********************************************************************
  return (
    <div className="overflow-y-auto vh-100 bg-white">
      {notify && <Notify notify={notify} setNotify={SetNotify} />}
      <Navbar title={"Update Product"} />
      <div className="base-info px-4">
        <div className="title-v1 py-3">
          <h5>Thông tin cơ bản</h5>
        </div>
        <form action="#">
          <div className=" mb-3">
            <label htmlFor="floatingInput " className="form-label">
              Tên sản phẩm
            </label>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder=""
              onChange={(e) =>
                handleChangProduct(e.currentTarget.id, e.currentTarget.value)
              }
            />
          </div>{" "}
          <div className="row mb-3">
            <div className="col-6">{/*  */}</div>
            <div className="col-6">
              <div>
                <label htmlFor="" className="form-label">
                  Nha cung cấp
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Nha cung cấp</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            {" "}
            <div className="col-6">
              <label className="form-label">Gia</label>
              <input
                type="number"
                id="price"
                className="form-control"
                onChange={(e) =>
                  handleChangProduct(e.currentTarget.id, e.currentTarget.value)
                }
              />
            </div>
            <div className="col-6">
              <div className=" form-check">
                <input type="checkbox" className="form-check-input" />
                <label htmlFor="" className="form-check-label">
                  Sản phẩm bán chạy
                </label>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="floatingInput " className="form-label">
              Tóm tắt
            </label>
            <TextEditor id="summary" onChange={handleChangProduct} />
          </div>
          <div className="mb-3">
            <label htmlFor="floatingInput " className="form-label">
              Mô tả
            </label>
            <TextEditor id="content" onChange={handleChangProduct} />
          </div>
        </form>
      </div>
      <div className="option-info px-4">
        <div className="title-v1 py-3">
          <h5>Them option</h5>
        </div>
        <div className="mb-3">
          <div className="row">
            <div className="col-6">
              <form
                action=""
                onSubmit={(e) => {
                  e.preventDefault();
                  setProduct((pre) => {
                    return {
                      ...pre,
                      options: [
                        ...pre.options,
                        { title: newOption, childOptions: [] },
                      ],
                    };
                  });
                }}
              >
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    id="options"
                    onChange={(e) => {
                      setNewOption(e.currentTarget.value);
                    }}
                  />
                  <label htmlFor="options">them option</label>
                </div>
              </form>
            </div>
          </div>
        </div>
        {product.options.map((option) => (
          <OptionItem
            {...option}
            handleAddChildOption={handleAddChildOption}
            handleRemoveChildOption={handleRemoveChildOption}
          />
        ))}
      </div>
      <div className="option-detail px-4">
        <div className="title-v1 py-3">
          <h5>Chi tiet cac option</h5>
        </div>
        {product.optionDetails.map((optionDetail) => {
          return (
            <OptionDetailItem
              option1={optionDetail.option1}
              option2={optionDetail.option2}
              handleChangeOptionDetail={handleChangeOptionDetail}
            />
          );
        })}
        <ul className="option-detail-ls list-type-none">
          <div className="text-end my-5">
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-outline-primary px-5"
            >
              ADD
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
}

const CategorySelector = async () => {
  const categorys: any = await CategoryAPI.getAll();
  return (
    <div>
      <label htmlFor="" className="form-label">
        Danh mục
      </label>
      <select className="form-select" aria-label="Default select example">
        <option selected>Danh mục</option>
        {categorys.map((category: Category) => {
          return <option value={category.id}>{category.name}</option>;
        })}
      </select>
    </div>
  );
};
