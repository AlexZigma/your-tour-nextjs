import styles from './Header.module.scss'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
    const NAV_ITEMS = [
        { label: 'Туры', href: 'tour-choose' },
        { label: 'Создать тур', href: 'tour-create' },
        { label: 'Отзывы', href: 'reviews' },
        { label: 'Истории', href: 'stories' },
    ]
    return (
        <header className={styles.header} id="header">
            <div className={styles.header__content}>
                <Link className={styles.header__logo} href="/">
                    <Image
                        className={styles['header__logo-img']}
                        width={182}
                        height={32}
                        src="/icons/YourTour.svg"
                        alt="YourTour"
                        loading="lazy"
                    />
                </Link>
                <nav className={`${styles["header__nav"]} p-normal`}>
                    <ul className={styles["header__nav-list"]}>
                        {NAV_ITEMS.map((item) =>
                            <li className={styles["header__nav-item"]} key={item.href}>
                                <Link className={`${styles['header__nav-link']} ${styles["link"]}`} href={`#${item.href}`}>
                                    {item.label}
                                </Link>
                            </li>
                        )}
                    </ul>
                </nav>
                <Link className={`${styles.header__phone} ${styles.link} ${styles['link--phone']} p-normal`}
                    href="tel:+79999999999">
                    +7 999 999 99 99
                </Link>
            </div>
        </header>
    )
}