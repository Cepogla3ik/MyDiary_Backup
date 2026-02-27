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

export default function BlockEntry({ index, subject, time, info }: BlockParams) {
  
  return (
    <div className={styles["block-entry"]}>
      <IndexBlock index={index} />
      <SubjectBlock subject={subject} />
      <TimeBlock time={time} />
      <InfoBlock info={info} />
    </div>
  );
}