import styles from "./NoticeBoardContents.module.scss";
import BlockEntry from "@shared/HTMLElements/BlockEntry/BlockEntry";

export default function NoticeBoardContents() {
  
  return (
    <div className={styles["notice-board-contents"]}>
      <BlockEntry index={1} subject={'Maths'} time={'09:00'} info={248} />
      <BlockEntry index={2} subject={'English'} time={'10:20'} info={369} />
      <BlockEntry />
    </div>
  );
}