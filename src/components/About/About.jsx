import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/abt.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/frontend.png")} alt="Cursor icon"/>
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/dev.png")} alt="Server icon"  />
            <div className={styles.aboutItemText}>
              <h3>Web Designer</h3>
              <p>
                Interested to design web pages and explore new technologies in web development
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/program.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Programmer</h3>
              <p>
                Aspiring programmer with experience in programming languages and problem solving skills
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};