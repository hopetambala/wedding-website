import React from "react";
import * as styles from "./section.module.css";

export const Grid = ({ children }) => {
  return <div className={`group ${styles.column}`}>{children}</div>;
};
