import styles from "./Styles/page.module.scss";
import Card from "./Components/Card/Card";

export default function Home() {
  return (
    <main className={styles.main}>
      <Card />
    </main>
  );
}
