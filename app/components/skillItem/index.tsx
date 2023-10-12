"use client";

import React from "react";
import styles from "./si.module.scss";
import { motion } from "framer-motion";

type SkillItemProps = {
  icon: React.ReactNode;
  text: string;
  index: number;
};

const variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.05,
    },
  }),
};
function SkillItem({ icon, text, index }: SkillItemProps) {
  return (
    <motion.li
      className={styles.item}
      variants={variants}
      initial="initial"
      whileInView="animate"
      custom={index}
      viewport={{ once: true }}
    >
      {icon}
      <span>{text}</span>
    </motion.li>
  );
}

export default SkillItem;
