import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Explorer from "./Components/Explorer/Explorer";
import LiveData from "./Components/LiveData/LiveData";
import { WalletContext } from "./Context/WalletContext";
import { useState } from "react";

function App() {
  const [wallet, setWallet] = useState(null);
  return (
      <WalletContext.Provider value={[wallet, setWallet]}>
        <NavBar />
        <Explorer />
        <LiveData />
      </WalletContext.Provider>
  );
}

export default App;
