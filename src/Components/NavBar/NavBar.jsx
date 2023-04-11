import React, { useState, useContext, useEffect } from "react";
import { ethers } from "ethers";
import { WalletContext } from "../../Context/WalletContext";
import matchLabs from "../../Assets/images/match_logo.svg";
import "./NavBar.css";

const NavBar = () => {
  let [wallet, setWallet] = useContext(WalletContext);
  let [mainBalance, setBalance] = useState(null);
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const connectWallet = async (e) => {
    e.preventDefault();
    const accounts = await provider.send("eth_requestAccounts", []);
    wallet = localStorage.setItem("walletKey", accounts[0]);
    setWallet(wallet);
    console.log(wallet);
  };

  const disConnect = () => {
    localStorage.removeItem("walletKey");
    window.location.reload();
  };

  let newWallet = localStorage.getItem("walletKey");

  const getBalance = async () => {
    const accounts = await provider.send("eth_requestAccounts", []);
    const balance = await provider.getBalance(accounts[0]);
    const balanceInEther = ethers.utils.formatEther(balance);
    mainBalance = balanceInEther;
    setBalance(balanceInEther);
    console.log(mainBalance);
  };
  getBalance();
  return (
    <>
      <header className="header-container">
        <nav className="nav-items">
          <div className="logo">
            <a href="##">
              <img src={matchLabs} alt="" />
            </a>
          </div>
          <ul className="nav-list">
            <li>
              <a href="##">Blockchain</a>
            </li>
            <li>
              <a href="##">Tokens</a>
            </li>
            <li>
              <a href="##">APIs</a>
            </li>
            <li>
              <div className="circle-container">
                <div
                  className={newWallet ? "circle green" : "circle red"}
                ></div>
                <a href="##" onClick={connectWallet}>
                  {console.log(newWallet)}
                  {newWallet ? "Connected" : "Connect Wallet"}
                </a>
                <a href="##" onClick={disConnect} className="disconnect">
                  {console.log(newWallet)}
                  {newWallet ? "Disconnect" : ""}
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
