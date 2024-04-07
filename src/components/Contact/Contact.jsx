import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
      <li className={styles.link}>
          <img
            src={getImageUrl("contact/resume.png")}
            alt="LinkedIn icon"
          />
          <a href="https://drive.google.com/file/d/1CVlg1MH-Nmx9UbrlSAkV08Lv8iOrRkLC/view?usp=drivesdk">resume</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:swathiramesh884@gmail.com">email</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/swathisri-r-9909a720a">linkedin.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Swathisri-02">github.com</a>
        </li>
      </ul>
    </footer>
  );
};