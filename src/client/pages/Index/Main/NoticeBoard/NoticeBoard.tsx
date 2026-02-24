import styles from "./NoticeBoard.module.scss";
import NoticeBoardTitle from "./NoticeBoardTitle/NoticeBoardTitle";
import NoticeBoardContents from "./NoticeBoardContents/NoticeBoardContents";
import mainElementStyles from "../Main.module.scss";
import { useEffect, useState } from 'react';

export default function NoticeBoard() {
  const [count] = useState<number>(0);
  
  useEffect(() => {
    function handleResize() {
      const mainElement: null | HTMLElement = document.querySelector(`.${mainElementStyles.main}`);
      const noticeBoardElement: null | HTMLElement = document.querySelector(`.${styles["notice-board"]}`);
      if (mainElement && noticeBoardElement) {
        const mainElementHeight: number = mainElement.offsetHeight;
        const noticeBoardElementHeight: number = noticeBoardElement.offsetHeight;
        if ((mainElementHeight - noticeBoardElementHeight) / 2 > 0) {
          noticeBoardElement.style.top = `${(mainElementHeight - noticeBoardElementHeight) / 2}px`;
          console.log(noticeBoardElement.style.top);
        } else {
          noticeBoardElement.style.top = '20px';
          console.log(noticeBoardElement.style.top);
        }
      }
    }
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [count]);

  return (
    <div className={styles["notice-board"]}>
      <NoticeBoardTitle />
      <NoticeBoardContents />
    </div>
  );
}