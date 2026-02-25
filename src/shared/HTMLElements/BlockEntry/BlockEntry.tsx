import styles from "./BlockEntry.module.scss";
import IndexBlock from "./IndexBlock/IndexBlock";
import SubjectBlock from "./SubjectBlock/SubjectBlock";

interface BlockParams {
  index?: number;
  subject?: string;
}

export default function BlockEntry({ index = 0, subject = 'Subject' }: BlockParams) {
  
  return (
    <div className={styles["block-entry"]}>
      <IndexBlock index={index} />
      <SubjectBlock subject={subject} />
    </div>
  );
}