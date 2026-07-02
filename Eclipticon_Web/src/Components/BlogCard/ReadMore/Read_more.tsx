import styles from "./Read_more.module.css";

const Read_more = () => {
  return (
    <div className={styles["Read-more-button__link-container"]}>
      <img
        className={styles["Read-more-button__rectangle"]}
        src="/icon/ic-rectangle.svg"
      />
      <p className={styles["Read-more-button__link"]}>
        Read More <span>&#8594;</span>
      </p>
    </div>
  );
};

export default Read_more;
