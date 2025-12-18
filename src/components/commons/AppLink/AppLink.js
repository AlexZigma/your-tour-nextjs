import Link from "next/link";
import styles from './AppLink.module.scss'
import Image from "next/image";

export default function AppLink({ children, variant, href, img, className, dark = false, isActive = false, ...rest }) {
    const classes = [
        styles.link,
        variant && styles[`link--${variant}`],
        dark && styles['link--dark'],
        isActive && styles['link--selected'],
        className
    ].filter(Boolean).join(' ')

    return (
        <Link className={classes} href={href} {...rest}>
            {img ? (
                <>
                    <Image
                        className={styles.link__icon}
                        src={img}
                        width={26}
                        height={26}
                        alt={''}
                        loading="lazy"
                    />
                    <span className={styles.link__text}>
                        {children}
                    </span>
                </>
            ) : (
                children 
            )
            }

        </Link>
    )
}