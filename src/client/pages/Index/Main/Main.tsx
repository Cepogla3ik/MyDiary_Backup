import styles from "./Main.module.scss";
import NoticeBoard from "./NoticeBoard/NoticeBoard";

export default function Main() {
  
  return (
    <main className={styles.main}>
      <NoticeBoard />
    </main>
  );
}