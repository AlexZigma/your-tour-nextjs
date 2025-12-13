import './Section.module.scss'
import Filter from '@/components/commons/Filter/FilterList'

export default function Section({ id, title, filter_list, children }) {
    return (
        <section className="section" id={id}>
            <header className="section__header">
                <h2 className="section__title">
                    {title}
                </h2>
                <Filter filter_list={filter_list} className={styles['section__filter-list']} />
            </header>
            <div className="section__content form-bg p-normal">
                {children}
            </div>
        </section>
    )
}