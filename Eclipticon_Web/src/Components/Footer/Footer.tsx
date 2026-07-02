import Eclipticon from "../Navbar/EclipticonLogo/eclipticon";
import styles from "./Footer.module.css";

const Footer = () => {
  const footerLinks = [
    {
      id: 1,
      title: "Products",
      a1: "Frenley",
      a2: "Lawyers Diary",
      a3: "UFM Sports",
    },
    {
      id: 2,
      title: "Resources",
      a1: "About Us",
      a2: "Blogs",
      a3: "Carreers",
    },
    {
      id: 3,
      title: "Services",
      a1: "Engineering",
      a2: "Data Science",
      a3: "more...",
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles["footer__container"]}>
        <div className={styles["footer__header"]}>
          <h1 className={styles["footer__heading"]}>Build Epic</h1>
        </div>

        <div className={styles["footer__content"]}>
          <div className={styles["footer__brand"]}>
            <div className={styles["footer__logo"]}>
              <Eclipticon />
            </div>

            <div className={styles["footer__socials"]}>
              <img
                className={styles["footer__icon"]}
                src="./icon/ic-insta.svg"
                alt="Instagram Icon"
              />

              <img
                className={styles["footer__icon"]}
                src="./icon/ic-linkedin.svg"
                alt="LinkedIn Icon"
              />

              <img
                className={styles["footer__icon"]}
                src="./icon/ic-xtwitter.svg"
                alt="Twitter Icon"
              />

              <img
                className={styles["footer__icon"]}
                src="./icon/ic-facebook.svg"
                alt="Facebook Icon"
              />
            </div>
          </div>

          <div className={styles["footer__navigation"]}>
            {footerLinks.map((link) => (
              <div key={link.id} className={styles["footer__column"]}>
                <p className={styles["footer__column-title"]}>{link.title}</p>

                <div className={styles["footer__links"]}>
                  <a className={styles["footer__link"]}>{link.a1}</a>

                  <a className={styles["footer__link"]}>{link.a2}</a>

                  <a className={styles["footer__link"]}>{link.a3}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
