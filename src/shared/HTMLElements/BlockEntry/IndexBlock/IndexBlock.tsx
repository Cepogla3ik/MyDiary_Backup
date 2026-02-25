import styles from "./IndexBlock.module.scss";

export default function IndexBlock({ index }: { index?: number }) {
  return (
    <div className={styles["index-block"]}>
      <b>{index}</b>
    </div>
  );
}