import styles from './cta.module.scss'
import AppLink from '@/components/commons/AppLink/AppLink'
import Image from 'next/image'

export default function CTA() {
    return (
        <section className={`${styles.cta}`}>
            <Image
                className={styles.cta__img}
                src="/images/footer-photo.jpg"
                width={370}
                height={370}
                alt=""
                loading="lazy"
            />
            <div className={styles.cta__content}>
                <h3>Пора в путешествие вместе с нами!</h3>
                <p className={`${styles.cta__subtitle} p-normal`}>
                    Напиши на почту и узнай подробности <br />
                    на {' '}
                    <AppLink variant={'email'} href="mailto:yourtour@gmail.com">
                        yourtour@gmail.com
                    </AppLink> 
                </p>
            </div>
        </section>

    )
}