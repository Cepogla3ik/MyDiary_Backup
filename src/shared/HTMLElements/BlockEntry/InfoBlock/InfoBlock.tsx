import styles from "./InfoBlock.module.scss";
import { type InfoString } from "@shared/HTMLElements/BlockEntry/BlockEntry";

export default function InfoBlock({ info }: { info?: InfoString }) {
  
  return (
    <div className={styles["info-block"]}>
      <p>{info}</p>
    </div>
  );
}