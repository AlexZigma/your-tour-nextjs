export default function Reviews() {
    return (
        <section className="section" id="reviews">
            <header className="section__header">
                <h2 className="section__title">
                    Отзывы наших <br />
                    путешественников
                </h2>
                <p className="section__subtitle p-normal">
                    Идейные соображения высшего порядка,
                    <br />а также рамки и место обучения кадров
                </p>
            </header>
            <div className="section__content comments">
                <div className="comment-card">
                    <div className="comment-card__top">
                        <p className="p-big">
                            Идейные соображения высшего порядка, а также рамки и место обучения
                            кадров обеспечивает широкому кругу (специалистов) участие в
                            формировании новых предложений. Идейные соображения высшего порядка, а
                            также начало повседневной работы по формированию позиции позволяет
                            оценить значение модели развития.
                        </p>
                    </div>
                    <div className="comment-card__bottom">
                        <div className="comment-card__info">
                            <h3>Мария</h3>
                            <p className="comment-card__subtitle p-small">Тур: Вдали от дома </p>
                        </div>
                        <img
                            className="comment-card__img"
                            src="images/review-photo-1.jpg"
                            alt=""
                            loading="lazy"
                        />
                    </div>
                </div>
                <div className="comment-card">
                    <div className="comment-card__top">
                        <p className="p-big">
                            Равным образом постоянный количественный рост и сфера нашей активности
                            играет важную роль в формировании системы обучения кадров,
                            соответствует насущным потребностям.
                            <br />
                            <br />
                            Значимость этих проблем настолько очевидна, что дальнейшее развитие
                            различных форм деятельности обеспечивает широкому кругу (специалистов)
                            участие в формировании новых предложений. Повседневная практика
                            показывает, что реализация намеченных плановых заданий в значительной
                            степени обуславливает создание модели развития.
                        </p>
                    </div>
                    <div className="comment-card__bottom">
                        <div className="comment-card__info">
                            <h3>Павел</h3>
                            <p className="comment-card__subtitle p-small">
                                Тур: Путешествие в горы
                            </p>
                        </div>
                        <img
                            className="comment-card__img"
                            src="images/review-photo-2.jpg"
                            alt=""
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>

    )
}