import Link from "next/link";

import AnimatedCard from "./AnimatedCard";
import styles from "./TourCard.module.scss";

export default function TourCard({ title, subtitle, img, alt, href }) {
  return (
    <AnimatedCard img={img} alt={alt}>
      <div className={styles.card__top}>
        <h3 className={styles.card__title}>{title}</h3>
        {subtitle && <p className="p-small">{subtitle}</p>}
      </div>
      <div className={styles.card__bottom}>
        <Link className={`${styles.card__button} p-big`} href={href}>
          {/* Подробнее */}
          <span className={styles['card__button-label']}>Подробнее</span>
        </Link>
      </div>
    </AnimatedCard>
  );
}
