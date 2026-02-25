import styles from "./NoticeBoardContents.module.scss";
import BlockEntry from "@shared/HTMLElements/BlockEntry/BlockEntry";

export default function NoticeBoardContents() {
  
  return (
    <div className={styles["notice-board-contents"]}>
      <BlockEntry index={1} subject={'Maths'} />
      <BlockEntry index={2} subject={'English'} />
      <BlockEntry />
    </div>
  );
}