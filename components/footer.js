import React from "react";
import styles from "../styles/footer.module.css";
import Image from "next/image";

const footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles.items}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="">
              <Image
                src="/blklogo.png"
                alt="Dark Logo"
                width={100}
                height={100}
              />
            </span>
          </a>
        </div>
        <div className={styles.items}>
          <h1 className={styles.title}>Hours:</h1>
          <h1 className={styles.content}>Monday closed</h1>
        </div>
        <div className={styles.items}>
          <h1 className={styles.title}>Our Home</h1>
          <h1 className={styles.content}>5000 Burnet Rd, Austin, TX 78756</h1>
        </div>
        <div className={styles.items}>
          <h1 className={styles.title}>Connect</h1>
          <h1 className={styles.content}>
            follow our journey on social channels
          </h1>
        </div>
        <div className={styles.items}>
          <h1 className={styles.title}>Nowhere to go but up</h1>
          <h1 className={styles.content}>Privacy</h1>
        </div>
      </footer>
    </div>
  );
};

export default footer;
