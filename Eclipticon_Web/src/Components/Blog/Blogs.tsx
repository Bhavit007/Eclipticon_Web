import styles from "./Blogs.module.css";

const Blogs = () => {
  return (
    <div className={styles.blogs}>
      <h1>Recent Blogs</h1>
      <div className={styles.blog_card}>
        <h1>Blog Title</h1>
        <p>Blog content goes here...</p>
      </div>
    </div>
  );
};

export default Blogs;
