import Section from "@/components/commons/Section/Section"
import TourCard from "@/components/commons/TourCard/TourCard"
import styles from './Stories.module.scss'

export default function Stories() {
    const stories = [
        {
            title: 'Автостопом в Стамбул',
            img: '/images/story-photo-1.png',
            href: '',
            links: [{ label: 'telegram', href: '' }, { label: 'facebook', href: '' }, { label: 'ВКонтакте', href: '' },],
            description: (
                <>
                    Идейные соображения высшего порядка, а также рамки и место
                    обучения кадров обеспечивает широкому кругу (специалистов)
                    участие в формировании новых предложений:
                    < ul className={styles.list}>
                        <li className={styles.list__item}>вкусная еда</li>
                        <li className={styles.list__item}>дешевый транспорт</li>
                        <li className={styles.list__item}>красивый город.</li>
                    </ul >
                </>
            )
        },
        {
            title: 'Автостопом в Стамбул',
            img: '/images/story-photo-2.png',
            href: '',
            links: [{ label: 'telegram', href: '' }, { label: 'facebook', href: '' }, { label: 'ВКонтакте', href: '' },],
            description: (
                <>
                    Идейные соображения высшего порядка, а также рамки и место
                    обучения кадров обеспечивает широкому кругу (специалистов)
                    участие в формировании новых предложений:
                </>
            )
        },
        {
            title: 'Автостопом в Стамбул',
            img: '/images/story-photo-3.png',
            href: '',
            links: [{ label: 'telegram', href: '' }, { label: 'facebook', href: '' }, { label: 'ВКонтакте', href: '' },],
            description: (
                <>
                    Идейные соображения высшего порядка, а также рамки и место
                    обучения кадров обеспечивает широкому кругу (специалистов)
                    участие в формировании новых предложений:
                </>
            )
        }
    ]

    return (
        <Section
            id={'stories'}
            title={'Истории путешествий'}
            subtitle={'Идейные соображения высшего порядка,\nа также рамки и место обучения кадров'}>

            <ul className={styles.story__list}>
                {stories.map((story, index) =>
                    <li key={index}>
                        <TourCard big title={story.title} img={story.img} href={story.href} links={story.links}>
                            {story.description}
                        </TourCard>
                    </li>
                )}
            </ul>
        </Section>

    )
}