import { FaArrowTrendUp } from "react-icons/fa6";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { Chart } from "chart.js";
import { useEffect, useState } from "react";
import MyChart from "../Chart/Chart";
let chart: any;
export default function Dashboard() {
  const [data, setData] = useState([0, 1, 2213, 3231, 4122, 5243, 2136, 2137]);

  const onClick = () => {
    setData((prevData) => prevData.slice(1).concat(10 * Math.random()));
  };
  return (
    <div className="dashboard px-3">
      <div className="row">
        <div className="col-4">
          <div className="title py-3  d-flex justify-content-start align-items-center ">
            <h5>Bound Rate</h5>
            <div className="icon ms-2">
              <IoIosInformationCircleOutline />
            </div>
          </div>
          <div className="info">
            <h3 className="mt-3 mb-2">45.80%</h3>
            <div className="detail">
              <span className="rounded-pill px-2  text-success">
                <span className="icon me-2">
                  <FaArrowTrendUp className=" text-success" />
                </span>
                12.80%
              </span>
              <span className="ms-3 text-gray opacity-50">than last week</span>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="title py-3  d-flex justify-content-start align-items-center">
            <h5>Total Erning</h5>
            <div className="icon  ms-2">
              <IoIosInformationCircleOutline />
            </div>
          </div>
          <div className="info">
            <h3 className="mt-3 mb-2">$45.80</h3>
            <div className="detail">
              <span className="rounded-pill px-2 text-danger">
                <span className="icon me-2">
                  <FaArrowTrendUp className="text-danger" />
                </span>
                $12.80
              </span>
              <span className="ms-3 text-gray opacity-50">than last week</span>
            </div>
          </div>
        </div>

        <div className="col-4">
          <div className="title py-3  d-flex justify-content-start align-items-center">
            <h5>Total Order</h5>
            <div className="icon  ms-2">
              <IoIosInformationCircleOutline />
            </div>
          </div>
          <div className="info">
            <h3 className="mt-3 mb-2">1,20</h3>
            <div className="detail">
              <span className="rounded-pill px-2 text-success">
                <span className="icon ">
                  <FaArrowTrendUp className="text-success" />
                </span>
                12
              </span>
              <span className="ms-3 text-gray opacity-50">than last week</span>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="title py-3  d-flex justify-content-start align-items-center mt-4">
            <h5>Order Total</h5>
            <div className="icon ms-2">
              <IoIosInformationCircleOutline />
            </div>
          </div>

          <MyChart chartData={data} />
        </div>
      </div>
    </div>
  );
}
