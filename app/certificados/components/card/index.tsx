import Image from "next/image";
import styles from "./card.module.scss";
import React from "react";

import Link from "next/link";

type CardProps = {
  image: string;
  alt: string;
  title: string;
  description: string;
  skills: string[];
  link: string;
};

function Card({ image, alt, title, description, skills, link }: CardProps) {
  return (
    <div className={styles.card}>
      <Image src={image} alt={alt} width={360} height={270} />

      <div className={styles.card__content}>
        <h3>{title}</h3>

        <p>{description}</p>

        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>

        <Link href={link} target="_blank" aria-label="Ir para certificado">
          Certificado
        </Link>
      </div>
    </div>
  );
}

export default Card;
