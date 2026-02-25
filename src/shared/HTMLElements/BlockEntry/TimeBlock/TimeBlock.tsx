import styles from "./TimeBlock.module.scss";
import { type TimeString } from "@shared/HTMLElements/BlockEntry/BlockEntry";

export default function TimeBlock({ time }: { time?: TimeString }) {
  
  return (
    <div className={styles["time-block"]}>
      <p>{time}</p>
    </div>
  );
}