import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";

// MetaMask is an injected connector
const injectedConnector = new InjectedConnector({
  supportedChainIds: [369], // list of supported network IDs
});

export function useWeb3() {
  const context = useWeb3React();
  const { library, account, activate, deactivate } = context;
  const [connected, setConnected] = useState(false);

  // attempt to connect to MetaMask on page load
  useEffect(() => {
    injectedConnector.isAuthorized().then((isAuthorized) => {
      if (isAuthorized) {
        activate(injectedConnector, undefined, true).catch((error) => {
          console.log(error);
        });
      }
    });
  }, [activate]);

  // update connection status
  useEffect(() => {
    setConnected(!!account);
  }, [account]);

  const connectWallet = async () => {
    activate(injectedConnector).catch((error) => {
      console.log(error);
    });
  };

  const disconnectWallet = async () => {
    deactivate();
  };

  return {
    connected,
    account,
    library,
    connectWallet,
    disconnectWallet,
  };
}
