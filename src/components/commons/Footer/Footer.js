import styles from './Footer.module.scss'
import AppLink from '../AppLink/AppLink'
import { footerLinks } from '@/data/footer'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__content}>
                <p className={`${styles.footer__title} p-normal`}>Наши социальные сети</p>
                <ul className={`${styles['footer__social-list']} p-normal`}>
                    {footerLinks.map((link, index) =>
                        <AppLink variant={'footer'} img={link.img} href={link.href} key={index} >
                            {link.label}
                        </AppLink>
                    )}
                </ul>
            </div>
        </footer>

    )
}