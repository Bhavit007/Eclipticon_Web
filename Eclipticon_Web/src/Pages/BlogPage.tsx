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
      <div className={styles["blog-page__navbar-box"]}>
        <Navbar />
      </div>

      <div className={styles["blog-page__hero-section-box"]}>
        <Hero />
      </div>

      <img
        className={styles["blog-page__eclipse-image"]}
        src="./images/img-eclipse.svg"
        alt="Eclipse"
      />

      <div className={styles["blog-page__blob1"]}></div>
      <div className={styles["blog-page__blob2"]}></div>

      <div className={styles["blog-page__blogs-box"]}>
        <Blogs />
      </div>

      <div className={styles["blog-page__footer-box"]}>
        <Footer />
      </div>

      <div className={styles["go-to-top-button"]}>
        <Gototopbutton />
      </div>

      <div className={styles["blog-page__mixing-layer"]}>
        <MixingLayer />
      </div>
    </div>
  );
};

export default BlogPage;
