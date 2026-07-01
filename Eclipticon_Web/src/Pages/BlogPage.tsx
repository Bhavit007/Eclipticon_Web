import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import styles from "./BlogPage.module.css";
import Blogs from "../Components/Blog-Section/Blog-Section";
import Footer from "../Components/Footer/Footer";
import Gototopbutton from "../Components/Go-To-Top-Button/Go-to-top-button";
import MixingLayer from "../Components/Mixing Layer/MixingLayer";

const BlogPage = () => {
  return (
    <div className={styles["blog-page"]}>
      <div className={styles["navbar"]}>
        <Navbar />
      </div>
      <div className={styles["hero-section"]}>
        <Hero />
      </div>
      <img className={styles["eclipse-image"]} src="./images/img-eclipse.svg" />
      <div className={styles["blob1"]}></div>
      <div className={styles["blob2"]}></div>
      <div className={styles["blogs"]}>
        <Blogs />
      </div>
      <div className={styles["footer"]}>
        <Footer />
      </div>
      <div className={styles["go-to-top-button"]}>
        <Gototopbutton />
      </div>
      <div className={styles["mixing-layer"]}>
        <MixingLayer />
      </div>
    </div>
  );
};

export default BlogPage;
