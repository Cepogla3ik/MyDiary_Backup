import styles from "./Main.module.scss";
import NoticeBoard from "./NoticeBoard/NoticeBoard";
import noticeBoardStyles from "./NoticeBoard/NoticeBoard.module.scss";
import { useEffect, useState } from 'react';

export default function Main() {
  const [count] = useState<number>(0);

  useEffect(() => {
    function handleResize() {
      const noticeBoardElement: HTMLElement | null = document.querySelector(`.${noticeBoardStyles["notice-board"]}`);
        if (noticeBoardElement) {
          const noticeBoardElementWidth = noticeBoardElement.offsetWidth;
          const mainElement: HTMLElement | null = document.querySelector(`.${styles.main}`);
          if (mainElement) {
            const mainElementWidth = mainElement.offsetWidth;
            if (mainElementWidth - noticeBoardElementWidth > 0) {
              mainElement.style.paddingInline = `${(mainElementWidth - noticeBoardElementWidth) / 2}px`;
            }
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
    <main className={styles.main}>
      <NoticeBoard />
    </main>
  );
}