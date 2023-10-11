import Link from "next/link";
import styles from "./btn.module.scss";
import React from "react";

type linkProps = {
  href: string;
  label: string;
};

type ButtonsProps = {
  next?: linkProps;
};

function Buttons({ next }: ButtonsProps) {
  return (
    <div className={styles.btns}>
      <Link href={"/"} className={styles.btns__home}>
        ⟵ Home
      </Link>
      {next && (
        <Link href={next.href} className={styles.btns__next}>
          {next.label} ⟶
        </Link>
      )}
    </div>
  );
}

export default Buttons;
