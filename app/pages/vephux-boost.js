import { useWeb3 } from "../../utils/web3";

export default function YourComponent() {
  const { connected, account, connectWallet, disconnectWallet } = useWeb3();

  return (
    <div>
      {connected ? (
        <div>
          <p>Connected: {account}</p>
          <button onClick={disconnectWallet}>Disconnect</button>
        </div>
      ) : (
        <button onClick={connectWallet}>Connect to MetaMask</button>
      )}
    </div>
  );
}
