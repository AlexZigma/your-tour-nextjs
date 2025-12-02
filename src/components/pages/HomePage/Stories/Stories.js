export default function Stories() {
    return (
        <section className="section" id="stories">
            <header className="section__header">
                <h2 className="section__title">Истории путешествий</h2>
                <p className="section__subtitle p-normal">
                    Идейные соображения высшего порядка,
                    <br />а также рамки и место обучения кадров
                </p>
            </header>
            <div className="section__content story">
                <ul className="story__list">
                    <li className="story__item">
                        <div className="card card--big mirror">
                            <img
                                className="card__img"
                                src="images/story-photo-1.png"
                                alt=""
                                loading="lazy"
                            />
                            <div className="card__top card__top--big">
                                <h3 className="card__title">Автостопом в Стамбул</h3>
                                <div>
                                    <p className="card__subtitle p-normal">
                                        Идейные соображения высшего порядка, а также рамки и место
                                        обучения кадров обеспечивает широкому кругу (специалистов)
                                        участие в формировании новых предложений:
                                    </p>
                                    <ul className="card__list p-normal">
                                        <li className="card__list-row">вкусная еда</li>
                                        <li className="card__list-row">дешевый транспорт</li>
                                        <li className="card__list-row">красивый город.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__bottom">
                                <a className="card__button p-big" href=".">
                                    Подробнее
                                </a>
                                <div className="card__socials p-normal">
                                    <a className="card__link link link--social" href=".">
                                        telegram
                                    </a>
                                    <a className="card__link link link--social" href=".">
                                        facebook
                                    </a>
                                    <a className="card__link link link--social" href=".">
                                        YouTube
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="story__item">
                        <div className="card card--big">
                            <img
                                className="card__img"
                                src="images/story-photo-2.png"
                                alt=""
                                loading="lazy"
                            />
                            <div className="card__top card__top--big">
                                <h3 className="card__title">Автостопом в Стамбул</h3>
                                <p className="card__subtitle p-normal">
                                    Идейные соображения высшего порядка, а также рамки и место
                                    обучения кадров обеспечивает широкому кругу (специалистов) участие
                                    в формировании новых предложений.
                                </p>
                            </div>
                            <div className="card__bottom">
                                <a className="card__button p-big" href=".">
                                    Подробнее
                                </a>
                                <div className="card__socials p-normal">
                                    <a className="card__link link link--social" href=".">
                                        telegram
                                    </a>
                                    <a className="card__link link link--social" href=".">
                                        facebook
                                    </a>
                                    <a className="card__link link link--social" href=".">
                                        ВКонтакте
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="story__item">
                        <div className="card card--big mirror">
                            <img
                                className="card__img mirror"
                                src="images/story-photo-3.png"
                                alt=""
                                loading="lazy"
                            />
                            <div className="card__top card__top--big">
                                <h3 className="card__title">Автостопом в Стамбул</h3>
                                <p className="card__subtitle p-normal">
                                    Идейные соображения высшего порядка, а также рамки и место
                                    обучения кадров обеспечивает широкому кругу (специалистов) участие
                                    в формировании новых предложений.
                                </p>
                            </div>
                            <div className="card__bottom">
                                <a className="card__button p-big" href=".">
                                    Подробнее
                                </a>
                                <div className="card__socials p-normal">
                                    <a className="card__link link link--social" href=".">
                                        telegram
                                    </a>
                                    <a className="card__link link link--social" href=".">
                                        facebook
                                    </a>
                                    <a className="card__link link link--social" href=".">
                                        ВКонтакте
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>

    )
}