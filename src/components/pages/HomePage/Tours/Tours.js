import styles from './tours.module.scss'
import TourCard from '@/components/commons/Card/TourCard'
import Section from '@/components/commons/Section/Section'
import { filter_list, tours } from '@/data/tours'

export default function Tours({ id }) {
    return (
        <Section id={id} title={'Выбери свой тур'} filterList={filter_list}>
            <ul className={styles['tour-grid']}>
                {tours.map((item) =>
                    <li key={item.id}>
                        <TourCard {...item} />
                    </li>
                )}
            </ul>
        </Section>

    )
}