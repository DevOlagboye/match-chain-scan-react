import React from "react";
import "./Footer.css";
import ethLogo from "../../Assets/images/ethereum-original.svg";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-details">
        <div className="footer-powered">
          <img src={ethLogo} alt="Ethereum Logo" />
          <h5>Powered by Ethereum</h5>
          <p>
            Etherscan is a Block Explorer and Analytics Platform for Ethereum,{" "}
            <br />a decentralized smart contracts platform.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
