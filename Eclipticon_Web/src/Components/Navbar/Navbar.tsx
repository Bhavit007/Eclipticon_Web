import styles from "./Navbar.module.css";
import Eclipticon from "./EclipticonLogo/eclipticon";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar__container"]}>
        <div className={styles["navbar__logo"]}>
          <Eclipticon />
        </div>

        <ul className={styles["navbar__navigation"]}>
          <li className={styles["navbar__item"]}>
            <a className={styles["navbar__link"]}>Products</a>
          </li>

          <li className={styles["navbar__item"]}>
            <a className={styles["navbar__link"]}>
              Resources
              <img
                src="/icon/ic-resources.svg"
                className={styles["navbar__link-icon"]}
                alt="Resources Arrow"
              />
            </a>
          </li>

          <li className={styles["navbar__item"]}>
            <a className={styles["navbar__link"]}>Services</a>
          </li>
        </ul>

        <button
          className={styles["navbar__menu-button"]}
          aria-label="Open menu"
        >
          <img src="/icon/ic-menu.svg" alt="" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
