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
            <a
              className={styles.navbar__link}
              style={{ height: "73px", width: "20px" }}
            >
              Products
            </a>
          </li>
          <li>
            <a
              className={styles.navbar__link}
              style={{ height: "108px", width: "20px" }}
            >
              Resources
              <img
                src="/icon/ic-resources.svg"
                className={styles["navbar__resource-arrow"]}
                alt=""
              />
            </a>
          </li>
          <li>
            <a
              className={styles.navbar__link}
              style={{ height: "66px", width: "20px" }}
            >
              Services
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
