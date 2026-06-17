import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import styles from "./BlogPage.module.css";

const BlogPage = () => {
  return (
    <div className={styles["blog-page"]}>
      <div className={styles["navbar"]}>
        <Navbar />
      </div>
      <div className={styles["hero"]}>
        <Hero />
      </div>
    </div>
  );
};

export default BlogPage;
