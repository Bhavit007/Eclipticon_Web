import styles from "./Explore_button.module.css";

const Explore_button = () => {
  return (
    <div>
      <button className={styles.button}>
        <button className={styles.button__inner}>
          <p className={styles.button__text}>Explore Services</p>
        </button>
        <img
          className={styles.button__arrow}
          src="/icon/ic-white-right-arrow.svg"
        />
      </button>
    </div>
  );
};

export default Explore_button;
