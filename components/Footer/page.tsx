import styles from "../../app/styles/footer.module.css";

const Footer: React.FC<{}> = ({}) => {
  return (
    <div className={styles.footer_wrapper}>
      <p className={styles.footer_top}>
        370,582,286 stock photos, 360° panoramic images, vectors and videos
      </p>
      <div className={styles.footer_bottom}>
        <h2>My Image Search</h2>
        <span>Changing the world one image at a time</span>
      </div>
    </div>
  );
};

export default Footer;
