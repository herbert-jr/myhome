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
  loading?: "lazy" | "eager" | undefined;
};

function Card({
  title,
  description,
  image,
  linkCode,
  linkDemo,
  tags,
  loading,
}: CardProps) {
  return (
    <div className={styles.card}>
      <Image
        src={image}
        alt={title}
        width={720}
        height={340}
        loading={loading}
      />
      <div className={styles.card__content}>
        <h3>{title}</h3>
        <p>{description}</p>
        <ul>
          {tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
        <div className={styles.card__content__links}>
          <Link href={linkCode} target="_blank" rel="noreferrer">
            Código
          </Link>
          <Link href={linkDemo} target="_blank" rel="noreferrer">
            Demo
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
