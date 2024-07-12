import styles from "../../app/styles/tabs.module.css";
import {
  DropDownIcon,
  ImageIcon,
  SearchIcon,
  CameraIcon,
} from "@/public/icons";

const Tabs: React.FC<{}> = ({}) => {
  return (
    <div className={styles.tabs_wrapper}>
      <button className={styles.active}>All</button>
      <button>Creative</button>
      <button>Editorial</button>
    </div>
  );
};

export default Tabs;
