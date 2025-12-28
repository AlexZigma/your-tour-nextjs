import Section from "@/components/commons/Section/Section"
import styles from './Reviews.module.scss'
import { reviews } from "@/data/reviews"
import ReviewCard from "./ReviewCard"


export default function Reviews({ id }) {
    const sectionInfo = {
        id: id,
        title: 'Отзывы наших \nпутешественников',
        subtitle: 'Идейные соображения высшего порядка, \nа также рамки и место обучения кадров'
    }

    return (
        <Section {...sectionInfo}>
            <div className={styles.reviews}>
                {reviews.map((review) =>
                    <ReviewCard
                        title={review.title}
                        subtitle={review.subtitle}
                        img={review.img}
                        key={review.id}
                    >
                        {review.text}
                    </ReviewCard>
                )}
            </div>
        </Section>
    )
}