import Image from "next/image";
import styles from "./hero.module.scss";
import React from "react";

function Hero() {
  return (
    <section className={styles.hero}>
      <Image
        src="/perfil.png"
        width={350}
        height={350}
        alt="Herbert Junior"
        loading="eager"
      />
      <article className={styles.hero__content}>
        <h1>Olá, Herbert Junior aqui 🙂</h1>
        <p>
          Esse é o espaço onde você vai poder me conhecer melhor, saber um pouco
          sobre a minha história, experiência e ver todas as linguagens e
          tecnologias que eu já estudei.
        </p>
      </article>
    </section>
  );
}

export default Hero;
