import Image from "next/image";

import styles from "./TourCard.module.scss";

export default function AnimatedCard({ children, img, alt, className }) {
  return (
    <div className={`${styles.card} ${className}`}>
      <Image
        className={styles.card__img}
        src={img}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 450px"
        loading="lazy"
      />
      {children}
    </div>
  );
}
