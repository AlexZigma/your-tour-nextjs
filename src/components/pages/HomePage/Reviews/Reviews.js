import Section from "@/components/commons/Section/Section"
import styles from './Reviews.module.scss'
import Image from "next/image"

function ReviewCard({ title, subtitle, img, children }) {
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

export default function Reviews({ id }) {
    const sectionInfo = {
        id: id,
        title: 'Отзывы наших \nпутешественников',
        subtitle: 'Идейные соображения высшего порядка, \nа также рамки и место обучения кадров'
    }

    const reviews = [
        {
            title: 'Мария',
            subtitle: 'Тур: Вдали от дома',
            img: '/images/review-photo-1.jpg',
            text: `Идейные соображения высшего порядка, а также рамки и место обучения
                    кадров обеспечивает широкому кругу (специалистов) участие в
                    формировании новых предложений. Идейные соображения высшего порядка, а
                    также начало повседневной работы по формированию позиции позволяет
                    оценить значение модели развития.`
        },
        {
            title: 'Павел',
            subtitle: 'Тур: Путешествие в горы',
            img: '/images/review-photo-2.jpg',
            text: `Равным образом постоянный количественный рост и сфера нашей активности
                    играет важную роль в формировании системы обучения кадров,
                    соответствует насущным потребностям.
                    \n\n
                    Значимость этих проблем настолько очевидна, что дальнейшее развитие
                    различных форм деятельности обеспечивает широкому кругу (специалистов)
                    участие в формировании новых предложений. Повседневная практика
                    показывает, что реализация намеченных плановых заданий в значительной
                    степени обуславливает создание модели развития.`
        },
    ]
    return (
        <Section {...sectionInfo}>
            <div className={styles.reviews}>
                {reviews.map((review, index) =>
                    <ReviewCard
                        title={review.title}
                        subtitle={review.subtitle}
                        img={review.img}
                        key={index}
                    >
                        {review.text}
                    </ReviewCard>
                )}
            </div>
        </Section>
    )
}