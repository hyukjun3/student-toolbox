"use client";

import styles from "./style.module.scss";
import { useState } from "react";
import Nav from "./nav/index";

export default function index() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <button
        className={styles.button}
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <div
          className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}
        ></div>
      </button>
      <Nav />
    </>
  );
}
