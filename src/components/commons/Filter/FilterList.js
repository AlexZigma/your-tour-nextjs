import AppLink from '../AppLink/AppLink'
import styles from './filter.module.scss'
import { useState } from 'react'


export default function FilterList({ filter_list, className = '' }) {
    const [activeId, setActiveId] = useState(filter_list[0]?.id)
    return (
        <ul className={`${styles['filter-list']} ${className}`}>
            {filter_list.map((item) =>
                <li className={`filter-list__item`} key={item.id}>
                    <AppLink
                        variant={'filter'}
                        className={`
                            ${styles['filter-list__button']} 
                            p-big
                        `}
                        href={item.href}
                        onClick={() => setActiveId(item.id)}
                        isActive={activeId === item.id}
                    >
                        {item.label}
                    </AppLink>
                </li>
            )}
        </ul>
    )
}