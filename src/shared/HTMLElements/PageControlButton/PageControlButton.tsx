import styles from "./PageControlButton.module.scss";
import { useEffect } from "react";

export default function PageControlButton({ page }) {
  
  return (
    <button className={styles["page-control-button"]}>{page}</button>
  );
}