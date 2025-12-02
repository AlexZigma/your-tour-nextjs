export default function CreateTour() {
    return (
        <section className="section" id="tour-create">
            <header className="section__header">
                <h2 className="section__title">Собери свой тур</h2>
                <p className="section__subtitle p-normal">
                    Идейные соображения высшего порядка,
                    <br />а также рамки и место обучения кадров
                </p>
            </header>
            <div className="section__content form-bg p-normal">
                <form className="form" id="form">
                    <div className="form__grid">
                        <div className="field">
                            <label className="field__label" htmlFor="name">
                                Имя
                            </label>
                            <input
                                className="field__input field__input--text"
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Введите Ваше имя"
                                autoComplete="name"
                                required=""
                            />
                        </div>
                        <div className="field">
                            <label className="field__label" htmlFor="direction">
                                Направление
                            </label>
                            <select
                                className="field__input field__input--select"
                                id="direction"
                                name="direction"
                            >
                                <option
                                    className="field__input-option"
                                    disabled=""
                                    selected=""
                                    hidden=""
                                    value=""
                                >
                                    Куда хотите ехать
                                </option>
                                <option className="field__input-option" value="opt-1">
                                    Горы
                                </option>
                                <option className="field__input-option" value="opt-2">
                                    Реки
                                </option>
                                <option className="field__input-option" value="opt-3">
                                    Моря
                                </option>
                            </select>
                        </div>
                        <div className="field">
                            <label className="field__label" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="field__input field__input--text"
                                type="email"
                                id="email"
                                name="email"
                                placeholder="example@mail.com"
                                autoComplete="email"
                                required=""
                            />
                        </div>
                        <div className="field">
                            <label className="field__label" htmlFor="phoneInput">
                                Телефон
                            </label>
                            <input
                                className="field__input field__input--text"
                                type="tel"
                                name="phone"
                                pattern="\+7\([0-9]{3}\)[0-9]{3}-[0-9]{2}-[0-9]{2}"
                                id="phoneInput"
                                placeholder="+ 7 ( _ _ _ ) _ _ _ - _ _ - _ _"
                                autoComplete="tel"
                                required=""
                            />
                        </div>
                        <div className="field">
                            <label className="field__label" htmlFor="date-start">
                                Дата от
                            </label>
                            <div className="field__container">
                                <input
                                    className="field__input field__input p-normal"
                                    type="text"
                                    id="date-start-text"
                                    name="date-start-text"
                                    placeholder="ДД.ММ.ГГГГ"
                                    readOnly=""
                                />
                                <input
                                    className="field__input field__input--date p-normal"
                                    type="date"
                                    id="date-start"
                                    name="date-start"
                                    required=""
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label className="field__label" htmlFor="date-end">
                                Дата до
                            </label>
                            <div className="field__container">
                                <input
                                    className="field__input field__input p-normal"
                                    type="text"
                                    id="date-end-text"
                                    name="date-end-text"
                                    placeholder="ДД.ММ.ГГГГ"
                                    readOnly=""
                                />
                                <input
                                    className="field__input field__input--date p-normal"
                                    type="date"
                                    id="date-end"
                                    name="date-end"
                                    required=""
                                />
                            </div>
                        </div>
                        <div className="field wide">
                            <label className="field__label" htmlFor="comment">
                                Комментарий
                            </label>
                            <textarea
                                className="field__input field__input--area"
                                name="comment"
                                id="comment"
                                defaultValue={""}
                            />
                        </div>
                    </div>
                    <div className="form__radio radio">
                        <p>Вам есть 18 лет?</p>
                        <div className="radio__list">
                            <label className="radio__item" htmlFor="yes">
                                <input
                                    className="radio__button"
                                    type="radio"
                                    name="age"
                                    id="yes"
                                    required=""
                                />
                                <span>Да</span>
                            </label>
                            <label className="radio__item" htmlFor="no">
                                <input
                                    className="radio__button"
                                    type="radio"
                                    name="age"
                                    id="no"
                                    required=""
                                />
                                <span>Нет</span>
                            </label>
                        </div>
                    </div>
                    <div className="form__license checkbox">
                        <input
                            className="checkbox__button"
                            type="checkbox"
                            name="license"
                            id="license"
                            required=""
                        />
                        <label className="p-small checkbox__label" htmlFor="license">
                            Нажимая кнопку, я принимаю условия
                            <a className="checkbox__link" href=".">
                                Лицензионного договора
                            </a>
                        </label>
                    </div>
                    <div className="form__buttons">
                        <button className="button button--submit" type="submit">
                            Найти тур
                        </button>
                        <button className="button button--reset" type="reset">
                            Сбросить
                        </button>
                    </div>
                </form>
            </div>
        </section>

    )
}