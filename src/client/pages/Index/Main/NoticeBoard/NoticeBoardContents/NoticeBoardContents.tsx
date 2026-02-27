import styles from "./NoticeBoardContents.module.scss";
import BlockEntry from "@shared/HTMLElements/BlockEntry/BlockEntry";

export default function NoticeBoardContents() {
  
  return (
    <div className={styles["notice-board-contents"]}>
      <BlockEntry index={1} subject={'Математика'} time={'08:00'} info={204} />
      <BlockEntry index={2} subject={'Хімія'} time={'08:55'} info={206} />
      <BlockEntry index={3} subject={'Українська мова'} time={'09:50'} info={203} />
      <BlockEntry index={4} subject={'Зарубіжна література'} time={'10:45'} info={202} />
      <BlockEntry index={5} subject={'Фізика'} time={'11:40'} info={205} />
      <BlockEntry index={6} subject={'Англійська мова'} time={'12:35'} info={204} />
      <BlockEntry index={7} subject={'Фізкультура'} time={'13:30'} info={104} />
    </div>
  );
}