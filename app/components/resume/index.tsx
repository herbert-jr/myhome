import styles from "./resume.module.scss";
import React from "react";
import SectionBtn from "../buttons/sectionBtn";
import Title from "../title";

function Resume() {
  return (
    <section className={styles.resume} id="resume">
      <Title subtitle="Como cheguei até aqui." title="Um pouco sobre mim." />
      <div className={styles.resume__content}>
        <p>
          Morador da terra do Cristo Redentor e do Pão de Açúcar, nascido no ano
          do Tetra e amante do voleibol. Prazer, sou Herbert Junior, mas pode me
          chamar só de Junior, se quiser.
        </p>
        <p>
          Em 2022, entrei no mundo da programação quando iniciei o curso de
          Desenvolvimento Web na Trybe. Lá, pude construir minha base para o
          desenvolvimento de aplicações web e hoje curso Análise e
          Desenvolvimento de Sistemas pela Faculdade Descomplica.
        </p>
        <p>
          Neste momento, estou ativamente em busca de uma oportunidade
          profissional que me permita continuar crescendo e aplicar os
          conhecimentos que adquiri até agora. Estou ansioso para fazer parte de
          uma equipe onde possa contribuir na resolução de desafios e me
          desenvolver ainda mais no mundo profissional.
        </p>
      </div>
      <SectionBtn href="/sobre" content="Ver Mais Sobre Mim" />
    </section>
  );
}

export default Resume;
