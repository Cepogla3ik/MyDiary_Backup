import styles from "./NoticeBoard.module.scss";
import NoticeBoardTitle from "./NoticeBoardTitle/NoticeBoardTitle";

export default function NoticeBoard() {

  return (
    <div className={styles["notice-board"]}>
      <NoticeBoardTitle />
    </div>
  );
}