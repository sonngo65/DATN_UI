import CategoryAdd from "../Category/CategoryAdd";
import Dashboard from "../Dashboard";
import Navbar from "../Navbar";
import { ProductUpdate, ProductView } from "../Product";
import SideBar from "../SideBar";
import { IoSearchOutline } from "react-icons/io5";

export default function Home() {
  return (
    <>
      <div className="w-100 overflow-hidden">
        <div className="row g-0">
          <div className="col-2">
            <SideBar />
          </div>
          <div className="col-10">
            {/* <Navbar title="Dashboard" /> */}
            <ProductUpdate />
            {/* <ProductView /> */}
            {/* <Dashboard /> */}
            {/* <CategoryAdd /> */}
          </div>
        </div>
      </div>
    </>
  );
}
