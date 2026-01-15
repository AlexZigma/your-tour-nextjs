import Link from "next/link";

import AppLink from "../AppLink/AppLink";
import AnimatedCard from "./AnimatedCard";
import styles from "./TourCard.module.scss";

export default function StoryCard({ title, img, alt, href, children, links }) {
  return (
    <AnimatedCard img={img} alt={alt} className={styles["card--big"]}>
      <div className={`${styles.card__top} ${styles['card__top--big']}`}>
        <h3 className={styles.card__title}>{title}</h3>
        {children && <div className="p-normal">{children}</div>}
      </div>
      <div className={styles.card__bottom}>
        <Link className={`${styles.card__button} p-big`} href={href}>
          <span className={styles['card__button-label']}>Подробнее</span>
        </Link>
        {links && (
          <div className={`${styles.card__socials} p-normal`}>
            {links.map((item) => (
              <AppLink variant="social" href={item.href} key={item.href}>
                {item.label}
              </AppLink>
            ))}
          </div>
        )}
      </div>
    </AnimatedCard>
  );
}
