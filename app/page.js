import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Made by the community —&nbsp;
          <code className={styles.code}>for the community</code>
        </p>
        <div>
          <a
            href="/pages/vephux-boost"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{""}
            <Image
              src="/water.svg"
              alt="water"
              className={styles.vercelLogo}
              width={75}
              height={18}
              priority
            />
          </a>
        </div>
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
        <Link href="pages/vephux-boost" className={styles.card}>
          <h2>
            vePHUX Boost <span>-&gt;</span>
          </h2>
          <p>Calculate your vePHUX boost</p>
        </Link>

        <Link href="pages/vote-escrow" className={styles.card}>
          <h2>
            Vote Escrow <span>-&gt;</span>
          </h2>
          <p>Visualize vote strength</p>
        </Link>

        <Link href="pages/impermanent-loss" className={styles.card}>
          <h2>
            Impermanent Loss<span>-&gt;</span>
          </h2>
          <p>Estimate your impermanent loss</p>
        </Link>

        <Link href="pages/inflation-schedule" className={styles.card}>
          <h2>
            Inflation Schedule<span>-&gt;</span>
          </h2>
          <p>Track the PHUX in circulation</p>
        </Link>
      </div>
    </main>
  );
}
