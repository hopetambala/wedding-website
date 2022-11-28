import React from "react";
import * as styles from "./grid.module.css";

export const Grid = ({ children, position }) => {
  return (
    <div className={`group ${styles.group} ${position}} ${styles[position]}`}>
      {children}
    </div>
  );
};
