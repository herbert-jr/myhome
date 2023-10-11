import React from "react";
import styles from "./projects.module.scss";
import Title from "../components/title";
import Card from "./components/card";
import Buttons from "../components/pageBtn";

function Projetos() {
  return (
    <main className={styles.main}>
      <Title title="Meus projetos pessoais." subtitle="Veja tudo que já fiz." />
      <div className={styles.projects}>
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
      <Buttons next={{ href: "/certificados", label: "Certificados" }} />
    </main>
  );
}

export default Projetos;
