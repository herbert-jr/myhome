import {
  FaAngular,
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaJava,
  FaJs,
  FaReact,
  FaSass,
  FaVuejs,
} from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss, SiStyledcomponents } from "react-icons/si";
import styles from "./skills.module.scss";
import React from "react";
import SkillContainer from "../skillsBoxes";
import Title from "../title";

function Skills() {
  const knowSkills = [
    { icon: <FaHtml5 />, text: "HTML" },
    { icon: <FaCss3 />, text: "CSS" },
    { icon: <FaSass />, text: "SASS" },
    { icon: <FaReact />, text: "React" },
    { icon: <FaJs />, text: "JavaScript" },
    { icon: <BiLogoTypescript />, text: "TypeScript" },
    { icon: <FaBootstrap />, text: "Bootstrap" },
    { icon: <TbBrandNextjs />, text: "NextJS" },
  ];

  const learning = [
    { icon: <FaJava />, text: "Java" },
    { icon: <FaAngular />, text: "Angular" },
    { icon: <FaVuejs />, text: "Vue" },
    { icon: <SiTailwindcss />, text: "Tailwind" },
    { icon: <SiStyledcomponents />, text: "Styled Components" },
  ];
  return (
    <section className={styles.skills} id="skills">
      <Title subtitle="O que consigo fazer." title="Minhas habilidades." />

      <div className={styles.skills__content}>
        <SkillContainer skills={knowSkills} text="Conhecimentos:" />
        <SkillContainer skills={learning} text="Aprendendo:" />
      </div>
    </section>
  );
}

export default Skills;
