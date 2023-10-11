import styles from "./card.module.scss";
import React from "react";

type ThemeCardProps = {
  name: string;
  onClick: () => void;
  activeTheme: string;
};

type ThemesName = {
  [key: string]: string;
};

const themesName: ThemesName = {
  default: "Clássico",
  dark: "Noturno",
  beach: "Praia",
  choco: "Chocolate",
  pastel: "Pastel",
  bowser: "Galáctico",
  pink: "Barbie",
  dune: "Duna",
  florest: "Floresta",
};

function ThemeCard({ name, onClick, activeTheme }: ThemeCardProps) {
  const active = activeTheme === name ? styles.active : "";
  return (
    <button
      className={`${styles.card} ${styles[name]} ${active}`}
      onClick={onClick}
      aria-label={`Escolher tema ${themesName[name]}`}
    >
      <span className={styles.card__name}>{themesName[name]}</span>
      <div className={styles.card__colorsContainer}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
  );
}

export default ThemeCard;
