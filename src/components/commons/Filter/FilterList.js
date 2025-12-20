import styles from './filter.module.scss'
import { useState } from 'react'
import FilterButton from './FilterButton'

export default function FilterList({ filter_list, className = '' }) {
    const [activeId, setActiveId] = useState(filter_list[0]?.id)

    return (
        <ul className={`${styles['filter-list']} ${className}`}>
            {filter_list.map((item) =>
                <li key={item.id}>
                    <FilterButton
                        isActive={activeId === item.id}
                        onClick={() => setActiveId(item.id)}
                    >
                        {item.label}
                    </FilterButton>
                </li>
            )}
        </ul>
    )
}