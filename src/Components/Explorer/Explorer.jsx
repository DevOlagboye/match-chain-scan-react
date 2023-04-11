import React, { useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./Explorer.css";
import axios from "axios";
import { ethers } from "ethers";

const Explorer = () => {
  const inputRef = useRef();
  const textRef = useRef();
  let [walletBalance, setWalletBalance] = useState();
  const getBalance = async () => {
    const address = inputRef.current.value;
    const balanceData = await axios.get(
      `https://api-sepolia.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=${process.env.REACT_APP_API_KEY}`
    );
    const weiBalance = balanceData.data.result;
    const weiBalanceToEther = ethers.utils.formatEther(weiBalance);
    walletBalance = weiBalanceToEther;
    setWalletBalance(weiBalanceToEther);
    textRef.current.innerHTML = `Your wallet balance is: ${weiBalanceToEther} ETH`;
    console.log(weiBalanceToEther);
  };

  return (
    <div className="explorer-container">
      <div className="explorer-search">
        <h5 className="explorer-text">Match Chain Explorer</h5>
        <div className="explorer-search-input">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search by address, token symbol, name, transaction hash, or block number"
          />
          <button onClick={getBalance}>
            <AiOutlineSearch />
          </button>
        </div>
        <p ref={textRef} className="text-white"></p>
      </div>
    </div>
  );
};

export default Explorer;
