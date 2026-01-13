import styles from "./Section.module.scss";
import FilterList from "../Filter/FilterList";

export default function Section({
  id,
  title,
  subtitle = "",
  filterList,
  children,
  wide = false,
  className,
}) {
  const classes = [styles.section, wide && styles["section--wide"], className]
    .filter(Boolean)
    .join(" ");
  return (
    <section className={classes} id={id}>
      <header className={styles.section__header}>
        {title && <h2 className={styles.section__title}>{title}</h2>}
        {subtitle && (
          <p className={`${styles.section__subtitle} p-normal`}>{subtitle}</p>
        )}
        {filterList && (
          <FilterList
            filter_list={filterList}
            className={styles["section__filter-list"]}
          />
        )}
      </header>
      <div className={`${styles.section__content} p-normal`}>{children}</div>
    </section>
  );
}
