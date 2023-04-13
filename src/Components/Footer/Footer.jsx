import React from "react";
import "./Footer.css";
import ethLogo from "../../Assets/images/ethereum-original.svg";
import footerMap from "../../Assets/images/map-footer.png";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-details">
        <div className="footer-powered">
          <div className="logo-text">
            <img src={ethLogo} alt="Ethereum Logo" className="eth-footer" />
            <h5>Powered by Ethereum</h5>
          </div>
          <p className="footer-text">
            Etherscan is a Block Explorer and Analytics Platform for Ethereum,{" "}
            <br />a decentralized smart contracts platform.
          </p>
          <img src={footerMap} alt="Footer Map" />
        </div>

        <div className="company-footer">
          <h5>Company</h5>
          <ul>
            <li>
              <a
                href="https://etherscan.io/aboutus"
                target="_blank"
                rel="noreferrer"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="https://etherscan.io/brandassets"
                target="_blank"
                rel="noreferrer"
              >
                Brand Assets
              </a>
            </li>
            <li>
              <a
                href="https://etherscan.io/contactus"
                target="_blank"
                rel="noreferrer"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="https://etherscan.io/bugbounty"
                target="_blank"
                rel="noreferrer"
              >
                Bug Bounty
              </a>
            </li>
          </ul>
        </div>

        <div className="community-footer">
          <h5>Community</h5>
          <ul>
            <li>
              <a
                href="https://docs.etherscan.io/"
                target="_blank"
                rel="noreferrer"
              >
                API Documentation
              </a>
            </li>
            <li>
              <a
                href="https://info.etherscan.com/"
                target="_blank"
                rel="noreferrer"
              >
                Knowledge Base
              </a>
            </li>
            <li>
              <a
                href="https://etherscan.freshstatus.io/"
                target="_blank"
                rel="noreferrer"
              >
                Network Status
              </a>
            </li>
            <li>
              <a
                href="https://info.etherscan.com/etherscan-newsletters/"
                target="_blank"
                rel="noreferrer"
              >
                Newsletter
              </a>
            </li>
          </ul>
        </div>

        <div className="products-footer">
          <h5>Products & Services</h5>
          <ul>
            <li>
              <a
                href="https://etherscan.io/contactusadvertise"
                target="_blank"
                rel="noreferrer"
              >
                Advertise
              </a>
            </li>
            <li>
              <a
                href="https://etherscan.io/eaas"
                target="_blank"
                rel="noreferrer"
              >
                Explorer-as-a-Sevice(Eaas)
              </a>
            </li>
            <li>
              <a
                href="https://etherscan.io/apis"
                target="_blank"
                rel="noreferrer"
              >
                API Plans
              </a>
            </li>
            <li>
              <a
                href="https://etherscan.io/prioritysupport"
                target="_blank"
                rel="noreferrer"
              >
                Priority Support
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
