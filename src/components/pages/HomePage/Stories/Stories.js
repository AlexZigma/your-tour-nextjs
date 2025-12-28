import Section from "@/components/commons/Section/Section"
import StoryCard from "@/components/commons/Card/StoryCard"
import styles from './Stories.module.scss'
import { stories } from "@/data/stories"

export default function Stories({ id }) {
    return (
        <Section
            id={id}
            title={'Истории путешествий'}
            subtitle={'Идейные соображения высшего порядка,\nа также рамки и место обучения кадров'}>

            <ul className={styles.story__list}>
                {stories.map((story) =>
                    <li key={story.id}>
                        <StoryCard title={story.title} img={story.img} href={story.href} links={story.links}>
                            {story.description}
                            {
                                story.list && (
                                    <ul className={styles.list}>
                                        {story.list.map((item) => 
                                            <li className={styles.list__item} key={item}>{item}</li>
                                        )}
                                    </ul>
                                )
                            }
                        </StoryCard>
                    </li>
                )}
            </ul>
        </Section>

    )
}