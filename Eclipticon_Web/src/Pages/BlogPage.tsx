import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import styles from "./BlogPage.module.css";
import Blogs from "../Components/Blog/Blogs";
import Footer from "../Components/Footer/Footer";

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
      <div className={styles["footer"]}>
        <Footer />
      </div>
    </div>
  );
};

export default BlogPage;
