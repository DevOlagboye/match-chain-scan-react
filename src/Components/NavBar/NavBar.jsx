import React, { useState, useContext } from "react";
import { ethers } from "ethers";
import { WalletContext } from "../../Context/WalletContext";
import matchLabs from "../../Assets/images/match_logo.svg";
import "./NavBar.css";

const NavBar = () => {
  let [wallet, setWallet] = useContext(WalletContext);
  const connectWallet = async (e) => {
    e.preventDefault();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await provider.send("eth_requestAccounts", []);
    wallet = accounts[0];
    setWallet(wallet);
    console.log(wallet);
  };
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
                <div className={wallet ? "circle green" : "circle red"}></div>
                <a href="##" onClick={connectWallet}>
                  {console.log(wallet)}

                  {wallet ? "Connected" : "Connect Wallet"}
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
