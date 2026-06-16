import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__container}>
        <div className={styles.navbar__logo}>
          <img
            className={styles["navbar__logo-icon"]}
            src="/icon/ic-eclipticon.svg"
          />
          <h1 className={styles["navbar__logo-text"]}>Eclipticon</h1>
        </div>
        <ul className={styles.navbar__links}>
          <li>
            <a className={styles.navbar__link}>Products</a>
          </li>
          <li>
            <a className={styles.navbar__link}>
              Resources{" "}
              <img
                src="/icon/ic-resources.svg"
                style={{ width: 12, height: 14, opacity: 1 }}
                alt="Resources"
              />
            </a>
          </li>
          <li>
            <a className={styles.navbar__link}>Services</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
