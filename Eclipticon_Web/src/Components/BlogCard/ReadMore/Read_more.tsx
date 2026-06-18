import styles from "./Read_more.module.css";

const Read_more = () => {
  return (
    <div className={styles["card__link-container"]}>
      <img className={styles["card__rectangle"]} src="/icon/ic-rectangle.svg" />
      <p className={styles["card__link"]}>
        Read More <span>&#8594;</span>
      </p>
    </div>
  );
};

export default Read_more;
