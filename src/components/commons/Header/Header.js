import styles from './Header.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import AppLink from '../AppLink/AppLink'
import { useEffect, useRef, useState } from 'react'
import { nav_links } from '@/data/nav'

export default function Header() {
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
                        loading="eager"
                    />
                </Link>
                <nav className={`${styles["header__nav"]} p-normal`}>
                    <ul className={styles["header__nav-list"]}>
                        {nav_links.map((item) =>
                            <li key={item.href}>
                                <AppLink href={item.href} dark={isFixed}>
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