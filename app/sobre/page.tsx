import React from "react";
import styles from "./page.module.scss";
import Hero from "./components/hero";
import Details from "./components/details";
import Buttons from "../components/pageBtn";

function Sobre() {
  return (
    <main className={styles.main}>
      <Hero />
      <Details />
      <Buttons next={{ href: "/projetos", label: "Projetos" }} />
    </main>
  );
}

export default Sobre;
