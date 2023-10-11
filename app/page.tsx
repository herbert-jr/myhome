import Contacts from "./components/contacts";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Resume from "./components/resume";
import Skills from "./components/skills";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Resume />
      <Skills />
      <Projects />
      <Contacts />
    </main>
  );
}
