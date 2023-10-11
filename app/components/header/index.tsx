import Navigation from "../navigation";
import Themes from "../themes";
import styles from "./header.module.scss";
import React from "react";

function Header() {
  return (
    <header className={styles.header}>
      <Themes />
      <Navigation />
    </header>
  );
}

export default Header;
