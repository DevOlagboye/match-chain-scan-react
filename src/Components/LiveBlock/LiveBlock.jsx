import React from "react";
import transactionImage from "../../Assets/images/icon_transaction.png";
import blockImage from "../../Assets/images/icon_block.png";
import "./LiveBlock.css";

const LiveBlock = () => {
  return (
    <div className="live-block-container">
      <div className="blocks-transaction">
        <div className="latest-block">
          <div className="image-text">
            <img src={blockImage} alt="" />
            <h5>Latest Blocks</h5>
          </div>
          <hr className="latest-block-hr" />
        </div>
        <div className="latest-transaction">
          <div className="image-text">
            <img src={transactionImage} alt="" />
            <h5>Latest Transactions</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveBlock;
