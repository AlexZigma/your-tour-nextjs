import clsx from "clsx";

import styles from "./filter.module.scss";

export default function FilterButton({ onClick, isActive, children }) {
  const classes = clsx(
    "p-big",
    styles["filter-button"],
    isActive && styles["filter-button--active"]
  );

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
