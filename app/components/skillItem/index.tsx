import React from "react";
import styles from "./si.module.scss";
type SkillItemProps = {
  icon: React.ReactNode;
  text: string;
};
function SkillItem({ icon, text }: SkillItemProps) {
  return (
    <li className={styles.item}>
      {icon}
      <span>{text}</span>
    </li>
  );
}

export default SkillItem;
