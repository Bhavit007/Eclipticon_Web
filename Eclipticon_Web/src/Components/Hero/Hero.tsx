import styles from "./Hero.module.css";
import Explore_button from "../Explore_Button/Explore_button";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles["hero__content"]}>
        <h1 className={styles["hero__title"]}>
          Stories, breakdowns & behind-the-scenes from our product lab.
        </h1>

        <p className={styles["hero__description"]}>
          We don’t blog for clicks. We write to document our thinking, process,
          and the small wins (and mistakes) that make great digital products
          possible.
        </p>

        <div className={styles["hero__actions"]}>
          <Explore_button text="Get Started" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
