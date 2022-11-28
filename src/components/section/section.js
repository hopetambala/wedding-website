import React from "react";
import * as styles from "./section.module.css";

export const Section = ({ children, title, isAltBG }) => {
  const altBg = isAltBG ? `altBg ${styles.altBG}` : "";

  return (
    <section id={title} className={`section ${styles.section} ${altBg} `}>
      <div className={`content ${styles.content}`}>
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
};
