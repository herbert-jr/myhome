import React from "react";
import styles from "./page.module.scss";
import Title from "../components/title";
import Card from "./components/card";
import Buttons from "../components/pageBtn";

function Certificados() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <Title subtitle="Certificados." title="Conheça minhas qualificações." />
        <Card
          skills={["HTML", "CSS", "Bootstrap", "JavaScript", "UX/UI & Design"]}
          alt="Certificado de Frontend Basico"
          description=" Módulo conquistado por completar as diciplinas de Frontend básico,
            da faculdade Descomplica. Ele aborda os seguintes temas:"
          title="Basic Frontend - Faculdade Descomplica"
          image="/basicFrontend.png"
          link="https://certificados.descomplica.com.br/graduacao/e1cf63769b72f580da4eff0cc4841601669a612475f082d580c93d703ed7bfce"
        />
        <Card
          alt="Certificado de Fundamentos"
          description=" Módulo conquistado por completar o módulo de Fundamentos, da Trybe. Ele aborda os seguintes temas:"
          image="/fundamentos.png"
          link="https://pdf.credential.net/loog9h7r_1696244103439.pdf"
          skills={[
            "Git",
            "GitHub",
            "HTML",
            "CSS",
            "JavaScript",
            "ES6",
            "DOM",
            "Testes Unitários",
            "Testes Assíncronos",
            "Jest",
          ]}
          title="Fundamentos - Trybe"
        />

        <Card
          alt="Certificado de Frontend"
          description=" Módulo conquistado por completar o módulo de Frontend, da Trybe. Ele aborda os seguintes temas:"
          image="/front.png"
          link="https://pdf.credential.net/mbk9mc6x_1696244103439.pdf"
          skills={[
            "React",
            "Redux",
            "Context API",
            "Hooks",
            "RTL",
            "Jest",
            "Ciclo de Vida",
            "Router",
          ]}
          title="Frontend - Trybe"
        />
        <Card
          alt="Certificado de BackEnd"
          description=" Módulo conquistado por completar o módulo de BackEnd, da Trybe. Ele aborda os seguintes temas:"
          image="/back.png"
          link="https://pdf.credential.net/tu2yq7uk_1696244103439.pdf"
          title="BackEnd - Trybe"
          skills={[
            "Docker",
            "MySQL",
            "NodeJS",
            "Express",
            "JWT",
            "Autenticação",
            "ORM",
            "Sequelize",
            "Arquitetura de Software",
            "SOLID",
            "TDD",
            "Testes de Integração",
            "TypeScript",
          ]}
        />
        <Card
          alt="Certificado de Ciência da Computação"
          description=" Módulo conquistado por completar o módulo de Ciência da Computação, da Trybe. Ele aborda os seguintes temas:"
          image="/ciencia.png"
          link="https://pdf.credential.net/y4n2xr2i_1696349766419.pdf"
          title="Ciência da Computação - Trybe"
          skills={[
            "Complexidade de Algoritimos",
            "Algoritmos de Ordenação e Busca",
            "Recursividade & Estratégias para Resolução de Problemas",
            "Estruturas de Dados",
            "OPP",
            "Python",
          ]}
        />
      </section>
      <Buttons />
    </main>
  );
}

export default Certificados;
