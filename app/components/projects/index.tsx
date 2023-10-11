import SectionBtn from "../buttons/sectionBtn";
import Card from "../cardProject";
import Title from "../title";
import styles from "./projects.module.scss";
import React from "react";

function Projects() {
  return (
    <section className={styles.projects}>
      <Title subtitle="Alguns projetos pessoais." title="Meus projetos." />
      <div className={styles.projects__content}>
        <Card
          title="Meu portfólio"
          image="/portfolio.png"
          description="Essa é a primeira versão do meu portfólio, feito com NextJS,
          Typescript e Sass."
          linkCode="/"
          linkDemo="/"
          tags={["React", "NextJs", "TypeScript", "Sass", "Frame Motion"]}
        />
        <Card
          title="Meu portfólio"
          image="/portfolio.png"
          description="Essa é a primeira versão do meu portfólio, feito com NextJS,
          Typescript e Sass."
          linkCode="/"
          linkDemo="/"
          tags={["React", "NextJs", "TypeScript", "Sass", "Frame Motion"]}
        />
        <Card
          title="Meu portfólio"
          image="/portfolio.png"
          description="Essa é a primeira versão do meu portfólio, feito com NextJS,
          Typescript e Sass."
          linkCode="/"
          linkDemo="/"
          tags={["React", "NextJs", "TypeScript", "Sass", "Frame Motion"]}
        />
      </div>
      <SectionBtn
        arial="Ir para pagina de projetos"
        content="Projetos"
        href="/projetos"
      />
    </section>
  );
}

export default Projects;
