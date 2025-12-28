import styles from './TourCard.module.scss'
import Link from 'next/link'
import AppLink from '../AppLink/AppLink';
import AnimatedCard from './AnimatedCard';

export default function StoryCard({ title, img, href, children, links }) {
    return (
        <AnimatedCard img={img} className={styles['card--big']}>
            <div className={styles.card__top}>
                <h3>{title}</h3>
                {children && <div className='p-normal'>{children}</div>}
            </div>
            <div className={styles.card__bottom}>
                <Link className={`${styles.card__button} p-big`} href={href}>
                    Подробнее
                </Link>
                {links &&
                    <div className={`${styles.card__socials} p-normal`}>
                        {links?.map((item) =>
                            <AppLink variant={'social'} href={item.href} key={item.href}>
                                {item.label}
                            </AppLink>
                        )}
                    </div>
                }
            </div>
        </AnimatedCard>
    )
}