import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/arrow.png")} alt="arrow icon" height="40px" width="40px" />
            <div className={styles.aboutItemText}>
            <h3>Secondary</h3>
<p>
I completed my 10th grade at Bhashyam High School, Prakasam, Andhra Pradesh, achieving a CGPA of 9.5, reflecting a strong academic foundation and consistent performance.
</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
          <img src={getImageUrl("about/arrow.png")} alt="arrow icon" height="40px" width="40px" />
            <div className={styles.aboutItemText}>
            <h3>Higher Secondary</h3>
<p>
I pursued my intermediate education at NTR Junior College, Hyderabad, Telangana, securing an impressive 96% in the science stream, showcasing my dedication and academic excellence.
</p>

            </div>
          </li>
          <li className={styles.aboutItem}>
          <img src={getImageUrl("about/arrow.png")} alt="arrow icon" height="40px" width="40px" />
            <div className={styles.aboutItemText}>
              <h3>Graduation</h3>
              <p>
              I'm on track to complete my B.Tech in CSE from LPU by 2026, marking the culmination of my journey in computer science and engineering education.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
