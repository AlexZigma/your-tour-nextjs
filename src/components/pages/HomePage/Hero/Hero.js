import Link from 'next/link'
import styles from './Hero.module.scss'

export default function Hero({ href='' }) {
    return (
        <section className={styles["hero"]}>
            <h1 className={styles["hero__title"]}>
                Идеальные <br /> путешествия <br /> существуют
            </h1>
            <p className={`${styles["hero__subtitle"]} p-normal`}>
                Идейные соображения высшего порядка
                <span className="hide-tablet show-mobile">,</span> а также рамки и место
                обучения кадров
            </p>
            <Link className={`${styles["hero__button"]} p-small`} href={href}>
                Найти тур
            </Link>
        </section>
    )
}