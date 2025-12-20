import styles from './filter.module.scss'

export default function FilterButton({ onClick, isActive, children }) {
    const classes = [
        styles['filter-button'],
        'p-big',
        isActive && styles['filter-button--active'],
    ].filter(Boolean).join(' ')

    return (
        <button
            className={classes}
            onClick={onClick}
        >
            {children}
        </button>
    )
}