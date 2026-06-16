import styles from "./Explore_button.module.css";

const Explore_button = (text: string) => {
  return (
    <div>
      <button className={styles.button}>
        <button className={styles.button__inner}>
          <p className={styles.button__text}>{text}</p>
        </button>
        <img src="/icon/ic-white-right-arrow.svg" />
      </button>
    </div>
  );
};

export default Explore_button;
