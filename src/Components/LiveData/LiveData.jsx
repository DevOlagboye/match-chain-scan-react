import React, { useState, useEffect } from "react";
import transactionImage from "../../Assets/images/icon_transaction.png";
import blockImage from "../../Assets/images/icon_block.png";
import axios from "axios";
import "./LiveData.css";
const LiveData = () => {
  const [price, setPrice] = useState("");
  const getEtherPrice = async () => {
    try {
      const data = await axios.get(
        `https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${process.env.REACT_APP_API_KEY}`
      );
      console.log(data.data.result);
      setPrice(data.data.result.ethusd);
    } catch (e) {
      console.error(e);
    }
  };
  getEtherPrice();
  return (
    <>
      <div className="live-data-container">
        <h5 className="eth-price">ETH Price: {price.toLocaleString()}</h5>
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
      </div>
    </>
  );
};

export default LiveData;
