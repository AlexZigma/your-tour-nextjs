import Link from "next/link";
import './AppLink.module.scss'

export default function AppLink({ children, variant, href }) {
    return (
        <Link className={`${styles['header__nav-link']} ${styles["link"]}`} href={href}>
            {children}
        </Link>
    )
}