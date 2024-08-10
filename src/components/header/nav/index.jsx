import styles from "./style.module.scss";
import { useState } from "react";
import Link from "./link/index";

export default function index() {
  const navItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <div className={styles.menu}>
      <div className={styles.body}>
        <div className={styles.nav}>
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {navItems.map((item, index) => {
            return <Link data={{ ...item, index }} />;
          })}
        </div>
      </div>
    </div>
  );
}
