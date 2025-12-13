import styles from './Footer.module.scss'
import AppLink from '../AppLink/AppLink'

function SocialLink({ img, label, href }) {
    return (
        <AppLink variant={'footer'} href={href} img={img}>
            {label}
        </AppLink>
    )
}

export default function Footer() {
    const links = [
        { label: 'telegram', img: '/icons/telegram.svg', href: '' },
        { label: 'facebook', img: '/icons/facebook.svg', href: '' },
        { label: 'vkontakte', img: '/icons/vkontakte.svg', href: '' },
    ]

    return (
        <footer className={styles.footer}>
            <div className={styles.footer__content}>
                <p className={`${styles.footer__title} p-normal`}>Наши социальные сети</p>
                <ul className={`${styles['footer__social-list']} p-normal`}>
                    {links.map((link, index) =>
                        <AppLink variant={'footer'} img={link.img} href={link.href} key={index} >
                            {link.label}
                        </AppLink>
                    )}
                </ul>
            </div>
        </footer>

    )
}