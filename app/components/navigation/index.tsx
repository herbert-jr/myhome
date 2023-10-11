"use client";

import Link from "next/link";
import Hamburger from "../buttons/navButton";
import ThemeButton from "../buttons/themeButton";
import styles from "./navigation.module.scss";
import React from "react";
import Image from "next/image";
import { useApi } from "@/app/context/states";

function Navigation() {
  const { openMenu, setOpenMenu } = useApi();
  const isOpen = openMenu
    ? `${styles.navigation__list} ${styles.open}`
    : styles.navigation__list;
  return (
    <nav className={styles.navigation}>
      <Link
        href={"/"}
        aria-label="JR"
        title="Ir para página principal"
        className={styles.navigation__logo}
      >
        <Image
          src="/perfil.png"
          alt="Foto de perfil"
          width={48}
          height={48}
          loading="eager"
          priority={true}
        />
        <span>JR</span>
        <Image
          src="/verificado.png"
          alt="verificado"
          width={18}
          height={18}
          priority={true}
        />
      </Link>

      <div className={styles.navigation__links}>
        <ThemeButton />
        <Hamburger />

        <ul className={isOpen}>
          <li
            className={styles.navigation__item}
            onClick={() => setOpenMenu(false)}
          >
            <Link href={"/sobre"}>
              <span>01</span> Sobre mim
            </Link>
          </li>
          <li
            className={styles.navigation__item}
            onClick={() => setOpenMenu(false)}
          >
            <Link href={"/projetos"}>
              <span>02</span> Projetos
            </Link>
          </li>
          <li
            className={styles.navigation__item}
            onClick={() => setOpenMenu(false)}
          >
            <Link href={"/certificados"}>
              <span>03</span> Certificados
            </Link>
          </li>
          <li
            className={styles.navigation__item}
            onClick={() => setOpenMenu(false)}
          >
            <Link href={"/#contatos"}>
              <span>04</span> Contatos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
