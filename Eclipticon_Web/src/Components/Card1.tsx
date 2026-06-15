import styles from "./Card1.module.css";

const Card = () => {
  return (
    <div className={styles.card}>
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
        <div className={styles["card__link_container"]}>
          <p className={styles["card__link"]}>
            <img src="/icon/ic-rectangle.svg" />
            Read More <img src="/icon/ic-white-right-arrow.svg" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
