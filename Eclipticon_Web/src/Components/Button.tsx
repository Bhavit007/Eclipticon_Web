import styles from "./Button.module.css";

const Button = () => {
  return (
    <div>
      <button className={styles.button}>
        <p className={styles.button__text}>BLOGS</p>
      </button>
    </div>
  );
};

export default Button;
