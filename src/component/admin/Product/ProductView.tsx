import { IoSearchOutline } from "react-icons/io5";
export default function ProductView() {
  return (
    <>
      <div className="control-bar p-2 py-4 bg-white rounded  my-2 mx-3  d-flex justify-content-end align-item-center">
        <div className="search-box position-relative me-3 ">
          <input
            type="text"
            className={"w-100 h-100 rounded"}
            placeholder="search"
          />
          <div className="icon position-absolute top-50  translate-middle-y ">
            <IoSearchOutline />
          </div>
        </div>
        <div className="btn">
          <button className="btn btn-outline-success">them</button>
        </div>
      </div>
      <div className="mx-3 rounded overflow-hidden">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Product Image</th>
              <th scope="col">Name</th>
              <th scope="col">Status</th>
              <th scope="col">Quantity</th>
              <th scope="col">Sell</th>
              <th scope="col" colSpan={2}>
                Handle
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="align-middle">
              <th scope="row">1</th>
              <td>
                <img
                  className="product-img"
                  src="./product-detail1.webp"
                  alt="error"
                />
              </td>
              <td>Samsung qwe wqeqw eqwe qwe </td>
              <td>
                <span className="text-success">Con hang</span>
              </td>
              <td>213</td>
              <td>23</td>

              <td colSpan={2}>
                <div className="d-flex justify-content-around">
                  <button className="update-btn p-1 btn btn-outline-warning text-warning">
                    Sua
                  </button>
                  <button className="delete-btn p-1 btn btn-outline-danger">
                    xoa
                  </button>
                </div>
              </td>
            </tr>
            <tr className="align-middle">
              <th scope="row">2</th>
              <td>
                <img
                  className="product-img"
                  src="./product-detail2.webp"
                  alt="error"
                />
              </td>
              <td>Iphone</td>
              <td>
                <span className="text-danger">Het hang</span>
              </td>
              <td>213</td>
              <td>23</td>

              <td colSpan={2}>
                <div className="d-flex justify-content-around">
                  <button className="update-btn p-1 btn btn-outline-warning text-warning">
                    Sua
                  </button>
                  <button className="delete-btn p-1 btn btn-outline-danger">
                    xoa
                  </button>
                </div>
              </td>
            </tr>
            <tr className="align-middle">
              <th scope="row">23</th>
              <td>
                <img
                  className="product-img"
                  src="./product-detail3.webp"
                  alt="error"
                />
              </td>
              <td>Galaxy</td>
              <td>
                <span className="text-danger">Het hang</span>
              </td>
              <td>213</td>
              <td>23</td>

              <td colSpan={2}>
                <div className="d-flex justify-content-around">
                  <button className="update-btn p-1 btn btn-outline-warning text-warning">
                    Sua
                  </button>
                  <button className="delete-btn p-1 btn btn-outline-danger">
                    xoa
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
