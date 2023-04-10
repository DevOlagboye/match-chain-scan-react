import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./Explorer.css";

const Explorer = () => {
  return (
    <div className="explorer-container">
      <div className="explorer-search">
        <h5 className="explorer-text">Match Chain Explorer</h5>
        <div className="explorer-search-input">
          <input
            type="text"
            placeholder="Search by address, token symbol, name, transaction hash, or block number"
          />
          <button>
            <AiOutlineSearch />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Explorer;
