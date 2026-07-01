import styles from "./BlogButton.module.css";

const BlogButton = () => {
  return (
    <div>
      <button className={styles["blog-button"]}>
        <p className={styles["blog-button__text"]}>blogs</p>
      </button>
    </div>
  );
};

export default BlogButton;
