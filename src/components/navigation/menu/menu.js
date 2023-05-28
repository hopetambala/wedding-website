import React from "react";
import * as styles from "./menu.module.css";
import { Burger } from "../burger/burger";

export const Menu = ({ className, open, setOpen, links }) => {
  const classNames = [`menu ${styles.menu}`];
  if (open) classNames.push(`${open} ${styles[open]}`);
  if (className) classNames.push(className);
  return (
    <>
      <Burger setOpen={setOpen} />
      {open && (
        <nav className={classNames.join(" ")}>
          {links.map(({ href, text }) => (
            <a onClick={setOpen} href={href}>
              {text}
            </a>
          ))}
        </nav>
      )}
    </>
  );
};
