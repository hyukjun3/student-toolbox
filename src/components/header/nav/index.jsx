import styles from "./style.module.scss";
import { useState } from "react";

export default function index() {
  const navItems = [{ titles: "Home", href: "/" }];

  return (
    <div className={styles.menu}>
      <div className={styles.body}>
        <div className={styles.nav}>
          <div className={styles.header}>
            <p>Navigation</p>
            {navItems.map((item, index) => {})}
          </div>
        </div>
      </div>
    </div>
  );
}
