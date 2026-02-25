import styles from "./SubjectBlock.module.scss";

export default function SubjectBlock({ subject }: { subject?: string }) {
  
  return (
    <div className={styles["subject-block"]}>
      <p>{subject}</p>
    </div>
  );
}