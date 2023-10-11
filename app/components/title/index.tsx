import styles from "./title.module.scss";
import React from "react";

type TitleProps = {
  subtitle: string;
  title: string;
};

function Title({ subtitle, title }: TitleProps) {
  return (
    <div className={styles.container}>
      <span>{subtitle}</span>
      <h2>{title}</h2>
    </div>
  );
}

export default Title;
