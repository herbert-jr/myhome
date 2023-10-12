"use client";

import Image from "next/image";
import styles from "./card.module.scss";
import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

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
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      className={styles.card}
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
      <Image src={image} alt={title} width={720} height={340} loading="lazy" />
      <div className={styles.card__content}>
        <h3>{title}</h3>
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
    </motion.div>
  );
}

export default Card;
