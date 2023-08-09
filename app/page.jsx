import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h3>App Ideas</h3>
      <p>Find your next <Link href="/ideas"> App Idea </Link> right here</p>
    </main>
  );
}
