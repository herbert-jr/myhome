import Image from "next/image";
import styles from "./card.module.scss";
import React from "react";
import Link from "next/link";

type CardProps = {
  title: string;
  description: string;
  image: string;
  linkCode: string;
  linkDemo: string;
  tags: string[];
};

function Card({
  title,
  description,
  image,
  linkCode,
  linkDemo,
  tags,
}: CardProps) {
  return (
    <div className={styles.card}>
      <Image src={image} alt={title} width={720} height={340} loading="lazy" />
      <div className={styles.card__content}>
        <h4>{title}</h4>
        <p>{description}</p>
        <ul>
          {tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
        <div className={styles.card__content__links}>
          <Link
            href={linkCode}
            target="_blank"
            rel="noreferrer"
            aria-label="Ir para código fonte do projeto"
          >
            Código
          </Link>
          <Link
            href={linkDemo}
            target="_blank"
            rel="noreferrer"
            aria-label="Ir para demo do projeto"
          >
            Demo
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
