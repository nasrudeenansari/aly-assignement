import { ChangeEvent, ChangeEventHandler, FormEvent } from "react";
import styles from "../../app/styles/searchBar.module.css";
import {
  DropDownIcon,
  ImageIcon,
  SearchIcon,
  CameraIcon,
} from "@/public/icons";

interface ISearchBar {
  onChangeHandler: (value: string) => void;
  query: string;
}

const SearchBar: React.FC<ISearchBar> = ({ onChangeHandler, query }) => {
  return (
    <div className={styles.searchBar_wrapper}>
      <div className={styles.drop_down_box}>
        <p>
          <ImageIcon />
          <span className={styles.drop_down_title}>All Images</span>
        </p>
        <span>
          <DropDownIcon />
        </span>
      </div>
      <form method="get" action="/" className={styles.input_box}>
        <button type="submit">
          <SearchIcon />
        </button>
        <input
          type="text"
          name="query"
          value={query}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChangeHandler(e.target.value)
          }
        />
      </form>
      <div className={styles.camera_box}>
        <CameraIcon />
        <p>Search by images</p>
      </div>
    </div>
  );
};

export default SearchBar;
