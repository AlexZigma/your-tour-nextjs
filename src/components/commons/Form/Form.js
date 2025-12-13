import Button from "@/components/commons/Button/Button"
import Link from "next/link"
import styles from './Form.module.scss'
import { useEffect, useRef, useState } from "react"
// import PhoneInput from 'react-phone-number-input'

function Field({ id, label, children }) {
    return (
        <div className={styles.field}>
            <label className={styles.field__label} htmlFor={id}>
                {label}
            </label>
            {children}
        </div>
    )
}

function Input({ id, label, type = 'text', value, onChange, ...rest }) {
    return (
        <Field id={id} label={label}>
            <input
                id={id}
                name={id}
                type={type}
                className={`${styles.field__input}`}
                value={value}
                onChange={onChange}
                {...rest}
            />
        </Field>
    )
}

function Select({ id, label, options, defaultValue, value, onChange }) {
    return (
        <Field id={id} label={label}>
            <select
                id={id}
                name={id}
                className={`${styles.field__input} ${styles['field__input--select']}`}
                value={value}
                onChange={onChange}
            >
                <option disabled hidden value=''>{defaultValue.label}</option>
                {options.map((option, index) =>
                    <option value={option.value} key={index} className={styles['field__input-option']}>{option.label}</option>
                )}
            </select>
        </Field>
    )
}

function PhoneInput({ id, label, value, onChange }) {
    const mask = '+7 (999) 999-99-99'

    const handleChange = (e) => {
        const digits = e.target.value.replace(/[^0-9/+]/g, '')
        let j = 0
        let i = 0
        let formated = ''
        while (i < digits.length && j < mask.length) {
            if (mask.charAt(j) === '9' || mask.charAt(j) === digits.charAt(i)) {
                formated += digits.charAt(i++)
            } else {
                formated += mask.charAt(j)
            }
            j++
        }
        onChange(formated)
    }
    return (
        <Field id={id} label={label}>
            <input
                id={id}
                name={id}
                className={`${styles.field__input}`}
                type="tel"
                placeholder="+7 (___) ___-__-__"
                value={value}
                onChange={handleChange}
            />
        </Field>
    )
}

function DateInput({ id, label, minDate, value, onChange }) {
    const datePicker = useRef(null)

    useEffect(() => {
        datePicker.current.min = minDate
    }, [minDate])

    const dateToPoints = (date) => {
        if (!date) return ''
        const [yyyy, mm, dd] = date.split('-')
        return `${dd}.${mm}.${yyyy}`
    }

    return (
        <Field id={id} label={label}>
            <div className={styles.field__container}>
                <input
                    className={`${styles.field__input} p-normal`}
                    type="text"
                    id={`${id}-text`}
                    name={`${id}-text`}
                    placeholder="ДД.ММ.ГГГГ"
                    readOnly
                    value={dateToPoints(value)}
                    onClick={() => datePicker.current.showPicker()}
                />
                <input
                    id={id}
                    name={id}
                    ref={datePicker}
                    className={`${styles.field__input} ${styles['field__input--date']} p-normal`}
                    type="date"
                    value={value}
                    onChange={onChange}
                    required
                />
            </div>
        </Field>
    )
}

function TextArea({ id, label, value, onChange }) {
    return (
        <Field id={id} label={label} wide>
            <textarea
                className={`${styles.field__input} ${styles['field__input--area']}`}
                name={id}
                id={id}
                value={value}
                onChange={onChange}
            />
        </Field>
    )
}

function RadioGroup({ id, label, options, value, onChange }) {
    return (
        <fieldset className={styles.radio}>
            <legend>{label}</legend>
            <div className={styles.radio__list}>
                {options.map((item, index) =>
                    <label className={styles.radio__item} htmlFor={item.id} key={index}>
                        <input
                            className={styles.radio__button}
                            type="radio"
                            name={id}
                            id={item.id}
                            checked={value === item.id}
                            value={item.id}
                            onChange={onChange}
                            required
                        />
                        <span>{item.label}</span>
                    </label>
                )}
            </div>
        </fieldset>
    )
}

function CheckBox({ id, children, value, onChange }) {
    return (
        <div className={styles.checkbox}>
            <input
                className={styles.checkbox__button}
                type="checkbox"
                id={id}
                name={id}
                checked={value}
                onChange={onChange}
                required
            />
            <label className={`p-small ${styles.checkbox__label}`} htmlFor={id}>
                {children}
            </label>
        </div>
    )
}

const getTodayIso = () => {
    const date = new Date()
    const yyyy = date.getFullYear()
    const mm = String(date.getMonth() + 1).padStart(2, '0')
    const dd = String(date.getDate()).padStart(2, '0')
    return `${yyyy}-${mm}-${dd}`
}

export default function Form() {
    const todayIso = getTodayIso()

    const initialFormState = {
        name: '',
        direction: '',
        email: '',
        phone: '',
        dateStart: '',
        dateEnd: '',
        comment: '',
        age: '',
        license: false,
    }

    const [formState, setFormState] = useState(initialFormState)

    const handleChange = (e) => {
        setFormState((prev) => ({ ...prev, [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }))
        console.log(formState)
    }

    const handleReset = () => {
        setFormState(initialFormState)
    }

    return (
        <form className={styles.form} id="form">
            <div className={styles.form__grid}>
                <Input
                    id="name"
                    label={'Имя'}
                    type="text"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Введите Ваше имя"
                    autoComplete="name"
                    required
                />
                <Select
                    id={'direction'}
                    label={'Направление'}
                    defaultValue={{ value: '', label: 'Куда хотите ехать' }}
                    options={[
                        { value: 'opt1', label: 'Горы' },
                        { value: 'opt2', label: 'Реки' },
                        { value: 'opt3', label: 'Моря' },
                    ]}
                    value={formState.direction}
                    onChange={handleChange}
                />

                <Input
                    id="email"
                    label={'Email'}
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="example@mail.com"
                    autoComplete="email"
                    required
                />

                <PhoneInput
                    id="phone"
                    label={'Телефон'}
                    value={formState.phone}
                    onChange={(value) => setFormState((prev) => ({...prev, phone: value}))}
                    autoComplete="tel"
                    required
                />
                <DateInput
                    id={'dateStart'}
                    label={'Дата от'}
                    value={formState.dateStart}
                    onChange={handleChange}
                    minDate={todayIso}
                />
                <DateInput
                    id={'dateEnd'}
                    label={'Дата до'}
                    value={formState.dateEnd}
                    onChange={handleChange}
                    minDate={formState.dateStart || todayIso}
                />
                <TextArea
                    id={'comment'}
                    label={'Коментарий'}
                    value={formState.comment}
                    onChange={handleChange}
                />
            </div>
            <RadioGroup
                id={'age'}
                label={'Вам есть 18 лет?'}
                options={[
                    { id: 'yes', label: 'Да' },
                    { id: 'no', label: 'Нет' },
                ]}
                value={formState.age}
                onChange={handleChange}
            />
            <CheckBox id='license' value={formState.license} onChange={handleChange}>
                Нажимая кнопку, я принимаю условия {' '}
                <Link className={styles['checkbox__link']} href="">
                    Лицензионного договора
                </Link>
            </CheckBox>
            <div className={styles.form__buttons}>
                <Button variant='submit' type='submit'>Найти тур</Button>
                <Button variant='reset' type='button' onClick={handleReset}>Сбросить</Button>
            </div>
        </form>
    )
}