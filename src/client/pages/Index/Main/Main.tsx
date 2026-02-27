import styles from "./Main.module.scss";
import NoticeBoard from "./NoticeBoard/NoticeBoard";
import noticeBoardStyles from "./NoticeBoard/NoticeBoard.module.scss";
import boardPageControlStyles from "./BoardPageControl/BoardPageControl.module.scss";
import BoardPageControl from "./BoardPageControl/BoardPageControl";
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
            } else {
              mainElement.style.paddingInline = '35px';
            }
          }
        }
    }
    handleResize();
    
    const mainElement: null | HTMLElement = document.querySelector(`.${styles.main}`);
    const boardPageControlElement: null | HTMLElement = document.querySelector(`.${boardPageControlStyles["board-page-control"]}`);
    
    function fixBoardPageControlPos(overflowElement) {
      const mainElementScrollLeft = Number(overflowElement.scrollLeft.toFixed(0));
      const mainElementScrollTop = Number(overflowElement.scrollTop.toFixed(0));
      boardPageControlElement.style.left = `${(window.innerWidth / 2) - (boardPageControlElement.getBoundingClientRect().width / 2) + mainElementScrollLeft}px`;
      boardPageControlElement.style.top = `${10 + mainElementScrollTop}px`;
    }
    
    if (mainElement) {
      fixBoardPageControlPos(mainElement);
    }

    window.addEventListener('resize', handleResize);
    if (mainElement) {
      mainElement.addEventListener('scroll', () => fixBoardPageControlPos(mainElement));
    }
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mainElement) {
        mainElement.removeEventListener('scroll', () => fixBoardPageControlPos(mainElement));
      }
    }
  }, [count]);
  
  return (
    <main className={styles.main}>
      <BoardPageControl />
      <NoticeBoard />
    </main>
  );
}