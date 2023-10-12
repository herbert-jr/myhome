"use client";

import Link from "next/link";
import styles from "./hero.module.scss";
import React from "react";
import { FiGithub, FiLinkedin, FiPaperclip } from "react-icons/fi";
import { motion } from "framer-motion";

function Hero() {
  const variants = {
    initial: {
      opacity: 0,
      x: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      x: 0,

      transition: {
        duration: 0.8,
        delay: index * 0.2,
      },
    }),
  };
  return (
    <section className={styles.hero}>
      <motion.p
        initial="initial"
        animate="animate"
        variants={variants}
        custom={0}
      >
        Descubra o meu mundo!
      </motion.p>
      <motion.h1
        initial="initial"
        animate="animate"
        variants={variants}
        custom={1}
      >
        Desenvolvedor Front-end
        <motion.span
          initial="initial"
          animate="animate"
          variants={variants}
          custom={9}
        >
          .
        </motion.span>
      </motion.h1>
      <motion.p
        initial="initial"
        animate="animate"
        variants={variants}
        custom={2}
      >
        Sou um desenvolvedor front-end especializado na criação de aplicações
        com foco no React.
      </motion.p>

      <motion.div
        initial="initial"
        animate="animate"
        variants={variants}
        custom={3}
        className={styles.hero__icons}
      >
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
      </motion.div>
      <Link href="#resume" title="Ir para resumo">
        <span className={styles.arrow}></span>
      </Link>
    </section>
  );
}

export default Hero;
