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
  callAPI: (e: FormEvent<HTMLFormElement>) => void;
}

const SearchBar: React.FC<ISearchBar> = ({
  onChangeHandler,
  query,
  callAPI,
}) => {
  return (
    <div className={styles.searchBar_wrapper}>
      <div className={styles.drop_down_box}>
        <p>
          <ImageIcon />
          All Images
        </p>
        <span>
          <DropDownIcon />
        </span>
      </div>
      <form onSubmit={callAPI} className={styles.input_box}>
        <button type="submit">
          <SearchIcon />
        </button>
        <input
          type="text"
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
