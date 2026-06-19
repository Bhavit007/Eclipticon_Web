import styles from "./eclipticon.module.css";

const Eclipticon = () => {
  return (
    <div className={styles.navbar__logo}>
      <img
        className={styles["navbar__logo-icon"]}
        src="/icon/ic-eclipticon.svg"
      />
      <h1 className={styles["navbar__logo-text"]}>Eclipticon</h1>
    </div>
  );
};

export default Eclipticon;
