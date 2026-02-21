import BlankSectionButton from "./BlankSectionButton/BlankSectionButton.js";
import BoardSectionButton from "./BoardSectionButton/BoardSectionButton.js";
import DiarySectionButton from "./DiarySectionButton/DiarySectionButton.js";
import styles from "./Navigation.module.scss";
import SearchSectionButton from "./SearchSectionButton/SearchSectionButton.js";

export default function Navigation() {
  
  return (
    <nav className={styles.navigation}>
      <div className={styles.container}>
        <BoardSectionButton />
        <DiarySectionButton />
        <BlankSectionButton />
        <SearchSectionButton />
      </div>
    </nav>
  );
}