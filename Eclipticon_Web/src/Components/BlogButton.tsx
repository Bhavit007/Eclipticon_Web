import styles from "./BlogButton.module.css";

const Button = () => {
  return (
    <div>
      <button className={styles.button}>
        <p className={styles.button__text}>blogs</p>
      </button>
    </div>
  );
};

export default Button;
