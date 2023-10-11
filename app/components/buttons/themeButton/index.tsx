import React from "react";
import styles from "./btn.module.scss";
import { FaPaintRoller } from "react-icons/fa6";
import { useApi } from "@/app/context/states";

function ThemeButton() {
  const { handleClickOpenThemes } = useApi();
  return (
    <button
      className={styles.container}
      onClick={handleClickOpenThemes}
      aria-label="Abrir temas"
    >
      <FaPaintRoller />
    </button>
  );
}

export default ThemeButton;
