'use client'
import Image from "next/image";
import styles from "../../page.module.css";
import Link from "next/link";
import { useWeb3 } from "../../../utils/web3";

export default function VephuxBoost() {
  const { connected, account, connectWallet, disconnectWallet } = useWeb3();

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Made by the community —&nbsp;
          <code className={styles.code}>for the community</code>
        </p>
      </div>

      <div className={styles.center}>
        <a href="https://phux.io" target="_blank" rel="noopener noreferrer">
          <Image
            className={styles.logo}
            src="/phux-logo.svg"
            alt="phux-logo"
            width={540}
            height={111}
            priority
          />
        </a>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>
            vePHUX Boost <span>-&gt;</span>
          </h2>
          <p>Calculate your vePHUX boost</p>
        </div>

        {connected ? (
          <div>
            <p>Connected: {account}</p>
            <button onClick={disconnectWallet}>Disconnect</button>
          </div>
        ) : (
          <button onClick={connectWallet}>Connect to MetaMask</button>
        )}

        <Link href="/" className={styles.card}>
          <h2>
            Go back to Home<span>-&gt;</span>
          </h2>
        </Link>
      </div>
    </main>
  );
}
