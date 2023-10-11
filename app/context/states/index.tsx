"use client";

import React, { useContext, useEffect, useState, createContext } from "react";

const StatesContext = createContext<StatesContextType>({} as StatesContextType);

type StatesContextType = {
  actualTheme: string;
  openMenu: boolean;
  openThemes: boolean;
  handleClickSetTheme: (selectedTheme: string) => void;
  handleClickOpenMenu: () => void;
  handleClickOpenThemes: () => void;
  setOpenMenu: (openMenu: boolean) => void;
};

export const StatesProvider = ({ children }: { children: React.ReactNode }) => {
  const [actualTheme, setActualTheme] = useState("default");
  const [openMenu, setOpenMenu] = useState(false);
  const [openThemes, setOpenModal] = useState(false);

  const handleClickSetTheme = (selectedTheme: string) => {
    setActualTheme(selectedTheme);
    localStorage.setItem("theme", selectedTheme);
  };

  const handleClickOpenMenu = () => {
    setOpenMenu(!openMenu);
    if (openThemes) {
      setOpenModal(false);
    }
  };

  const handleClickOpenThemes = () => {
    setOpenModal(!openThemes);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme && storedTheme !== "light") {
      setActualTheme(storedTheme!);
    }
    const root = document.getElementsByTagName("html")[0];
    root.className = actualTheme;
  }, [actualTheme]);

  return (
    <StatesContext.Provider
      value={{
        actualTheme,
        openMenu,
        openThemes,
        handleClickSetTheme,
        handleClickOpenMenu,
        handleClickOpenThemes,
        setOpenMenu,
      }}
    >
      {children}
    </StatesContext.Provider>
  );
};

export const useApi = () => useContext(StatesContext);
