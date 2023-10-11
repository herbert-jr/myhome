import Link from "next/link";
import styles from "./hero.module.scss";
import React from "react";
import { FiGithub, FiLinkedin, FiPaperclip } from "react-icons/fi";

function Hero() {
  return (
    <section className={styles.hero}>
      <p>Descubra o meu mundo!</p>
      <h1>
        Desenvolvedor Front-end<span>.</span>
      </h1>
      <p>
        Sou um desenvolvedor front-end especializado na criação de aplicações
        com foco no React.
      </p>

      <div className={styles.hero__icons}>
        <Link
          href="https://github.com/herbert-jr"
          aria-label="Ir para github"
          target="_blank"
        >
          <FiGithub />
        </Link>
        <Link
          href="https://www.linkedin.com/in/herbert-marques-963136106/"
          aria-label="Ir para linkedin"
          target="_blank"
        >
          <FiLinkedin />
        </Link>
        <Link href="/" aria-label="Ir para curriculo" target="_blank">
          <FiPaperclip />
        </Link>
      </div>
      <Link href="#resume" title="Ir para resumo">
        <span className={styles.arrow}></span>
      </Link>
    </section>
  );
}

export default Hero;
