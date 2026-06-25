import Read_more from "../BlogCard/ReadMore/Read_more";
import styles from "./Blogs.module.css";

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
        "We didn’t just build another swipe app — we reimagined how people connect. Here’s how we approached design, trust, and UX to make Frenley more human..",
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
    <>
      <div className={styles.blogs}>
        <div className={styles.blog_title_box}>
          <h1 className={styles.blog_title}>Recent Blogs</h1>
        </div>
        <div className={styles.blog_cards}>
          {blogData.map((blog) => (
            <div className={styles.blog_card} key={blog.id}>
              <div className={styles.blog_image}>
                <img src={blog.img} alt="Blog Image" />
              </div>
              <div className={styles.blog_content}>
                <div className={styles.blog_text}>
                  <p className={styles.blog_date}>{blog.date}</p>
                  <h1 className={styles.blog_heading}>{blog.heading}</h1>
                  <p className={styles.blog_description}>{blog.description}</p>
                </div>
                <div className={styles.read_more}>
                  <Read_more />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.gotoTop}>
          <button className={styles.gotoTopButton}>
            <img src="./icon/ic-gototop.svg" alt="Go to Top" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Blogs;
