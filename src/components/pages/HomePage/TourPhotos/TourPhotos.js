export default function TourPhotos() {
    return (
        <section className="section section--wide">
            <header className="section__header">
                <h2 className="section__title">Фотографии путешествий</h2>
                <p className="section__subtitle p-normal">
                    Идейные соображения высшего порядка,
                    <br />а также рамки и место обучения кадров
                </p>
            </header>
            <div className="section__content photo-grid">
                <div className="photo-grid__row photo-grid__row--18">
                    <img
                        className="photo-grid__img"
                        src="images/travel-photo-1.png"
                        alt=""
                        loading="lazy"
                    />
                    <img
                        className="photo-grid__img hide--tablet"
                        src="images/travel-photo-2.png"
                        alt=""
                        loading="lazy"
                    />
                    <img
                        className="photo-grid__img hide--mobile"
                        src="images/travel-photo-3.png"
                        alt=""
                        loading="lazy"
                    />
                    <img
                        className="photo-grid__img"
                        src="images/travel-photo-4.png"
                        alt=""
                        loading="lazy"
                    />
                </div>
                <div className="photo-grid__row photo-grid__row--center">
                    <img
                        className="photo-grid__img"
                        src="images/travel-photo-5.png"
                        alt=""
                        loading="lazy"
                    />
                    <img
                        className="photo-grid__img hide--mobile"
                        src="images/travel-photo-6.png"
                        alt=""
                        loading="lazy"
                    />
                    <img
                        className="photo-grid__img hide--tablet"
                        src="images/travel-photo-7.jpg"
                        alt=""
                        loading="lazy"
                    />
                    <img
                        className="photo-grid__img"
                        src="images/travel-photo-8.png"
                        alt=""
                        loading="lazy"
                    />
                    <img
                        className="photo-grid__img"
                        src="images/travel-photo-9.png"
                        alt=""
                        loading="lazy"
                    />
                </div>
                <div className="photo-grid__row">
                    <img
                        className="photo-grid__img"
                        src="images/travel-photo-10.png"
                        alt=""
                        loading="lazy"
                    />
                    <img
                        className="photo-grid__img"
                        src="images/travel-photo-11.jpg"
                        alt=""
                        loading="lazy"
                    />
                    <img
                        className="photo-grid__img hide--mobile"
                        src="images/travel-photo-12.jpg"
                        alt=""
                        loading="lazy"
                    />
                    <img
                        className="photo-grid__img hide--tablet"
                        src="images/travel-photo-13.jpg"
                        alt=""
                        loading="lazy"
                    />
                </div>
            </div>
        </section>

    )
}