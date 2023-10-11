"use client";

import styles from "./details.module.scss";
import React, { useState } from "react";

type Open = {
  [key: string]: boolean;
};
function Details() {
  const [open, setOpen] = useState<Open>({
    historia: false,
    experiencia: false,
    habilidades: false,
  });

  const handleOpen = (key: string) => {
    setOpen((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <section className={styles.container}>
      <details
        className={styles.details}
        onClick={() => handleOpen("historia")}
      >
        <summary
          className={
            open["historia"]
              ? `${styles.summary} ${styles.open}`
              : styles.summary
          }
        >
          Minha história
        </summary>
        <div className={styles.summary__content}>
          <p>
            O meu primeiro contato com a programação foi em 2022, quando eu
            comecei a estudar Desenvolvimento Web pela Trybe e entender como
            funciona o desenvolvimento de software e descobri onde eu iria me
            encaixar.
          </p>
          <p>
            Desde então, eu tenho estudado e praticado para me tornar um
            desenvolvedor Front-end, com foco em React e seus ecossistemas. Mas
            também sei a importância de conhecer o Back-end e por isso estou
            estudando em paralelo a construção de APIs e banco de dados.
          </p>

          <p>
            Em 2023, decidi entrar de cabeça no mundo da programação e iniciei a
            minha graduação em Análise e Desenvolvimento de Sistemas na
            Faculdade Descomplica. Com isso, eu tenho me dedicado a aprofundar
            os meus conhecimentos e aprimorar as minhas habilidades.
          </p>

          <p>
            Mas existe vida fora da programação e eu gosto de aproveitar o meu
            tempo livre para assistir filmes e séries, jogar uma partida de
            volei, sair com os amigos, viajar e quem sabe fazer algumas tattoos.
          </p>

          <p>
            Muito obrigado por ter lido até aqui e saiba que neste momento eu
            estou pronto para encarar novos desafios e agarrar as oportunidades
            que surgirem.
          </p>
        </div>
      </details>
      <details
        className={styles.details}
        onClick={() => handleOpen("experiencia")}
      >
        <summary
          className={
            open["experiencia"]
              ? `${styles.summary} ${styles.open}`
              : styles.summary
          }
        >
          Experiência
        </summary>
        <div className={styles.summary__content}>
          <p>
            Hoje estou em busca da minha primeira oportunidade como
            desenvolvedor Front-end, atualmente estou estudando e praticando
            tudo que sei em projetos pessoais.
          </p>
          <p>
            Mas fora da programação, eu já trabalhei como corretor de imóveis e
            como professor de matemática. E essas experiências me ensinaram a
            importância de saber se comunicar e trabalhar em equipe, além de
            desenvolver a minha capacidade de resolver problemas.
          </p>
        </div>
      </details>
      <details
        className={styles.details}
        onClick={() => handleOpen("habilidades")}
      >
        <summary
          className={
            open["habilidades"]
              ? `${styles.summary} ${styles.open}`
              : styles.summary
          }
        >
          Habilidades
        </summary>
        <div className={styles.summary__content}>
          <div className={styles.summary__content__list}>
            <span>Tecnologias que tenho mais afinidade:</span>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>TypeScript</li>
              <li>Git</li>
              <li>Sass</li>
              <li>Redux</li>
              <li>Bootstrap</li>
              <li>Jest</li>
              <li>React Testing Library</li>
              <li>Node.js</li>
              <li>NextJs</li>
            </ul>
          </div>
          <div className={styles.summary__content__list}>
            <span>Tecnologias que tenho conhecimentos básicos:</span>
            <ul>
              <li>MySQL</li>
              <li>Python</li>
              <li>Java</li>
              <li>Express.js</li>
              <li>Docker</li>
              <li>Mocha</li>
            </ul>
          </div>
          <div className={styles.summary__content__list}>
            <span>Tecnolgias que estou estudando:</span>
            <ul>
              <li>Vue</li>
              <li>Angular</li>
              <li>Next.js{" avançado"}</li>
              <li>React Native</li>
              <li>Java{" avançado"}</li>
            </ul>
          </div>
          <div className={styles.summary__content__list}>
            <span>Soft Skills:</span>
            <ul>
              <li>Comunicação</li>
              <li>Trabalho em equipe</li>
              <li>Resolução de problemas</li>
              <li>Metodologias ágeis</li>
            </ul>
          </div>
        </div>
      </details>
    </section>
  );
}

export default Details;
