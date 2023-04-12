import React, { useState } from "react";
import transactionImage from "../../Assets/images/icon_transaction.png";
import blockImage from "../../Assets/images/icon_block.png";
import axios from "axios";
import "./LiveBlock.css";

const LiveBlock = () => {
  let [minedBlocks, setMinedBlocks] = useState([]);
  let newWallet = localStorage.getItem("walletKey");
  const getMinedBlocks = async () => {
    let getMinedBlocksData = await axios.get(
      `https://api-sepolia.etherscan.io/api?module=account&action=getminedblocks&address=${newWallet}&blocktype=blocks&page=1&offset=10&apikey=${process.env.REACT_APP_API_KEY}`
    );
    minedBlocks = getMinedBlocksData.result;
    console.log(getMinedBlocksData.data);
  };
  getMinedBlocks();
  return (
    <div className="live-block-container">
      <div className="blocks-transaction">
        <div className="latest-block">
          <div className="image-text">
            <img src={blockImage} alt="" />
            <h5>Latest Blocks</h5>
          </div>
          <hr className="latest-block-hr" />
          {minedBlocks.length < 1
            ? "No Blocks Mined Yet"
            : minedBlocks.map((minedBlock) => (
                <div className="blocks-details">
                  <div className="block-box">
                    <img src={blockImage} alt="" className="block-box-image" />
                  </div>
                  <a
                    href={`https://sepolia.etherscan.io/${minedBlock.blockNumber}`}
                    className="block-link"
                  >
                    {minedBlock.blockNumber}
                  </a>
                  <a
                    href={`https://sepolia.etherscan.io/${newWallet}`}
                    className="block-address"
                  >
                    {newWallet}
                  </a>
                </div>
              ))}
        </div>
        <div className="latest-transaction">
          <div className="image-text">
            <img src={transactionImage} alt="" />
            <h5>Latest Transactions</h5>
          </div>
          <hr className="latest-block-hr" />
          <div className="blocks-details">
            <div className="block-box">
              <img src={transactionImage} alt="" className="block-box-image" />
            </div>
            <a href="##" className="block-link">
              122222
            </a>
            <div className="address-to-from">
              <p>From:</p>
              <a
                href={`https://sepolia.etherscan.io/${newWallet}`}
                className="block-address"
              >
                {newWallet}
              </a>
              <p>To:</p>
              <a
                href={`https://sepolia.etherscan.io/${newWallet}`}
                className="block-address"
              >
                {newWallet}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveBlock;
