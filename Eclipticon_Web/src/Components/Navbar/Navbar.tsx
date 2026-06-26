import styles from "./Navbar.module.css";
import Eclipticon from "./EclipticonLogo/eclipticon";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__container}>
        <Eclipticon />
        <ul className={styles.navbar__links}>
          <li>
            <a className={styles.navbar__link}>Products</a>
          </li>
          <li>
            <a className={styles.navbar__link}>
              Resources
              <img
                src="/icon/ic-resources.svg"
                className={styles["navbar__resource-arrow"]}
                alt=""
              />
            </a>
          </li>
          <li>
            <a className={styles.navbar__link}>Services</a>
          </li>
        </ul>

        <img src="/icon/ic-menu.svg" className={styles.navbar__menuButton} />
      </div>
    </nav>
  );
};

export default Navbar;
