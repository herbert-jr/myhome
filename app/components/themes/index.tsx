"use client";
import { useApi } from "@/app/context/states";
import ThemeCard from "../themeCard";
import styles from "./themes.module.scss";
import React from "react";

function Themes() {
  const { handleClickSetTheme, openThemes, actualTheme } = useApi();
  const themes = [
    "default",
    "dark",
    "beach",
    "choco",
    "pastel",
    "bowser",
    "pink",
    "dune",
    "florest",
  ];
  const findTheme = themes.find((theme) => theme === actualTheme);
  const open = openThemes ? styles.open : "";
  return (
    <div className={`${styles.themes} ${open}`}>
      {themes.map((theme) => (
        <ThemeCard
          key={theme}
          name={theme}
          onClick={() => handleClickSetTheme(theme)}
          activeTheme={findTheme!}
        />
      ))}
    </div>
  );
}

export default Themes;
