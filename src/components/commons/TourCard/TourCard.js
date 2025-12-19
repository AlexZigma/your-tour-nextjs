import styles from './TourCard.module.scss'
import Link from 'next/link'
import Image from 'next/image';
import AppLink from '../AppLink/AppLink';

export default function TourCard({ title, subtitle = '', img, href, children, links, big = false }) {
    const classes = [
        styles.card,
        big && styles['card--big']
    ].filter(Boolean).join(' ');

    return (
        <div className={classes}>
            <Image
                className={styles.card__img}
                src={img}
                alt=""
                fill
                sizes='(max-width: 1024px) 100vw, 450px'
                loading="lazy"
            />
            <div className={styles.card__top}>
                <h3>{title}</h3>
                {subtitle && <p className='p-small'>{subtitle}</p>}
                {children && <div className='p-normal'>{children}</div>}
            </div>
            <div className={styles.card__bottom}>
                <Link className={`${styles.card__button} p-big`} href={href}>
                    Подробнее
                </Link>
                {links &&
                    <div className={`${styles.card__socials} p-normal`}>
                        {links?.map((item, index) =>
                            <AppLink variant={'social'} href={item.href} key={index}>
                                {item.label}
                            </AppLink>
                        )}
                    </div>
                }
            </div>
        </div>
    )
}