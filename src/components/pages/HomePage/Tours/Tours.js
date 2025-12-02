

export default function Tours() {
    return (
        <section className="section" id="tour-choose">
            <header className="section__header">
                <h2 className="section__title">Выбери свой тур</h2>
                <ul className="section__filter-list filter-list p-big">
                    <li className="filter-list__item">
                        <button
                            className="filter-list__button link link--filter link--selected"
                            type="button"
                        >
                            Популярные
                        </button>
                    </li>
                    <li className="filter-list__item">
                        <button className="filter-list__button link link--filter" type="button">
                            Авторские
                        </button>
                    </li>
                    <li className="filter-list__item">
                        <button className="filter-list__button link link--filter" type="button">
                            Походы
                        </button>
                    </li>
                    <li className="filter-list__item">
                        <button className="filter-list__button link link--filter" type="button">
                            Сплавы
                        </button>
                    </li>
                    <li className="filter-list__item">
                        <button className="filter-list__button link link--filter" type="button">
                            Велопрогулки
                        </button>
                    </li>
                </ul>
            </header>
            <div className="section__content tour-grid">
                <ul className="tour-grid__list">
                    <li className="tour-grid__item">
                        <div className="tour-grid__card card">
                            <img
                                className="card__img"
                                src="images/card-tour-photo-1.png"
                                alt=""
                                loading="lazy"
                            />
                            <div className="card__top">
                                <h3 className="card__title">Путешествие в горы</h3>
                                <p className="card__subtitle p-small">от 80 000 руб</p>
                            </div>
                            <div className="card__bottom">
                                <a className="card__button p-big" href=".">
                                    Подробнее
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className="tour-grid__item">
                        <div className="tour-grid__card card">
                            <img
                                className="card__img"
                                src="images/card-tour-photo-2.png"
                                alt=""
                                loading="lazy"
                            />
                            <div className="card__top">
                                <h3 className="card__title">Путешествие в горы</h3>
                                <p className="card__subtitle p-small">от 80 000 руб</p>
                            </div>
                            <div className="card__bottom">
                                <a className="card__button p-big" href=".">
                                    Подробнее
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className="tour-grid__item">
                        <div className="tour-grid__card card">
                            <img
                                className="card__img"
                                src="images/card-tour-photo-3.png"
                                alt=""
                                loading="lazy"
                            />
                            <div className="card__top">
                                <h3 className="card__title">Путешествие в горы</h3>
                                <p className="card__subtitle p-small">от 80 000 руб</p>
                            </div>
                            <div className="card__bottom">
                                <a className="card__button p-big" href=".">
                                    Подробнее
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className="tour-grid__item">
                        <div className="tour-grid__card card">
                            <img
                                className="card__img"
                                src="images/card-tour-photo-4.png"
                                alt=""
                                loading="lazy"
                            />
                            <div className="card__top">
                                <h3 className="card__title">Путешествие в горы</h3>
                                <p className="card__subtitle p-small">от 80 000 руб</p>
                            </div>
                            <div className="card__bottom">
                                <a className="card__button p-big" href=".">
                                    Подробнее
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className="tour-grid__item">
                        <div className="tour-grid__card card">
                            <img
                                className="card__img"
                                src="images/card-tour-photo-5.jpg"
                                alt=""
                                loading="lazy"
                            />
                            <div className="card__top">
                                <h3 className="card__title">Путешествие в горы</h3>
                                <p className="card__subtitle p-small">от 80 000 руб</p>
                            </div>
                            <div className="card__bottom">
                                <a className="card__button p-big" href=".">
                                    Подробнее
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className="tour-grid__item">
                        <div className="tour-grid__card card">
                            <img
                                className="card__img"
                                src="images/card-tour-photo-6.png"
                                alt=""
                                loading="lazy"
                            />
                            <div className="card__top">
                                <h3 className="card__title">Путешествие в горы</h3>
                                <p className="card__subtitle p-small">от 80 000 руб</p>
                            </div>
                            <div className="card__bottom">
                                <a className="card__button p-big" href=".">
                                    Подробнее
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>

    )
}