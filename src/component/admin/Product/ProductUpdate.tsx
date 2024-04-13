import { useEffect } from "react";
import Navbar from "../Navbar";
import SideBar from "../SideBar";
import TextEditor from "../TextEditor";
export default function ProductUpdate() {
  return (
    <>
      <Navbar title={"Update Product"} />
      <div className="base-info">
        <div className="title-v1">
          <h5>Thong tin co ban</h5>
        </div>
        <form action="#">
          <TextEditor />
        </form>
      </div>
    </>
  );
}
