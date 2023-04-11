import React, { useState, useEffect } from "react";
import transactionImage from "../../Assets/images/icon_transaction.png";
import blockImage from "../../Assets/images/icon_block.png";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "./LiveData.css";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LiveData = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
      },
    },
  };
  const labels = ["January", "February", "March"];
  const [price, setPrice] = useState("");
  const getEtherPrice = async () => {
    try {
      const data = await axios.get(
        `https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${process.env.REACT_APP_API_KEY}`
      );
      setPrice(data.data.result.ethusd);
    } catch (e) {
      console.error(e);
    }
  };
  const data = {
    labels,
    datasets: [
      {
        label: "ETH Price",
        data: [1200, 1350, `${price}`],
        borderColor: " #FE891B",
      },
    ],
  };
  getEtherPrice();
  return (
    <>
      <div className="live-data-container">
        <h5 className="eth-price">ETH Price: {price}</h5>
        <div className="data-container">
          <div className="blocks-data">
            <div className="transactions">
              <div className="image-text">
                <img src={transactionImage} alt="" />
                <div>
                  <h5 className="title">TRANSACTIONS</h5>
                  <p>646</p>
                </div>
              </div>
              <div className="gas-fee">
                <h5 className="title">GAS PRICE</h5>
                <p>Gwei</p>
              </div>
            </div>
            <hr />
            <div className="transactions">
              <div className="image-text">
                <img src={blockImage} alt="" />
                <div>
                  <h5 className="title">LATEST BLOCK</h5>
                  <p>406,805</p>
                </div>
              </div>
              <div className="gas-fee">
                <h5 className="title">WALLET ADDRESS</h5>
                <p>123</p>
              </div>
            </div>
          </div>
          <div className="graph">
            <Line options={options} data={data} className="line-graph" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveData;
