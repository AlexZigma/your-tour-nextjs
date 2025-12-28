import styles from './Footer.module.scss'
import AppLink from '../AppLink/AppLink'
import { footerLinks } from '@/data/footer'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__content}>
                <p className={`${styles.footer__title} p-normal`}>Наши социальные сети</p>
                <ul className={`${styles['footer__social-list']} p-normal`}>
                    {footerLinks.map((link) =>
                        <AppLink variant={'footer'} img={link.img} href={link.href} key={link.id} >
                            {link.label}
                        </AppLink>
                    )}
                </ul>
            </div>
        </footer>

    )
}