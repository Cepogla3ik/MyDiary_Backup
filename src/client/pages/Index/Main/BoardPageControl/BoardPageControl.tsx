import { setBoardPagesState } from "@client/store/slices";
import styles from "./BoardPageControl.module.scss";
import PageControlButton from "@shared/HTMLElements/PageControlButton/PageControlButton";
import { useDispatch } from "react-redux";

export default function BoardPageControl() {
  const dispatch = useDispatch();

  return (
    <div className={styles["board-page-control"]}>
      <PageControlButton onClick={() => dispatch(setBoardPagesState("page1"))} pageName={"Понеділок"} />
      <PageControlButton onClick={() => dispatch(setBoardPagesState("page2"))} pageName={"Вівторок"} />
      <PageControlButton onClick={() => dispatch(setBoardPagesState("page3"))} pageName={"Середа"} />
      <PageControlButton onClick={() => dispatch(setBoardPagesState("page4"))} pageName={"Четвер"} />
      <PageControlButton onClick={() => dispatch(setBoardPagesState("page5"))} pageName={"П'ятниця"} />
    </div>
  );
}