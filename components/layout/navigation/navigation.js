import Link from "next/link";
import styles from "./navigation.module.css";

function Navigation() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <h1>Meetup Next Project</h1>
          </li>
          <div className={styles.inline}>
            <li>
              <Link href="/">All Meetups</Link>
            </li>
            <li>
              <Link href="/new-meetup">Add New Meetup</Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
