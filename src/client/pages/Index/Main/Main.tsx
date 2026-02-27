import styles from "./Main.module.scss";
import NoticeBoard from "./NoticeBoard/NoticeBoard";
import noticeBoardStyles from "./NoticeBoard/NoticeBoard.module.scss";
import boardPageControlStyles from "./BoardPageControl/BoardPageControl.module.scss";
import BoardPageControl from "./BoardPageControl/BoardPageControl";
import { useEffect, useState } from 'react';

export default function Main() {
  const [count] = useState<number>(0);

  useEffect(() => {
    const mainElement: null | HTMLElement = document.querySelector(`.${styles.main}`);
    const boardPageControlElement: null | HTMLElement = document.querySelector(`.${boardPageControlStyles["board-page-control"]}`);
    const noticeBoardElement: null| HTMLElement = document.querySelector(`.${noticeBoardStyles["notice-board"]}`);
    const fixPageControlHTMLElementsArray = [boardPageControlElement, mainElement, noticeBoardElement];
    
    function fixBoardPageControlPos([boardPageControlEl, overflowEl, noticeBoardEl]) {
      const mainElementScrollLeft = Number(overflowEl.scrollLeft.toFixed(0));
      const mainElementScrollTop = Number(overflowEl.scrollTop.toFixed(0));
      boardPageControlEl.style.left = `${(window.innerWidth / 2) - (boardPageControlEl.getBoundingClientRect().width / 2) + mainElementScrollLeft}px`;
      boardPageControlEl.style.top = `${10 + mainElementScrollTop}px`;
      boardPageControlEl.style.maxWidth = `${noticeBoardEl.getBoundingClientRect().width - 50}px`;
    }
    
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
        if (!fixPageControlHTMLElementsArray.includes(undefined)) {
          fixBoardPageControlPos(fixPageControlHTMLElementsArray);
        }
    }
    handleResize();
    
    if (!fixPageControlHTMLElementsArray.includes(undefined)) {
      fixBoardPageControlPos(fixPageControlHTMLElementsArray);
    }

    window.addEventListener('resize', handleResize);
    if (!fixPageControlHTMLElementsArray.includes(undefined)) {
      mainElement.addEventListener('scroll', () => fixBoardPageControlPos(fixPageControlHTMLElementsArray));
    }
    return () => {
      window.removeEventListener('resize', handleResize);
      if (!fixPageControlHTMLElementsArray.includes(undefined)) {
        mainElement.removeEventListener('scroll', () => fixBoardPageControlPos(fixPageControlHTMLElementsArray));
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