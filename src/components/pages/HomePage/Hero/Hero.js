import styles from './Hero.module.scss'

export default function Hero() {
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
            <a className={`${styles["hero__button"]} p-small`} href="#tour-choose">
                Найти тур
            </a>
        </section>
    )
}