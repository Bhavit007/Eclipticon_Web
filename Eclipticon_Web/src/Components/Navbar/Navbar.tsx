import styles from "./Navbar.module.css";
import Eclipticon from "./EclipticonLogo/eclipticon";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-container"]}>
        <Eclipticon />

        <ul className={styles["navbar-container__links"]}>
          <li>
            <a className={styles["navbar-container__links-link"]}>Products</a>
          </li>

          <li>
            <a className={styles["navbar-container__links-link"]}>
              Resources
              <img
                src="/icon/ic-resources.svg"
                className={styles["navbar-container_links-link-resource-arrow"]}
                alt="Resources Arrow"
              />
            </a>
          </li>

          <li>
            <a className={styles["navbar-container__links-link"]}>Services</a>
          </li>
        </ul>

        <img
          src="/icon/ic-menu.svg"
          className={styles["navbar-container__menuButton"]}
          alt="Menu"
        />
      </div>
    </nav>
  );
};

export default Navbar;
