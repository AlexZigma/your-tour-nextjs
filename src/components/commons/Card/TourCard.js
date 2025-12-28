import styles from './TourCard.module.scss'
import Link from 'next/link'
import AnimatedCard from './AnimatedCard';

export default function TourCard({ title, subtitle, img, href }) {

    return (
        <AnimatedCard img={img}>
            <div className={styles.card__top}>
                <h3>{title}</h3>
                {subtitle && <p className='p-small'>{subtitle}</p>}
            </div>
            <div className={styles.card__bottom}>
                <Link className={`${styles.card__button} p-big`} href={href}>
                    Подробнее
                </Link>
            </div>
        </AnimatedCard>
    )
}