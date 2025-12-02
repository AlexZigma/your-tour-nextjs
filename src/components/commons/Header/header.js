import styles from './header.module.scss'

export default function Header() {
    return (
        <header className={styles.header} id="header">
            <div className={styles.header__content}>
                <a className={styles.header__logo} href=".">
                    <img
                        className={styles['header__logo-img']}
                        src="/icons/YourTour.svg"
                        alt="YourTour"
                        loading="lazy"
                    />
                </a>
                <nav className={styles["header__nav p-normal"]}>
                    <ul className={styles["header__nav-list"]}>
                        <li className={styles["header__nav-item"]}>
                            <a className={styles["header__nav-link link"]} href="#tour-choose">
                                Туры
                            </a>
                        </li>
                        <li className={styles["header__nav-item"]}>
                            <a className={styles["header__nav-link link"]} href="#tour-create">
                                Создать тур
                            </a>
                        </li>
                        <li className={styles["header__nav-item"]}>
                            <a className={styles["header__nav-link link"]} href="#reviews">
                                Отзывы
                            </a>
                        </li>
                        <li className={styles["header__nav-item"]}>
                            <a className={styles["header__nav-link link"]} href="#stories">
                                Истории
                            </a>
                        </li>
                    </ul>
                </nav>
                <a
                    className={styles["header__phone link link--phone p-normal"]}
                    href="tel:+79999999999"
                >
                    +7 999 999 99 99
                </a>
            </div>
        </header>
    )
}