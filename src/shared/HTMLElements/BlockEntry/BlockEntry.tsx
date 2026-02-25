import styles from "./BlockEntry.module.scss";
import IndexBlock from "./IndexBlock/IndexBlock";
import InfoBlock from "./InfoBlock/InfoBlock";
import SubjectBlock from "./SubjectBlock/SubjectBlock";
import TimeBlock from "./TimeBlock/TimeBlock";

export type TimeString = `${number}:${number}`;
export type InfoString = string | number;

interface BlockParams {
  index?: number;
  subject?: string;
  time?: TimeString;
  info?: InfoString;
}

export default function BlockEntry({ index = 0, subject = 'Subject', time = '00:00', info = 124 }: BlockParams) {
  
  return (
    <div className={styles["block-entry"]}>
      <IndexBlock index={index} />
      <SubjectBlock subject={subject} />
      <TimeBlock time={time} />
      <InfoBlock info={info} />
    </div>
  );
}