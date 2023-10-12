import styles from "./contacts.module.scss";
import React from "react";

import Title from "../title";
import Form from "../formulario";

function Contacts() {
  return (
    <section className={styles.contacts} id="contatos">
      <Title subtitle="Que tal um alô?" title="Entre em contato." />

      <Form />
    </section>
  );
}

export default Contacts;
