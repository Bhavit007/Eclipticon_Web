import styles from "./BlogCard.module.css";
import Read_more from "./ReadMore/Read_more";

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
        <Read_more />
      </div>
    </div>
  );
};

export default Card;
