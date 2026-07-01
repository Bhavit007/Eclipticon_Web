import styles from "./Hero.module.css";
import Explore_button from "../Explore_Button/Explore_button";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles["hero__title"]}>
        Stories, breakdowns & behind-the-scenes from our product lab.
      </h1>
      <p className={styles["hero__description"]}>
        We don’t blog for clicks. We write to document our thinking, process,
        and the small wins (and mistakes) that make great digital products
        possible.
      </p>
      <Explore_button text="Get Started" />
    </div>
  );
};

export default Hero;
