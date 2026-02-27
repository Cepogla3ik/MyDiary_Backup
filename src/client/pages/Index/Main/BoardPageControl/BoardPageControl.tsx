import styles from "./BoardPageControl.module.scss";
import PageControlButton from "@shared/HTMLElements/PageControlButton/PageControlButton";

export default function BoardPageControl() {
  
  return (
    <div className={styles["board-page-control"]}>
      <PageControlButton page={"Понеділок"} />
      <PageControlButton page={"Вівторок"} />
      <PageControlButton page={"Середа"} />
      <PageControlButton page={"Четвер"} />
      <PageControlButton page={"П'ятниця"} />
    </div>
  );
}