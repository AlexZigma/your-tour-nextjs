import styles from './tours.module.scss'
import cardStyles from './card.module.scss'
import filterStyles from './filter.module.scss'
import linkStyle from './link.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

function Card({ id, title, subtitle, img }) {
    return (
        <div className={cardStyles.card}>
            <img
                className={cardStyles.card__img}
                src={img}
                alt=""
                loading="lazy"
            />
            <div className={cardStyles.card__top}>
                <h3>{title}</h3>
                <p>{subtitle}</p>
            </div>
            <div className={cardStyles.card__bottom}>
                <Link className={cardStyles.card__button} href="#">
                    <span className='p-big'>Подробнее</span>
                </Link>
            </div>
        </div>
    )
}

function Button({ label, onClick, isActive }) {
    return (
        <button
            className={
                `${styles['filter-list__button']} 
                ${linkStyle.link} 
                ${linkStyle['link--filter']}
                ${isActive ? linkStyle['link--selected'] : ''}
                p-big`
            }
            type="button"
            onClick={onClick}
        >
            {label}
        </button>
    )
}

function FilterList({ filter_list, className = '' }) {
    const [activeId, setActiveId] = useState(filter_list[0]?.id)
    return (
        <ul className={`${filterStyles['filter-list']} ${className}`}>
            {filter_list.map((item) =>
                <li className={`filter-list__item`} key={item.id}>
                    <Button
                        label={item.label}
                        onClick={() => setActiveId(item.id)} 
                        isActive={activeId === item.id}/>
                </li>
            )}
        </ul>
    )
}

export default function Tours() {
    const filter_list = [
        { id: 1, label: 'Популярные' },
        { id: 2, label: 'Авторские' },
        { id: 3, label: 'Походы' },
        { id: 4, label: 'Сплавы' },
        { id: 5, label: 'Велопрогулки' }
    ]
    const cards = [
        { id: 1, title: 'Путешествие в горы', subtitle: 'от 80 000 руб', img: 'images/card-tour-photo-1.png' },
        { id: 2, title: 'Путешествие в горы', subtitle: 'от 80 000 руб', img: 'images/card-tour-photo-2.png' },
        { id: 3, title: 'Путешествие в горы', subtitle: 'от 80 000 руб', img: 'images/card-tour-photo-3.png' },
        { id: 4, title: 'Путешествие в горы', subtitle: 'от 80 000 руб', img: 'images/card-tour-photo-4.png' },
        { id: 5, title: 'Путешествие в горы', subtitle: 'от 80 000 руб', img: 'images/card-tour-photo-5.jpg' },
        { id: 6, title: 'Путешествие в горы', subtitle: 'от 80 000 руб', img: 'images/card-tour-photo-6.png' },
    ]
    return (
        <section className={styles.section} id='tour-choose'>
            <header className={styles.section__header}>
                <h2 className={styles.section__title}>Выбери свой тур</h2>
                <FilterList filter_list={filter_list} className={styles['section__filter-list']} />
            </header>
            <div className={`${styles.section__content} ${styles['tour-grid']}`}>
                <ul className={styles['tour-grid__list']}>
                    {cards.map((item) =>
                        <li key={item.id}>
                            <Card {...item} />
                        </li>
                    )}
                </ul>
            </div>
        </section>

    )
}