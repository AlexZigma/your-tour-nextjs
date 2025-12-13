import styles from './Header.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import AppLink from '../AppLink/AppLink'
import { useEffect, useRef, useState } from 'react'

export default function Header() {
    const nav_links = [
        { label: 'Туры', id: 'tours' },
        { label: 'Создать тур', id: 'tour-create' },
        { label: 'Отзывы', id: 'reviews' },
        { label: 'Истории', id: 'stories' },
    ]

    const headerRef = useRef(null)

    const [isFixed, setIsFixed] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const isVisible = window.scrollY > 450
            const isFixed = window.scrollY > 100
            setIsFixed(isFixed)
            headerRef.current.classList.toggle(styles['header--show'], isVisible);
            headerRef.current.classList.toggle(styles['header--fixed'], isFixed);
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header ref={headerRef} className={styles.header} id="header">
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
                        {nav_links.map((item) =>
                            <li key={item.id}>
                                <AppLink href={`#${item.id}`} dark={isFixed}>
                                    {item.label}
                                </AppLink>
                            </li>
                        )}
                    </ul>
                </nav>
                <AppLink variant='phone' className={`p-normal`} href="tel:+79999999999" dark={isFixed}>
                    +7 999 999 99 99
                </AppLink>
            </div>
        </header>
    )
}