import styles from './tours.module.scss'
import TourCard from '@/components/commons/TourCard/TourCard'
import Section from '@/components/commons/Section/Section'


export default function Tours({ id }) {
    const filter_list = [
        { id: 1, label: 'Популярные', href: '#1' },
        { id: 2, label: 'Авторские', href: '#2' },
        { id: 3, label: 'Походы', href: '#3' },
        { id: 4, label: 'Сплавы', href: '#4' },
        { id: 5, label: 'Велопрогулки', href: '#5' }
    ]
    const cards = [
        { id: 1, title: 'Путешествие в горы', subtitle: 'от 80 000 руб', img: '/images/card-tour-photo-1.png', href: '' },
        { id: 2, title: 'Путешествие в горы', subtitle: 'от 80 000 руб', img: '/images/card-tour-photo-2.png', href: '' },
        { id: 3, title: 'Путешествие в горы', subtitle: 'от 80 000 руб', img: '/images/card-tour-photo-3.png', href: '' },
        { id: 4, title: 'Путешествие в горы', subtitle: 'от 80 000 руб', img: '/images/card-tour-photo-4.png', href: '' },
        { id: 5, title: 'Путешествие в горы', subtitle: 'от 80 000 руб', img: '/images/card-tour-photo-5.jpg', href: '' },
        { id: 6, title: 'Путешествие в горы', subtitle: 'от 80 000 руб', img: '/images/card-tour-photo-6.png', href: '' },
    ]
    return (
        <Section id={id} title={'Выбери свой тур'} filterList={filter_list}>
            <ul className={styles['tour-grid']}>
                {cards.map((item) =>
                    <li key={item.id}>
                        <TourCard {...item} />
                    </li>
                )}
            </ul>
        </Section>

    )
}