import React from "react";
import PropTypes from "prop-types";
import * as styles from "./image.module.css";

export const Image = ({ source, alt, size }) => {
  const classNames = [styles.container];
  if (size) classNames.push(styles[size]);
  return (
    <div className={classNames.join(" ")}>
      <img src={source} alt={alt} />
    </div>
  );
};

Image.propTypes = {
  alt: PropTypes.string,
  size: PropTypes.oneOf(["s", "m", "l", "xl"]),
};
