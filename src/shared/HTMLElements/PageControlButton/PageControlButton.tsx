import styles from "./PageControlButton.module.scss";
// import { useEffect } from "react";

export default function PageControlButton({ pageName, onClick }: { pageName: string, onClick: () => void }) {
  
  return (
    <button className={styles["page-control-button"]} onClick={onClick}>{pageName}</button>
  );
}