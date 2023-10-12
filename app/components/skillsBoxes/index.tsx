import React from "react";
import styles from "./sb.module.scss";
import SkillItem from "../skillItem";

type SkillContainerProps = {
  text: string;
  skills: { icon: JSX.Element; text: string }[];
};

function SkillContainer({ text, skills }: SkillContainerProps) {
  return (
    <div className={styles.container}>
      <span>{text}</span>
      <ul className={styles.container__list}>
        {skills.map((skill, index) => (
          <SkillItem
            key={index}
            icon={skill.icon}
            text={skill.text}
            index={index}
          />
        ))}
      </ul>
    </div>
  );
}

export default SkillContainer;
