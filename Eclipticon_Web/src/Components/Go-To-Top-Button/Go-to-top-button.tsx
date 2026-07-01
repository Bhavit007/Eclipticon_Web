import styles from "./Go-to-top-button.module.css";

const Gototopbutton = () => {
  return (
    <div>
      <div className={styles["blog-section__go-to-top-box"]}>
        <button className={styles["blog-section__go-to-top-button"]}>
          <img src="./icon/ic-gototop.svg" alt="Go to Top" />
        </button>
      </div>
    </div>
  );
};

export default Gototopbutton;
