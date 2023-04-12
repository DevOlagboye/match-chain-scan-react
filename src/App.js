import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Explorer from "./Components/Explorer/Explorer";
import LiveData from "./Components/LiveData/LiveData";
import { WalletContext, BalanceContext, TranSactionsContext } from "./Context/WalletContext";
import { useState } from "react";
import LiveBlock from "./Components/LiveBlock/LiveBlock";

function App() {
  const [wallet, setWallet] = useState(null);
  const [balance, setBalance] = useState(null);
  const [tranLists, setTranLists] = useState([]);
  return (
    <TranSactionsContext.Provider value={[tranLists, setTranLists]}> 
    <BalanceContext.Provider value={[balance, setBalance]}>
      <WalletContext.Provider value={[wallet, setWallet]}>
        <NavBar />
        <Explorer />
        <LiveData />
        <LiveBlock />
      </WalletContext.Provider>{" "}
    </BalanceContext.Provider>
    </TranSactionsContext.Provider>
  );
}

export default App;
