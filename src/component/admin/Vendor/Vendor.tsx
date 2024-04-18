import Navbar from "../Navbar";

export default function Vendor() {
  <div className="overflow-y-auto vh-100 bg-white">
    <Navbar title={"Add Vendor"} />
    <div className="base-info px-4">
      <div className="title-v1 py-3">
        <h5>Thông tin cơ bản</h5>
      </div>
      <form action="#">
        <div className=" mb-3">
          <label htmlFor="floatingInput " className="form-label">
            Ten Nha cung cap
          </label>
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder=""
          />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Image
          </label>
          <input type="file" className="form-control" />
        </div>
        <div className="text-end my-5">
          <div className="btn btn-outline-primary px-5">ADD</div>
        </div>
      </form>
    </div>
  </div>;
}
