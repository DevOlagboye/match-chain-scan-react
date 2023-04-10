import React from "react";
import transactionImage from "../../Assets/images/icon_transaction.png";
import blockImage from "../../Assets/images/icon_block.png";
import "./LiveData.css";
const LiveData = () => {
  return (
    <>
      <div className="live-data-container">
        <h5 className="eth-price">ETH Price: </h5>
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
