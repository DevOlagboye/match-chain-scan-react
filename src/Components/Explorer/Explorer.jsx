import React from "react";
import "./Explorer.css";

const Explorer = () => {
  return (
    <div className="explorer-container">
      <div className="explorer-search">
        <h5 className="explorer-text">Match Chain Explorer</h5>
        <input
          type="text"
          placeholder="Search by address, token symbol, name, transaction hash, or block number"
        />
        <button></button>
      </div>
    </div>
  );
};

export default Explorer;
