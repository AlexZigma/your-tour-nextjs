import styles from './Picture.module.scss'
import Image from 'next/image'

export default function Picture({src, className}) {
    return (
        <div className={`${styles.picture} ${className}`}>
            <Image
                className={`${styles.picture__img}`}
                src={src}
                fill
                alt=""
                sizes="(max-width: 1024px) 100vw, 450px"
            />
        </div>
    )
}