// import { useAppSelector } from "@client/store/store";
import styles from "./Header.module.scss";

export default function Header() {
  
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>My Diary</h1>
    </header>
  );
}