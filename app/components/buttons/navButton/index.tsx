import React from "react";
import styles from "./btn.module.scss";
import { useApi } from "@/app/context/states";

function Hamburger() {
  const { openMenu, handleClickOpenMenu } = useApi();
  const classBtn = openMenu
    ? `${styles.container} ${styles.open}`
    : styles.container;
  return (
    <button
      className={classBtn}
      onClick={handleClickOpenMenu}
      aria-label="Abrir menu"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}

export default Hamburger;
