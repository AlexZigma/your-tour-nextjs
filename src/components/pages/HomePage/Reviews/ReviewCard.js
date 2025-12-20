import styles from './Reviews.module.scss'
import Image from 'next/image'

export default function ReviewCard({ title, subtitle, img, children }) {
    return (
        <div className={`${styles['review-card']}`}>
            <div className={`${['review-card__top']}`}>
                <p className="p-big">
                    {children}
                </p>
            </div>
            <div className={`${styles['review-card__bottom']}`}>
                <div className={`${styles['review-card__info']}`}>
                    <h3>{title}</h3>
                    <p className={`${styles['review-card__subtitle']} p-small`}>{subtitle} </p>
                </div>
                <Image
                    className={`${styles['review-card__img']}`}
                    src={img}
                    width={75}
                    height={75}
                    alt=""
                    loading="lazy"
                />
            </div>
        </div>
    )
}