import styles from "./BlogCard.module.css";

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card__layer}></div>
      <div className={styles.card__content}>
        <div className={styles["card__text"]}>
          <h1 className={styles["card__title"]}>
            Inside Frenley: Designing a Dating App That Doesn't Feel Like a Game
          </h1>
          <p className={styles["card__description"]}>
            We didn’t just build another swipe app we reimagined how people
            connect. Here’s how we approached design, trust, and UX to make
            Frenley more human.
          </p>
        </div>
        <div className={styles["card__link-container"]}>
          <img
            className={styles["card__rectangle"]}
            src="/icon/ic-rectangle.svg"
          />
          <p className={styles["card__link"]}>
            Read More <span>&#8594;</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
