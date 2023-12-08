import { useEffect, useState } from "react";
import { Magic } from "magic-sdk";
import { OpenIdExtension } from "@magic-ext/oidc";
import PulseLoader from "react-spinners/PulseLoader";
import { ethers } from "ethers";
import { useAuth0 } from "@auth0/auth0-react";

const authConfig = require("../auth_config.json");

const MagicWidget = () => {
  const { getIdTokenClaims } = useAuth0();
  const [address, setAddress] = useState(null);
  const [balance, setBalance] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  const magic = new Magic(authConfig.magicApiKey, {
    // exposes the openid module in your magic instance
    extensions: [new OpenIdExtension()],
  });

  const provider = new ethers.BrowserProvider(magic.rpcProvider);

  const loginWithMagic = async () => {
    const token = await getIdTokenClaims();
    // resolves a DID token and stores a valid session to browser
    await magic.openid.loginWithOIDC({
      jwt: token.__raw,
      providerId: authConfig.magicProviderId,
    });
    const data = await magic.user.getInfo();

    setAddress(data.publicAddress);
    setIsConnected(true);
  };

  useEffect(() => {
    loginWithMagic();
  });

  const getBalance = async () => {
    const isLoggedIn = await magic.user.isLoggedIn();
    if (isLoggedIn) {
      const weiBalance = await provider.getBalance(address);
      const ethBalance = ethers.formatEther(weiBalance);
      setBalance(ethBalance);
    }
  };

  useEffect(() => {
    if (address) {
      getBalance();
    }
  });

  return (
    <div className="wallet-widget">
      <h2 className="wallet-title">Wallet</h2>
      <div>
        <h3>
          Status:{" "}
          {isConnected ? (
            <span className="connected">Connected</span>
          ) : (
            <span className="disconnected">Disconnected</span>
          )}
        </h3>
      </div>
      {!address || !balance ? (
        <PulseLoader
          cssOverride={{ margin: "60px" }}
          loading={!address || !balance}
          color="#6851ff"
        />
      ) : (
        <div>
          <div>
            <div className="info-container">
              <h4>Address</h4>
              <p>{address}</p>
            </div>
            <div className="info-container">
              <h4>Balance</h4>
              <p>{balance} ETH</p>
            </div>
            <div>
              <button className="small-button" onClick={getBalance}>
                Refresh
              </button>
              <a
                href="https://goerlifaucet.com/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="small-button">Get ETH</button>
              </a>
            </div>
          </div>
          <hr />
        </div>
      )}
    </div>
  );
};

export default MagicWidget;
