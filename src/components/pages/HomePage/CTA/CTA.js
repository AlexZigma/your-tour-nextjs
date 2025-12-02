export default function CTA() {
    return (
        <section className="section cta">
            <img
                className="cta__img"
                src="images/footer-photo.jpg"
                alt=""
                loading="lazy"
            />
            <div className="cta__content">
                <h3 className="cta__title">Пора в путешествие вместе с нами!</h3>
                <p className="cta__subtitle p-normal">
                    Напиши на почту и узнай подробности <br />
                    на{" "}
                    <a className="link link--email" href="mailto:yourtour@gmail.com">
                        yourtour@gmail.com
                    </a>{" "}
                </p>
            </div>
        </section>

    )
}