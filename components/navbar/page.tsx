import Image from "next/image";
import styles from "../../app/styles/navbar.module.css";
import { LightBoxesIcon, CartIcon } from "@/public/icons";

const Navbar: React.FC<{}> = ({}) => {
  return (
    <div className={styles.navbar_wrapper}>
      <h1>My Image Search</h1>
      <div className={styles.navbar_menu}>
        <ul className={styles.navbar_menu_wrapper}>
          <li className={styles.list_item}>
            <LightBoxesIcon className={styles.svg_icons} />
            <a>LightBoxes</a>
          </li>
          <li className={styles.list_item}>
            <CartIcon className={styles.svg_icons} />
            <a>Cart</a>
          </li>
          <li className={styles.list_item}>
            <a className={styles.sign_btn}>Sign in</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
