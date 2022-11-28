import React from "react";
import * as styles from "./grid.module.css";

export const Grid = ({ children, position, spacing }) => {
  const classNames = [`group ${styles.group}`]
  if(position) classNames.push(`${position} ${styles[position]}`)
  if(spacing) classNames.push(`spacing${spacing} ${styles[`spacing${spacing}`]}`)
  return (
    <div className={classNames.join(" ")}>
      {children}
    </div>
  );
};
