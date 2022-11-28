import React from "react";
import * as styles from "./section.module.css";

export const Section = ({ children, title, isAltBG, className }) => {
  const id = title.replaceAll(" ", "").toLowerCase();
  const altBg = isAltBG ? `altBg ${styles.altBG}` : "";
  const classNames = [`section ${styles.section} ${altBg}`];
  if (className) classNames.push(className);

  return (
    <section id={id} className={classNames.join(" ")}>
      <div className={`content ${styles.content}`}>
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
};
