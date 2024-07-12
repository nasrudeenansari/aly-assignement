import styles from "../../app/styles/searchBar.module.css";
import {
  DropDownIcon,
  ImageIcon,
  SearchIcon,
  CameraIcon,
} from "@/public/icons";

const SearchBar: React.FC<{}> = ({}) => {
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
      <div className={styles.input_box}>
        <SearchIcon />
        <input type="text" />
      </div>
      <div className={styles.camera_box}>
        <CameraIcon />
        <p>Search by images</p>
      </div>
    </div>
  );
};

export default SearchBar;
