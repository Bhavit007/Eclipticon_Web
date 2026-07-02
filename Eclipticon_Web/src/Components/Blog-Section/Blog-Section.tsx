import Read_more from "../BlogCard/ReadMore/Read_more";
import styles from "./Blog-Section.module.css";

const Blogs = () => {
  const blogData = [
    {
      id: 1,
      img: "./images/img-blogcard1.svg",
      date: "Posted on 25th June",
      heading:
        "Inside Frenley: Designing a Dating App That Doesn't Feel Like a Game",
      description:
        "We didn’t just build another swipe app — we reimagined how people connect. Here’s how we approached design, trust, and UX to make Frenley more human.",
    },
    {
      id: 2,
      img: "./images/img-blogcard2.svg",
      date: "Posted on 25th July",
      heading:
        "Inside Frenley: Designing a Dating App That Doesn't Feel Like a Game",
      description:
        "We didn’t just build another swipe app — we reimagined how people connect. Here’s how we approached design, trust, and UX to make Frenley more human.",
    },
    {
      id: 3,
      img: "./images/img-blogcard3.svg",
      date: "Posted on 25th June",
      heading:
        "Inside Frenley: Designing a Dating App That Doesn't Feel Like a Game",
      description:
        "We didn’t just build another swipe app — we reimagined how people connect. Here’s how we approached design, trust, and UX to make Frenley more human.",
    },
  ];

  return (
    <div className={styles["blog-section"]}>
      <div className={styles["blog-section__header"]}>
        <h1 className={styles["blog-section__heading"]}>Recent Blogs</h1>
      </div>

      <div className={styles["blog-section__list"]}>
        {blogData.map((blog) => (
          <div key={blog.id} className={styles["blog-section__item"]}>
            <div className={styles["blog-section__image"]}>
              <img src={blog.img} alt="Blog Image" />
            </div>

            <div className={styles["blog-section__content"]}>
              <div className={styles["blog-section__text"]}>
                <p className={styles["blog-section__date"]}>{blog.date}</p>

                <h1 className={styles["blog-section__item-heading"]}>
                  {blog.heading}
                </h1>

                <p className={styles["blog-section__item-description"]}>
                  {blog.description}
                </p>
              </div>

              <div className={styles["blog-section__actions"]}>
                <Read_more />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
