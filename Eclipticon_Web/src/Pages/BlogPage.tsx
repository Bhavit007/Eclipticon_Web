import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import styles from "./BlogPage.module.css";
import Blogs from "../Components/Blog/Blogs";

const BlogPage = () => {
  return (
    <div className={styles["blog-page"]}>
      <div className={styles["navbar"]}>
        <Navbar />
      </div>
      <div className={styles["hero"]}>
        <Hero />
      </div>
      <div className={styles["blogs"]}>
        <Blogs />
      </div>
    </div>
  );
};

export default BlogPage;
