"use client";

import Link from "next/link";
import styles from "./form.module.scss";
import React from "react";
import emailjs from "@emailjs/browser";

function Form() {
  const [dataForm, setDataForm] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      dataForm.name === "" ||
      dataForm.email === "" ||
      dataForm.message === ""
    ) {
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: dataForm.name,
      email: dataForm.email,
      message: dataForm.message,
    };

    emailjs
      .send(
        "service_b61szqe",
        "template_jyz3v6u",
        templateParams,
        "3b70WthKfYyr75Bs9"
      )
      .then((response) => {
        alert("Mensagem enviada com sucesso!");
        setDataForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        alert("Ocorreu um erro ao enviar a mensagem");
      });
  };
  return (
    <article className={styles.container}>
      <form action="submit" className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.form__group}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={dataForm.name}
          />
        </div>
        <div className={styles.form__group}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value={dataForm.email}
          />
        </div>
        <div className={styles.form__group}>
          <label htmlFor="message">Mensagem</label>
          <textarea
            name="message"
            id="message"
            onChange={handleChange}
            value={dataForm.message}
          />
        </div>
        <div className={styles.form__group__social}>
          <button>Enviar</button>
          <Link
            href="https://www.linkedin.com/in/herbert-marques-963136106/"
            target="_blank"
          >
            LinkedIn
          </Link>
          <Link href="https://github.com/herbert-jr" target="_blank">
            GitHub
          </Link>
        </div>
      </form>
    </article>
  );
}

export default Form;
