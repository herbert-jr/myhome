import Link from "next/link";
import styles from "./btn.module.scss";
import React from "react";

type SectionBtnProps = {
  href: string;
  content: string;
};

function SectionBtn({ href, content }: SectionBtnProps) {
  return (
    <div className={styles.container}>
      <Link href={href}>{content}</Link>
    </div>
  );
}

export default SectionBtn;
