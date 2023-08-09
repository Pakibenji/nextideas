import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header>
      <nav className={styles.nav}>
        <div>
          <Link href="/">Home</Link>
        </div>
        <div>
          <Link href="/ideas" className={styles.lnk}>
            Ideas
          </Link>
          <Link href="/newidea" className={styles.lnk}>New Idea</Link>
          <Link href="/register" className={styles.lnk}>
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
}
