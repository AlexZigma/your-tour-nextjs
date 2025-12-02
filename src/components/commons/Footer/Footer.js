export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__content">
                <p className="footer__title p-normal">Наши социальные сети</p>
                <ul className="footer__social-list p-normal">
                    <li className="footer__social-item">
                        <a className="link link--footer" href=".">
                            <img
                                className="link__icon link__icon--tg"
                                src="icons/telegram.svg"
                                alt="telegram"
                                loading="lazy"
                            />
                            <span className="link__text">telegram</span>
                        </a>
                    </li>
                    <li className="footer__social-item">
                        <a className="link link--footer" href=".">
                            <img
                                className="link__icon"
                                src="icons/fb.svg"
                                alt="telegram"
                                loading="lazy"
                            />
                            <span className="link__text">facebook</span>
                        </a>
                    </li>
                    <li className="footer__social-item">
                        <a className="link link--footer" href=".">
                            <img
                                className="link__icon link__icon--vk"
                                src="icons/vk.svg"
                                alt="telegram"
                                loading="lazy"
                            />
                            <span className="link__text">vkontakte</span>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>

    )
}