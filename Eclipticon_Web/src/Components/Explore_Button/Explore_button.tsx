import styles from "./Explore_button.module.css";

const Explore_button = ({ text }: { text: string }) => {
  return (
    <button className={styles["explore-button"]}>
      <div className={styles["explore-button__inner"]}>
        <p className={styles["explore-button__text"]}>{text}</p>
      </div>

      <img
        src="/icon/ic-white-right-arrow.svg"
        alt="Right Arrow"
        className={styles["explore-button__icon"]}
      />
    </button>
  );
};

export default Explore_button;
