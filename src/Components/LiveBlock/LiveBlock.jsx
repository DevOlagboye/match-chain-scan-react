import React, { useContext, useEffect, useState } from "react";
import transactionImage from "../../Assets/images/icon_transaction.png";
import blockImage from "../../Assets/images/icon_block.png";
import axios from "axios";
import { TranSactionsContext } from "../../Context/WalletContext";
import "./LiveBlock.css";

const LiveBlock = () => {
  let [minedBlocks, setMinedBlocks] = useState([]);
  let [tranSactionLists, setTranSactionLists] = useState([]);
  let newWallet = localStorage.getItem("walletKey");
  const getMinedBlocks = async () => {
    let getMinedBlocksData = await axios.get(
      `https://api-sepolia.etherscan.io/api?module=account&action=getminedblocks&address=${newWallet}&blocktype=blocks&page=1&offset=10&apikey=${process.env.REACT_APP_API_KEY}`
    );
    minedBlocks = getMinedBlocksData.data.result;
    console.log(getMinedBlocksData.data);
  };
  const getTranList = async () => {
    try {
      let transactionList = await axios.get(
        `https://api-sepolia.etherscan.io/api?module=account&action=txlist&address=${newWallet}&startblock=0&endblock=99999999&page=1&offset=3&sort=asc&apikey=${process.env.REACT_APP_API_KEY}`
      );
      localStorage.setItem(
        "transactionList",
        JSON.stringify(transactionList.data.result)
      );
      const transactionstoredList = localStorage.getItem("transactionList");
      const filteredList = JSON.parse(transactionstoredList);
      tranSactionLists = transactionList.data.result;
      //tranLists = filteredList;
      console.log(filteredList);
      setTranSactionLists(filteredList);
      //setTranLists(tranLists);
      //console.log(JSON.parse(transactionstoredList));
    } catch (e) {
      console.error(e.message);
    }
  };
  useEffect(() => {
    if (newWallet) {
      getTranList();
    }
  }, []);
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
          {tranSactionLists.length === 0
            ? "No Transaction Yet"
            : tranSactionLists.map((tranList) => (
                <>
                  <div className="blocks-details">
                    <div className="block-box">
                      <img
                        src={transactionImage}
                        alt=""
                        className="block-box-image"
                      />
                    </div>
                    <a
                      href={`https://sepolia.etherscan.io/${tranList.blockNumber}`}
                      className="block-link"
                    >
                      {tranList.blockNumber}
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
                </>
              ))}
        </div>
      </div>
    </div>
  );
};

export default LiveBlock;
