import Link from "next/link";
import styles from "./btn.module.scss";
import React from "react";

type SectionBtnProps = {
  arial: string;
  href: string;
  content: string;
};

function SectionBtn({ arial, href, content }: SectionBtnProps) {
  return (
    <div className={styles.container}>
      <Link href={href} aria-label={arial}>
        {content}
      </Link>
    </div>
  );
}

export default SectionBtn;
